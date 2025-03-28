import { db } from './firebase';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  orderBy,
  limit,
  updateDoc,
  deleteDoc,
  startAfter,
  endBefore,
  limitToLast,
  getDoc,
  addDoc,
  QueryDocumentSnapshot,
  DocumentData
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

// Define interfaces
interface UserDocument {
  uid?: string;
  email: string;
  role: string;
  sid?: string | null;
  lid?: string | null;
  Name?: {
    Vorname: string;
    Nachname: string;
  };
}

interface UserNameResult {
  Vorname: string;
  Nachname: string;
}

interface GetUsersOptions {
  sortKey?: string;
  sortOrder?: 'asc' | 'desc';
  pageSize?: number;
  lastVisible?: QueryDocumentSnapshot<DocumentData> | null;
  direction?: 'next' | 'prev';
}

const getUserRole = async (): Promise<string | null> => {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (!user) {
    console.log('No user is currently signed in.');
    return null;
  }

  const email = user.email;
  const usersCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User');
  const q = query(usersCollection, where('email', '==', email));
  
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
};

const createUserIfNotExists = async (
  user: FirebaseUser, 
  onUserCreated?: () => void
): Promise<void> => {
  const usersCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User');
  const userDoc = await getDocs(query(usersCollection, where('email', '==', user.email)));

  if (userDoc.empty) {
    try {
      const userDocRef = doc(usersCollection); // Automatically generate ID
      await setDoc(userDocRef, {
        email: user.email,
        role: '',
        sid: null,
        uid: userDocRef.id, // Use the generated ID
      });

      // Call the callback function if it exists and is a function
      if (onUserCreated) {
        onUserCreated();
      }
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  } else {
    console.log('User already exists');
    const existingUser = userDoc.docs[0].data() as UserDocument;
    if (!existingUser.role) {
      console.log('User exists but has no role, calling onUserCreated callback');
      if (onUserCreated) {
        onUserCreated();
      }
    }
  }
};

const getAllUsers = async ({
  sortKey = 'email',
  sortOrder = 'asc',
  pageSize = 8,
  lastVisible = null,
  direction = 'next'
}: GetUsersOptions = {}): Promise<{
  users: UserDocument[];
  lastDoc: QueryDocumentSnapshot<DocumentData>;
  firstDoc: QueryDocumentSnapshot<DocumentData>;
}> => {
  let usersQuery = query(
    collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User'),
    orderBy(sortKey, sortOrder),
    limit(pageSize)
  );

  if (lastVisible) {
    usersQuery = query(
      collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User'),
      orderBy(sortKey, sortOrder),
      direction === 'next' ? startAfter(lastVisible) : endBefore(lastVisible),
      direction === 'next' ? limit(pageSize) : limitToLast(pageSize)
    );
  }

  const querySnapshot = await getDocs(usersQuery);
  const users = querySnapshot.docs.map((doc) => ({ 
    uid: doc.id, 
    ...doc.data() 
  } as UserDocument));
  
  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  const firstDoc = querySnapshot.docs[0];

  return { users, lastDoc, firstDoc };
};

const checkAuthState = (callback: (user: FirebaseUser | null) => void): void => {
  const auth = getAuth();
  onAuthStateChanged(auth, callback);
};

const updateUser = async (uid: string, updatedData: Partial<UserDocument>): Promise<void> => {
  try {
    const userRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'User', uid);
    await updateDoc(userRef, updatedData);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

const createUser = async (user: UserDocument): Promise<void> => {
  const usersCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User');
  const userDoc = await getDocs(query(usersCollection, where('email', '==', user.email)));

  if (userDoc.empty) {
    try {
      const newUser: UserDocument = {
        email: user.email,
        role: user.role,
        ...(user.sid && { sid: user.sid }),
        ...(user.lid && { lid: user.lid }),
      };
      await addDoc(usersCollection, newUser);
      await addUidToUser(user.email);
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }
};

const addUidToUser = async (email: string): Promise<void> => { 
  const usersCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User');
  const userDoc = await getDocs(query(usersCollection, where('email', '==', email)));
  const uid = userDoc.docs[0].id;
  const userRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'User', uid);
  await updateDoc(userRef, { uid });
};

const deleteUser = async (uid: string): Promise<void> => {
  try {
    const userRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'User', uid);
    await deleteDoc(userRef);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

const getUserNameById = async (id: string): Promise<UserNameResult> => {
  const userRef = doc(db, 'EduFace', 'Schulzentrum-ybbs', 'User', id);
  const userDoc = await getDoc(userRef);
  
  if (userDoc.exists()) {
    const data = userDoc.data() as UserDocument;
    return {
      Vorname: data.Name?.Vorname || '',
      Nachname: data.Name?.Nachname || '',
    };
  }
  
  return { Vorname: '', Nachname: '' };
};

const getMeinStundenplan = async (): Promise<DocumentData[] | null> => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log('No user is currently signed in.');
    return null;
  }

  const email = user.email;
  const usersCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'User');

  // Query the user document to get the student's sid
  const q = query(usersCollection, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0].data() as UserDocument;
    const sid = userDoc.sid; // Get the sid from user document
    const studentsCollection = collection(db, 'EduFace', 'Schulzentrum-ybbs', 'Schueler');

    // Query the student document to get the KID (class ID)
    if (!sid) {
      console.log('No student ID found for this user.');
      return null;
    }

    const studentDocRef = doc(studentsCollection, sid);
    const studentDoc = await getDoc(studentDocRef);

    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const KID = studentData.KID; // Get the KID (class ID)

      // Now fetch the timetable for the class (Stundenplan)
      const stundenplanCollection = collection(
        db,
        'EduFace',
        'Schulzentrum-ybbs',
        'Stundenplan',
        KID.toString()
      );
      const stundenplanDoc = await getDocs(stundenplanCollection);

      if (!stundenplanDoc.empty) {
        const timetableData = stundenplanDoc.docs.map((doc) => doc.data());
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

export {
  getUserRole,
  createUserIfNotExists,
  getAllUsers,
  checkAuthState,
  updateUser,
  createUser,
  deleteUser,
  getUserNameById,
  getMeinStundenplan,
  UserDocument
};