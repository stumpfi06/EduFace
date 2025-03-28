import { initializeApp, type FirebaseApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'
import {
  type Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  type UserCredential
} from 'firebase/auth'
import type { NavigateFunction } from 'react-router-dom'
import { createUserIfNotExists } from './users'

// Type definition for Firebase configuration
interface FirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

// Safely extract environment variables with type checking
const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? '',
  databaseURL: import.meta.env.VITE_DATABASE_URL ?? '',
  projectId: import.meta.env.VITE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_APP_ID ?? '',
  measurementId: import.meta.env.VITE_MEASUREMENT_ID ?? ''
}

// Initialize Firebase app and Firestore
const app: FirebaseApp = initializeApp(firebaseConfig)
const db: Firestore = getFirestore(app)

/**
 * Authenticate user with email and password
 * @param email User's email address
 * @param password User's password
 * @param router Navigation function from react-router
 */
const login = async (
  email: string, 
  password: string, 
  router: Router // Change this type
): Promise<void> => {
  const auth: Auth = getAuth()
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    await createUserIfNotExists(user)
    router.push('/interface') // Use .push() method for Vue Router
  } catch (error) {
    console.error('Login failed:', error)
    // Consider adding user-friendly error handling
  }
}

const logout = async (router: Router): Promise<void> => {
  const auth: Auth = getAuth()
  try {
    await signOut(auth)
    router.push('/') // Use .push() method for Vue Router
  } catch (error) {
    console.error('Logout failed:', error)
    // Consider adding user-friendly error handling
  }
}

const register = async (
  email: string, 
  password: string, 
  router: Router // Change this type
): Promise<void> => {
  const auth: Auth = getAuth()
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    await createUserIfNotExists(user)
    router.push('/interface') // Use .push() method for Vue Router
  } catch (error) {
    console.error('Registration failed:', error)
    // Consider adding user-friendly error handling
  }
}

export { login, db, logout, register }