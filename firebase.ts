// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLxZ4c_9TtHJ8ObIY_iQFP6QkNUYsw0lU",
  authDomain: "aungpor-web-2d637.firebaseapp.com",
  projectId: "aungpor-web-2d637",
  storageBucket: "aungpor-web-2d637.firebasestorage.app",
  messagingSenderId: "278788942191",
  appId: "1:278788942191:web:ac7027e9fcc95fb82fa09a",
  measurementId: "G-6TNNG4RT2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);