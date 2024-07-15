import Upload from "../../assets/icons/upload";
import React from "react";

export default function AddPhoto(props) {
  return (
    <div className={"flex flex-col gap-y-4"}>
      <span className={"font-bold text-xl"}>Photos</span>
      <p className={"text-gray-500"}>More definitely means better </p>
      <div className={" grid grid-cols-12 gap-x-2"}>
        <input
          type="text"
          placeholder={"add using a link"}
          className={"py-1 px-2 col-span-9 border rounded-2xl"}
          value={props.value}
          onChange={props.onChange}
        />
        <button
          className={
            "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 grow px-4 rounded-2xl col-span-2 py-2"
          }
          onClick={props.onClick}
        >
          Add photo
        </button>
      </div>
      <div className={"grid grid-cols-4 gap-x-1"}>
        {props.photoName.length > 0 &&
          props.photoName.map((img) => (
            <div key={img}>
              <img
                src={"http://localhost:5001/" + img}
                className={"rounded-xl h-20"}
                alt={"err"}
              />
            </div>
          ))}
      </div>
      <div className={"grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}>
        <label
          className={
            " border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 flex justify-center items-center"
          }
        >
          <input onChange={props.onChange1} type="file" className={"hidden"} />
          <Upload />

          <span>Upload</span>
        </label>
      </div>
    </div>
  );
}
