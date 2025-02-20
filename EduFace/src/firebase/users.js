import { db } from './firebase';
import { collection, query, where, getDocs, setDoc, doc, orderBy, limit, updateDoc, deleteDoc, startAfter, endBefore, limitToLast, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const getUserRole = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    console.log('No user is currently signed in.');
    return null;
  }

  const email = user.email;
  const usersCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "User");
  const q = query(usersCollection, where("email", "==", email));
  try {
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];

      return userDoc.data().role;
    } else {
      console.log('No user found with this email.');
      return null;
    }
  } catch (error) {
    console.error('Error getting user role:', error);
    return null;
  }
}

const createUserIfNotExists = async (user, onUserCreated) => {
  const usersCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "User");
  const userDoc = await getDocs(query(usersCollection, where("email", "==", user.email)));

  if (userDoc.empty) {
    try {

      // Get the highest existing uid
      const lastUserQuery = query(usersCollection, orderBy("uid", "desc"), limit(1));
      const lastUserSnapshot = await getDocs(lastUserQuery);
      let newUid = 1000;
      if (!lastUserSnapshot.empty) {
        const lastUser = lastUserSnapshot.docs[0].data();
        newUid = lastUser.uid + 1;
      }


      const userDocRef = doc(usersCollection, newUid.toString());
      await setDoc(userDocRef, {
        email: user.email,
        role: '',
        sid: null,
        uid: newUid
      });

      
      // Call the callback function if it exists and is a function
      if (onUserCreated && typeof onUserCreated === 'function') {

        onUserCreated();
      }
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  } else {
    console.log('User already exists');
    const existingUser = userDoc.docs[0].data();
    if (!existingUser.role) {
      console.log('User exists but has no role, calling onUserCreated callback');
      if (onUserCreated && typeof onUserCreated === 'function') {
        onUserCreated();
      }
    }
  }
}

const getAllUsers = async (sortKey = 'email', sortOrder = 'asc', pageSize = 8, lastVisible = null, direction = 'next') => {
  let usersQuery = query(
    collection(db, "EduFace", "Schulzentrum-ybbs", "User"),
    orderBy(sortKey, sortOrder),
    limit(pageSize)
  );

  if (lastVisible) {
    usersQuery = query(
      collection(db, "EduFace", "Schulzentrum-ybbs", "User"),
      orderBy(sortKey, sortOrder),
      direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
      direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
    );
  }

  const querySnapshot = await getDocs(usersQuery);
  const users = querySnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  const firstDoc = querySnapshot.docs[0];

  return { users, lastDoc, firstDoc };
};

const checkAuthState = (callback) => {
  const auth = getAuth();
  onAuthStateChanged(auth, callback);
};

const updateUser = async (uid, updatedData) => {
  try {
    const userRef = doc(db, "EduFace", "Schulzentrum-ybbs", "User", uid.toString());
    await updateDoc(userRef, updatedData);

  } catch (error) {
    console.error('Error updating user:', error);
  }
};

const createUser = async (user) => {
  const usersCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "User");
  const userDoc = await getDocs(query(usersCollection, where("email", "==", user.email)));

  if (userDoc.empty) {
    try {
      const lastUserQuery = query(usersCollection, orderBy("uid", "desc"), limit(1));
      const lastUserSnapshot = await getDocs(lastUserQuery);
      let newUid = 1000;
      if (!lastUserSnapshot.empty) {
        const lastUser = lastUserSnapshot.docs[0].data();
        newUid = lastUser.uid + 1;
      }

      const userDocRef = doc(usersCollection, newUid.toString());
      await setDoc(userDocRef, {
        email: user.email,
        role: user.role,
        uid: newUid,
        sid: user.sid,
        lid: user.lid
      });

    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }
};

const deleteUser = async (uid) => {
  try {
    const userRef = doc(db, "EduFace", "Schulzentrum-ybbs", "User", uid.toString());
    await deleteDoc(userRef);

  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

const getUserNameById = async (id) => {
  const userRef = doc(db, "EduFace", "Schulzentrum-ybbs", "User", id.toString());
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    const data = userDoc.data();
    return {
      Vorname: data.Name.Vorname || '',
      Nachname: data.Name.Nachname || ''
    };
  }
  return { Vorname: '', Nachname: '' };
};

// Fetch "Mein Stundenplan" for the logged-in user
const getMeinStundenplan = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log('No user is currently signed in.');
    return null;
  }

  const email = user.email;
  const usersCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "User");

  // Query the user document to get the student's sid
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0].data();
    const sid = userDoc.sid; // Get the sid from user document
    const studentsCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "Schueler");

    // Query the student document to get the KID (class ID)
    const studentDocRef = doc(studentsCollection, sid.toString());
    const studentDoc = await getDoc(studentDocRef);

    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const KID = studentData.KID; // Get the KID (class ID)

      // Now fetch the timetable for the class (Stundenplan)
      const stundenplanCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "Stundenplan", KID.toString());
      const stundenplanDoc = await getDocs(stundenplanCollection);

      if (!stundenplanDoc.empty) {
        const timetableData = stundenplanDoc.docs.map(doc => doc.data());
        console.log('Timetable for class', KID, ':', timetableData);
        return timetableData; // Return the timetable data for the class
      } else {
        console.log('No timetable found for this class.');
        return null;
      }
    } else {
      console.log('Student data not found for this sid.');
      return null;
    }
  } else {
    console.log('User not found in database.');
    return null;
  }
};

export { getUserRole, createUserIfNotExists, getAllUsers, checkAuthState, updateUser, createUser, deleteUser, getUserNameById, getMeinStundenplan };
