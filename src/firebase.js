// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB80VKHveX6cQ3Hn9-HRJXVPMspVB2ZFDw",
  authDomain: "to-do-app-2ac0f.firebaseapp.com",
  projectId: "to-do-app-2ac0f",
  storageBucket: "to-do-app-2ac0f.appspot.com",
  messagingSenderId: "183080994162",
  appId: "1:183080994162:web:278b210baf6317d7ce09eb",
  measurementId: "G-MPYETLRJJK" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)