import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const [bookings, setBookings] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/booking/getBookings", {
      credentials: "include",
    });
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className={
        "my-4 mx-auto gap-y-5  flex flex-col justify-center items-center "
      }
    >
      {bookings?.map((booking) => (
        <Link
          to={"/account/booking/" + booking?._id}
          className={
            "w-6/12 bg-gray-200 rounded-2xl p-3 flex gap-x-10 items-center"
          }
        >
          <img
            className={"h-24 rounded-2xl"}
            src={"http://localhost:5001/" + booking?.photos?.[0]}
            alt="photo"
          />
          <div className={"flex flex-col gap-y-3"}>
            <span className={"text-xl font-bold"}>{booking?.title}</span>
            <span
              className={
                "font-semibold text-gray-600 line-clamp-2 md:line-clamp-3"
              }
            >
              {booking?.description}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Booking;
