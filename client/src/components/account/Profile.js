import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../slice/userSlice";

function Profile() {
  const userName = useSelector((store) => store.user.name);
  const email = useSelector((store) => store.user.email);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const data = await fetch("http://localhost:5001/profile/logout", {
      method: "GET",
      credentials: "include",
    });
    console.log(await data.json());
    dispatch(removeUser());
  };

  return (
    <div className={"text-center max-w-lg mx-auto my-14 flex flex-col gap-y-4"}>
      <div className={"flex justify-between "}>
        <span className={"font-bold"}>Account name</span>
        <span className={"font-semibold"}>{userName}</span>
      </div>
      <div className={"flex justify-between"}>
        <span className={"font-bold"}>Email</span>
        <span className={"font-semibold"}>{email}</span>
      </div>
      <div>
        <button
          className={
            "text-white bg-primary hover:bg-[rgb(230,56,94)] active:bg-[rgb(220,56,94)] w-full rounded-full py-1"
          }
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
