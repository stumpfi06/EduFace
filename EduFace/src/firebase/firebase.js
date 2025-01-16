import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc } from "firebase/firestore" 
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { createUserIfNotExists } from './users';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
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
import.meta.env.VITE_SOME_KEY;

const logout = async (router) => {
  const auth = getAuth();
  try {
      await signOut(auth);
      router.push('/');
  } catch (error) {
      console.error('Logout failed:', error);
  }
}

const register = async (email, password, router) => {
  const auth = getAuth();
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await createUserIfNotExists(user);
      router.push('/interface');
  } catch (error) {
      console.error('Registration failed:', error);
  }
}

export { login, db, logout, register }
