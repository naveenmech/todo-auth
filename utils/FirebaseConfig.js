// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGVDlnT0oGmy5bZrq01QPq_tWJAGX5He0",
  authDomain: "todo-auth-29a56.firebaseapp.com",
  projectId: "todo-auth-29a56",
  storageBucket: "todo-auth-29a56.appspot.com",
  messagingSenderId: "116245660833",
  appId: "1:116245660833:web:86b945e579f1dd3b1cdce0",
  measurementId: "G-S56EEGHTF1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
