// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZLzsHoPW-MJJFCzEkAvqu1IAKfJW3WTo",
  authDomain: "kintelsoftcareers.firebaseapp.com",
  projectId: "kintelsoftcareers",
  storageBucket: "kintelsoftcareers.firebasestorage.app",
  messagingSenderId: "299094540458",
  appId: "1:299094540458:web:4f1ab4ed2255951f1bd0d3",
  measurementId: "G-ERVG8P0HX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

