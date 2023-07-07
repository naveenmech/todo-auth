"use client";
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/FirebaseConfig";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

function UserProvider({ children }) {
  const router = useRouter();
  const [userEmail, setuserEmail] = useState("");
  const [uid, setUid] = useState("");

  // firebase signup

  const userCreate = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // firebase login

  const userLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const useruid = localStorage.setItem("userUid", user.uid);
        router.push("/dashboard");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <UserContext.Provider value={{ userCreate, userLogin, setUid, uid }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
