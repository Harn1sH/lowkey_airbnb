import React from "react";
import Upload from "../../assets/icons/upload";
import Wifi from "../../assets/icons/Wifi";
import Truck from "../../assets/icons/Truck";
import Tv from "../../assets/icons/Tv";
import Pets from "../../assets/icons/Pets";
import Search from "../../assets/icons/search";

function NewPlace() {
  return (
    <form className={"w-full flex space-y-8 flex-col my-4"}>
      <div className={"py-2 px-2 w-full gap-y-4 flex flex-col "}>
        <span className={"font-bold text-xl"}>Title</span>
        <p className={"text-gray-500"}>Make the title catchyy</p>
        <input
          type="text"
          className={"py-2 px-2 rounded-full border"}
          placeholder={"Enter name here"}
        />
      </div>
      <div className={"py-2 px-2 w-full flex flex-col gap-y-4"}>
        <span className={"font-bold text-xl"}>Address</span>
        <p className={"text-gray-500"}>Address to the place</p>
        <input
          type="text"
          className={"py-2 px-2 rounded-full border"}
          placeholder={"Enter address here"}
        />
      </div>
      <div className={"flex flex-col gap-y-4"}>
        <span className={"font-bold text-xl"}>Photos</span>
        <p className={"text-gray-500"}>More definitely means better </p>
        <div className={" grid grid-cols-12 gap-x-2"}>
          <input
            type="text"
            placeholder={"add using a link"}
            className={"py-1 px-2 col-span-9 border rounded-2xl"}
          />
          <button
            className={
              "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 grow px-4 rounded-2xl col-span-2 py-2"
            }
          >
            Add photo
          </button>
        </div>
        <div className={"grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}>
          <button
            className={
              "border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 flex justify-center items-center"
            }
          >
            <div className={"h-8 w-8"}>
              <Upload />
            </div>

            <span>Upload</span>
          </button>
        </div>
      </div>
      <div className={"grid  gap-y-4"}>
        <h1 className={"font-bold text-xl"}>Description</h1>
        <p className={"text-gray-500"}>description of the place</p>
        <textarea className={"w-full py-2 px-3 rounded-2xl border"} />
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <h1 className={"font-bold text-xl"}>Perks</h1>
        <p className={"text-gray-500"}>Select all perks</p>
        <div className={"grid grid-cols-2 gap-y-4 md:grid-cols-3 "}>
          <label className={"flex gap-x-2"}>
            <Wifi />
            <input type="checkbox" />
            <span>Wifi</span>
          </label>
          <label className={"flex gap-x-2"}>
            <Truck />
            <input type="checkbox" />
            <span>Free Parking</span>
          </label>
          <label className={"flex gap-x-2"}>
            <Tv />
            <input type="checkbox" />
            <span>TV</span>
          </label>
          <label className={"flex gap-x-2"}>
            <Pets />
            <input type="checkbox" />
            <span>Pets</span>
          </label>
          <label className={"flex gap-x-2"}>
            <Search />
            <input type="checkbox" />
            <span>Private Entrance</span>
          </label>
        </div>
      </div>
      <div>
        <h2 className={"font-bold text-xl"}>Extra Info </h2>
        <p className={"text-gray-500"}>House rules and what nots</p>
        <textarea className={"w-full py-2 px-3 rounded-2xl border"} />
      </div>
    </form>
  );
}

export default NewPlace;
