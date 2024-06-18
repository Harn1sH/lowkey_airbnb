import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="mt-4 flex justify-center items-center grow">
      <div className={"mb-32"}>
        <h1 className={"text-4xl text-center"}>Login</h1>
        <form className={"max-w-md mx-auto"}>
          <input
            placeholder={"your@email.com"}
            className={"w-full p-1 px-2 mt-4 rounded-lg border-2 "}
            type="text"
          />
          <input
            placeholder={"password"}
            className={"w-full p-1 px-2 my-4 rounded-lg border-2"}
            type="text"
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
