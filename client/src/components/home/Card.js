import { Link } from "react-router-dom";
import React from "react";

export default function Card(props) {
  return (
    <Link to={"/place/" + props.place._id}>
      <div
        className={
          "bg-gray-100 rounded-2xl p-3 col-span-1 flex flex-col cursor-pointer "
        }
      >
        <img
          src={
            "https://lowkey-airbnb-service.onrender.com/" +
            props.place.photos[0]
          }
          className={"rounded-2xl"}
          alt=""
        />
        <span className={"font-bold"}>{props.place.address}</span>
        <span className={"text-gray-800"}>{props.place.title}</span>
        <div>
          <span className={"font-bold"}>${props.place.price}</span>
          <span> per night</span>
        </div>
      </div>
    </Link>
  );
}
