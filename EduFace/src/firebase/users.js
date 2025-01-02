import { db } from './firebase';
import { collection, query, where, getDocs, setDoc, doc, orderBy, limit } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

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

const createUserIfNotExists = async (user) => {
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
        role: 'schueler',
        sid: null,
        uid: newUid
      });
      console.log('New user document created.');
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  }
}

const getAllUsers = async () => {
  const usersCollection = collection(db, "EduFace", "Schulzentrum-ybbs", "User");
  try {
    const querySnapshot = await getDocs(usersCollection);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
};

export { getUserRole, createUserIfNotExists, getAllUsers };
