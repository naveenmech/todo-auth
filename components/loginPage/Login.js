"use client";
import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "@/utils/FirebaseConfig";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contextPage/userContext";
const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [val, setVal] = useState([]);

  const router = useRouter();

  const { userLogin } = useContext(UserContext);

  const value = collection(db, "users");
  const getData = async () => {
    const dbVal = await getDocs(value);
    await setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(val);
  };
  useEffect(() => {
    getData();
  }, []);

  const LoginUser = async (e) => {
    e.preventDefault();
    userLogin(emailAddress, password);

    val.forEach((value) => {
      if (value.emailAddress === emailAddress && value.password === password) {
        localStorage.setItem("users", JSON.stringify({ emailAddress }));
        console.log("Login Success");
      } else {
        router.push("/login");
        // console.log("Login failed");
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
            type="email"
            name="emailAddress"
            value={emailAddress}
            placeholder="info@site.com"
            className="input input-bordered "
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
            required
          />
        </label>
      </div>
      {/* password */}
      <div className="w-[25rem]">
        <label className="input-group">
          <span>Password</span>
          <input
            value={password}
            name="password"
            type="password"
            placeholder="xxxx"
            className="input input-bordered"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
      </div>
      <div>
        <button className="btn btn-active btn-ghost">Submit</button>
      </div>

      <p>
        Don't have an account?
        <span>
          <button
            className="ml-1 mt-10 hover:bg-slate-500 gap-4"
            onClick={() => router.push("/Signup")}>
            Signup
          </button>
        </span>
      </p>
    </form>
  );
};

export default Login;
