import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc } from "firebase/firestore" 
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createUserIfNotExists } from './users';

const firebaseConfig = {
  apiKey: "AIzaSyAOcWY6hBJ7IgFaXY8STdLrxArgTQYF6to",
  authDomain: "eduface-cb182.firebaseapp.com",
  databaseURL: "https://eduface-cb182-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eduface-cb182",
  storageBucket: "eduface-cb182.firebasestorage.app",
  messagingSenderId: "960808995303",
  appId: "1:960808995303:web:d2e90e6763f92720315542",
  measurementId: "G-MMGPSMXX2G"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


const login = async (email, password, router) => {
  const auth = getAuth();
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await createUserIfNotExists(user);
      router.push('/interface');
  } catch (error) {
      console.error('Login failed:', error);
  }
}

const logout = async (router) => {
  const auth = getAuth();
  try {
      await signOut(auth);
      router.push('/');
  } catch (error) {
      console.error('Logout failed:', error);
  }
}

export { login, db, logout }
