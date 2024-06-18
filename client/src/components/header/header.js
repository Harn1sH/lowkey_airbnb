import React from "react";
import Logo from "../../assets/icons/logo";
import Search from "../../assets/icons/search";
import UserWidget from "../user widget/UserWidget";

function Header() {
  return (
    <div className="p-4 flex justify-between">
      <div className={"flex items-center"}>
        <Logo />
        <span className={"font-bold text-xl"}>airBnB</span>
      </div>
      <div
        className={
          "items-center flex border-2 border-gray-300 rounded-full px-2 py-2 shadow-sm hover:shadow-md transition-all duration-200 shadow-gray-300 font-semibold gap-x-2"
        }
      >
        <div className={"border-r border-gray-300 pr-3"}>Anywhere</div>
        <div className={"border-r border-gray-300 pr-3"}>Any Week</div>
        <div className={"text-gray-500"}>Add Guest</div>
        <div className={"rounded-full bg-primary text-white p-1"}>
          <Search />
        </div>
      </div>
      <div>
        <UserWidget />
      </div>
    </div>
  );
}

export default Header;
