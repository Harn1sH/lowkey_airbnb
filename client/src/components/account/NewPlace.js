import React from "react";

function NewPlace() {
  return (
    <form className={"w-full flex space-y-8 flex-col my-9"}>
      <div className={"py-2 px-2 w-full flex flex-col "}>
        <span className={"font-bold text-xl"}>Title</span>
        <input
          type="text"
          className={"py-2 px-2 rounded-full border"}
          placeholder={"Enter name here"}
        />
      </div>
      <div className={"py-2 px-2 w-full flex flex-col "}>
        <span className={"font-bold text-xl"}>Address</span>
        <input
          type="text"
          className={"py-2 px-2 rounded-full border"}
          placeholder={"Enter address here"}
        />
      </div>
    </form>
  );
}

export default NewPlace;
