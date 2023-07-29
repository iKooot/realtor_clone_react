import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Profile(props) {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const { email, name } = formData;

  const onLogOut = async (event) => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form action="#">
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                onClick={onLogOut}
              >
                Sing out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
