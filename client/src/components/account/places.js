import React from "react";
import { Link } from "react-router-dom";

function Places({ place }) {
  console.log(place);
  return (
    <Link to={"/edit/" + place._id}>
      <div
        className={
          "rounded-2xl w-6/12 mx-auto mb-4 bg-gray-200 p-3 gap-x-7 flex items-center"
        }
      >
        <img
          src={`http://localhost:5001/${place.photos[0]}`}
          className={"h-24 rounded-xl  "}
          alt="photo"
        />
        <div className={"flex flex-col justify-between "}>
          <span className={"font-bold text-2xl"}>{place.title}</span>
          <span className={"line-clamp-2 md:line-clamp-3 "}>
            {place.description}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Places;
