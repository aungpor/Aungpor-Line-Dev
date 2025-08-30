// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwRfEBAeyymiUP6lsYxi-fBRxRxLLNbL4",
  authDomain: "aungpor-pc-transfer.firebaseapp.com",
  projectId: "aungpor-pc-transfer",
  storageBucket: "aungpor-pc-transfer.firebasestorage.app",
  messagingSenderId: "429336764109",
  appId: "1:429336764109:web:a72de27141769cd5f75384",
  measurementId: "G-PKLHCML3TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);