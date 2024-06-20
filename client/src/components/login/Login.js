import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../slice/userSlice";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:5001/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      const response = await data.json();
      if (!data.ok) {
        console.log(response);
        alert(response.error);
      } else {
        setRedirect(true);
        dispatch(addUser({ name: response.name, email: response.email }));
      }
    } catch (e) {
      console.log(e.error);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 flex justify-center items-center grow">
      <div className={"mb-32"}>
        <h1 className={"text-4xl text-center"}>Login</h1>
        <form className={"max-w-md mx-auto"} onSubmit={handleSubmit}>
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
            login
          </button>
          <span
            className={
              "flex justify-center items-center text-gray-500 max-w-md my-3"
            }
          >
            Dont have an account yet?
            <Link to={"/register"} className={"underline text-black"}>
              Register
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
