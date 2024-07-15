import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(
        "https://lowkey-airbnb-service.onrender.com/register",
        {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: { "content-type": "application/json" },
        },
      );
      setRedirect(true);
      alert("Registered successfully!! Please login");
    } catch (e) {
      alert("User already exists. Please login");
    }
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="mt-4 flex justify-center items-center grow">
      <div className={"mb-32"}>
        <h1 className={"text-4xl text-center"}>Register</h1>
        <form className={"max-w-md mx-auto"} onSubmit={handleSubmit}>
          <input
            placeholder={"name"}
            className={"w-full p-1 px-2 mt-4 rounded-lg border-2 "}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder={"your@email.com"}
            className={"w-full p-1 px-2 mt-4 rounded-lg border-2 "}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={"password"}
            className={"w-full p-1 px-2 my-4 rounded-lg border-2"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type={"submit"}
            className={
              "bg-primary hover:bg-[rgb(230,56,94)] active:bg-[rgb(220,56,94)] w-full text-white rounded-lg p-1 px-2"
            }
          >
            register
          </button>
          <span
            className={
              "flex justify-center items-center text-gray-500 max-w-md my-3"
            }
          >
            Already a member?
            <Link to={"/login"} className={"underline text-black"}>
              Login
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
