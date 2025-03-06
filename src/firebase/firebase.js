import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc } from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { createUserIfNotExists } from './users'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const login = async (email, password, router) => {
  const auth = getAuth()
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    await createUserIfNotExists(user)
    router.push('/interface')
  } catch (error) {
    console.error('Login failed:', error)
  }
}

const logout = async (router) => {
  const auth = getAuth()
  try {
    await signOut(auth)
    router.push('/')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}

const register = async (email, password, router) => {
  const auth = getAuth()
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    await createUserIfNotExists(user)
    router.push('/interface')
  } catch (error) {
    console.error('Registration failed:', error)
  }
}

export { login, db, logout, register }
