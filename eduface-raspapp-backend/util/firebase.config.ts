import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" 
import { config } from "dotenv";
config();


const firebaseConfig = {
  apiKey: process.env.APIKEY ,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


export {db};