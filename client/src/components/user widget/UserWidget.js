import React from "react";
import Hamburger from "../../assets/icons/hamburger";
import User from "../../assets/icons/user";

function UserWidget() {
  return (
    <div
      className={
        "flex gap-x-2 border-2 p-1 px-3 rounded-full border-gray-300 items-center hover:shadow-md transition-all duration-200"
      }
    >
      <div>
        <Hamburger />
      </div>

      <div className={"bg-gray-500 rounded-full p-1 text-white"}>
        <User />
      </div>
    </div>
  );
}

export default UserWidget;