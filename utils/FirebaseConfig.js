import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
