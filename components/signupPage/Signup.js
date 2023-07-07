"use client";
import { collection, addDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import { db } from "@/utils/FirebaseConfig";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contextPage/userContext";

const Signup = () => {
  const router = useRouter();
  const { userCreate } = useContext(UserContext);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNo: "",
    emailAddress: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  console.log(userData);

  // add firebase

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "users"), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        userName: userData.userName,
        phoneNo: userData.phoneNo,
        emailAddress: userData.emailAddress,
        country: userData.country,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      });
      await userCreate(userData.emailAddress, userData.password);

      await setUserData({
        firstName: "",
        lastName: "",
        userName: "",
        phoneNo: "",
        emailAddress: "",
        country: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-screen gap-3"
      onSubmit={handleSubmit}>
      {/* first name */}

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered input-primary w-[12rem] placeholder:text-sm"
          required
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered input-primary w-[12rem] placeholder:text-sm"
          required
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
        />
      </div>
      {/* 2 */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="User Name"
          className="input input-bordered input-primary w-[12rem] placeholder:text-sm"
          required
          onChange={(e) =>
            setUserData({ ...userData, userName: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="input input-bordered input-primary w-[12rem] placeholder:text-sm"
          required
          onChange={(e) =>
            setUserData({ ...userData, phoneNo: e.target.value })
          }
        />
      </div>
      {/* 3 */}

      <input
        type="email"
        placeholder="Email Address"
        className="input input-bordered input-primary w-[25rem] placeholder:text-sm"
        required
        onChange={(e) =>
          setUserData({ ...userData, emailAddress: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Country"
        className="input input-bordered input-primary w-[25rem] placeholder:text-sm"
        required
        onChange={(e) => setUserData({ ...userData, country: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered input-primary w-[25rem] placeholder:text-sm"
        required
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Comfirm Password"
        className="input input-bordered input-primary w-[25rem] placeholder:text-sm"
        required
        onChange={(e) =>
          setUserData({ ...userData, confirmPassword: e.target.value })
        }
      />

      {/* submit button */}
      <div>
        <button type="submit" className="btn btn-active btn-ghost">
          Submit
        </button>
      </div>

      <p>
        Already have an account?{" "}
        <spann>
          <button
            className="mt-10 hover:bg-slate-500"
            onClick={() => router.push("/login")}>
            Login
          </button>
        </spann>
      </p>
    </form>
  );
};
export default Signup;
