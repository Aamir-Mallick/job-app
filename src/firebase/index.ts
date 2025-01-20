// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtNwpBsHpxgfvf2vLD9RcVjgOhP5LQhMk",
  authDomain: "veda-project-544b6.firebaseapp.com",
  projectId: "veda-project-544b6",
  storageBucket: "veda-project-544b6.firebasestorage.app",
  messagingSenderId: "953224307331",
  appId: "1:953224307331:web:1493baeb58e555fb53f1b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

