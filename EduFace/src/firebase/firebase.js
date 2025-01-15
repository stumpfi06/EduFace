import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc } from "firebase/firestore" 
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { createUserIfNotExists } from './users';

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY ,
  authDomain: import.meta.env.AUTHDOMAIN,
  databaseURL: import.meta.env.DATABASEURL,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.APPID,
  measurementId: import.meta.env.MEASUREMENTID
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
