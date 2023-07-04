"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/FirebaseConfig";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const Todo = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [val, setVal] = useState([]);
  const value = collection(db, "todo");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const dbval = await getDocs(value);
      setVal(dbval.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [val]);
  const handleCreate = async () => {
    await addDoc(value, { fname: firstname, lname: lastname });
  };

  const handleDelete = async (id) => {
    const deleteValue = doc(db, "todo", id);
    await deleteDoc(deleteValue);
  };

  const handleEdit = async (id, fname, lname) => {
    setFirstname(fname);
    setLastname(lname);
    setId(id);
    setShow(true);
  };

  const handleUpdate = async () => {
    const updateData = doc(db, "todo", id);
    await updateDoc(updateData, { fname: firstname, lname: lastname });
    setShow(false);
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-10">
      <div>
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            id="first_name"
            className="w-[20rem] border-2 border-gray-500 rounded-md py-2"
            value={firstname}
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            id="last_name"
            className="w-[20rem] border-2 border-gray-500 rounded-md py-2"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}></textarea>
        </div>

        {!show ? (
          <button
            onClick={handleCreate}
            className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6 py-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800">
            Create
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6 py-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800">
            Update
          </button>
        )}
      </div>
      <div className="border-green-600 ">
        {val.map((values) => (
          <div className="mb-5">
            <h1>
              Title:
              {values.fname}
            </h1>
            <h1>Description: {values.lname}</h1>

            <button
              onClick={() => handleDelete(values.id)}
              className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6  cursor-pointer hover:bg-gray-300 hover:text-gray-800">
              Delete
            </button>
            <button
              onClick={() => handleEdit(values.id, values.fname, values.lname)}
              className=" text-lg font-semibold rounded-md bg-gray-700 text-white px-6 ml-3 cursor-pointer hover:bg-gray-300 hover:text-gray-800">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

// practice

// "use client";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/utils/FirebaseConfig";
// import nextConfig from "@/next.config";
// import { useEffect, useState } from "react";

// const Todo = () => {
//   const [title, setTitle] = useState("");
//   const [des, setDes] = useState("");
//   const [val, setVal] = useState([]);

//   const value = collection(db, "todo");
//   const [id, setId] = useState("");

//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       const dbval = await getDocs(value);
//       setVal(dbval.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getData();
//   }, [val]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addDoc(value, { title: title, description: des });
//     setTitle("");
//     setDes("");
//   };

//   return (
//     <form
//       className="flex flex-col items-center justify-center mt-5"
//       onSubmit={handleSubmit}>
//       {/* first name */}
//       <div>
//         <label
//           for="first_name"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//           Title
//         </label>
//         <input
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//           type="text"
//           id="first_name"
//           className="w-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder=""
//           required
//         />
//       </div>
//       {/* last name */}
//       <div>
//         <label
//           for="first_name"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//           Description
//         </label>
//         <textarea
//           value={des}
//           onChange={(e) => setDes(e.target.value)}
//           placeholder=""
//           id="first_name"
//           className="w-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
//       </div>
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//       <div>{/* <h3>{title.value}</h3> */}</div>
//     </form>
//   );
// };

// export default Todo;
