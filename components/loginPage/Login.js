"use client";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

//firebase

import { db } from "@/utils/FirebaseConfig";

// use router

import { useRouter } from "next/navigation";
import withAuth from "../withAuthPage/withAuth";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [valuesss, setValuesss] = useState([]);

  const router = useRouter();
  const value = collection(db, "users");

  useEffect(() => {
    const getData = async () => {
      const dbValuesss = await getDocs(value);
      setValuesss(
        dbValuesss.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getData();
    console.log(valuesss);
  }, []);

  const LoginUser = (e) => {
    e.preventDefault();

    valuesss.forEach((value) => {
      if (value.emailAddress === emailAddress && value.password === password) {
        router.push("/dashboard");
        localStorage.setItem("users", JSON.stringify({ emailAddress }));
      } else {
        router.push("/");
        console.log("Signin failed");
        // console.log(value);
        // console.log(emailAddress);
        // console.log(password);
      }
    });
  };
  return (
    <form
      onSubmit={LoginUser}
      className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="w-[25rem]">
        <label className="input-group">
          <span className="w-[6.6rem]">Email</span>
          <input
            type="text"
            value={emailAddress}
            placeholder="info@site.com"
            className="input input-bordered "
            required
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </label>
      </div>
      {/* password */}
      <div className="w-[25rem]">
        <label className="input-group">
          <span>Password</span>
          <input
            value={password}
            type="password"
            placeholder="xxxx"
            className="input input-bordered"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <button className="btn btn-active btn-ghost">Submit</button>
      </div>

      <p>
        Don't have an account?
        <span className="gap-2">
          <button
            className="mt-10 hover:bg-slate-500 gap-4"
            onClick={() => router.push("/Signup")}>
            Signup
          </button>
        </span>
      </p>
    </form>
  );
};

export default withAuth(Login);
