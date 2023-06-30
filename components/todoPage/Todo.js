"use client";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/FirebaseConfig";
import { useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const value = collection(db, "todo");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(value, { title: title, description: des });
    setTitle("");
    setDes("");
  };

  return (
    <form
      className="flex flex-col items-center justify-center mt-5"
      onSubmit={handleSubmit}>
      {/* first name */}
      <div>
        <label
          for="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          id="first_name"
          className="w-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      {/* last name */}
      <div>
        <label
          for="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <textarea
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder=""
          id="first_name"
          className="w-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>{/* <h3>{title.value}</h3> */}</div>
    </form>
  );
};

export default Todo;
