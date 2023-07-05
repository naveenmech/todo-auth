// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJhJ2d7guzWGPNJrqgzDd88NttnqVtdUQ",
  authDomain: "todo-auth-f4d38.firebaseapp.com",
  projectId: "todo-auth-f4d38",
  storageBucket: "todo-auth-f4d38.appspot.com",
  messagingSenderId: "658617651587",
  appId: "1:658617651587:web:487459821b5c03e702e6b6",
  measurementId: "G-51V0FHXN2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
