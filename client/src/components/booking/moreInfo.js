import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MoreInfo() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [bookingData, setBookingData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://lowkey-airbnb-service.onrender.com/place/" + id,
    );
    const data = await response.json();
    setData(data);
    console.log(data);
    fetchBookingData();
  };

  const fetchBookingData = async () => {
    const response = await fetch(
      "https://lowkey-airbnb-service.onrender.com/booking/" + id,
      {
        method: "GET",
        credentials: "include",
      },
    );
    const data = await response.json();
    setBookingData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (showMore) {
    return (
      <div className={""}>
        <button
          onClick={() => setShowMore(false)}
          className={
            "bg-gray-200 my-3 hover:bg-gray-300 duration-200 py-1 px-2 rounded-2xl"
          }
        >
          close
        </button>
        <div
          className={
            " w-screen justify-center items-center flex flex-col gap-6  "
          }
        >
          {data?.photos?.map((photo) => (
            <img
              src={"https://lowkey-airbnb-service.onrender.com/" + photo}
              key={photo}
              className={"w-5/12 rounded-2xl"}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={"my-4 mx-auto flex flex-col gap-y-5 w-10/12 py-4"}>
      <div className={"flex gap-y-4 mb-4 flex-col "}>
        <span className={"text-2xl font-bold"}>{data?.title}</span>
        <span className={"text-xl font-semibold underline"}>
          {data?.address}
        </span>
      </div>
      <div className={" grid grid-cols-3 gap-2 rounded-2xl overflow-hidden"}>
        <div className={" col-span-2"}>
          <img
            onClick={() => setShowMore(true)}
            className={"h-full w-full object-cover"}
            src={
              "https://lowkey-airbnb-service.onrender.com/" + data?.photos?.[0]
            }
            alt=""
          />
        </div>
        <div className={"flex flex-col gap-y-2 "}>
          <div>
            <img
              onClick={() => setShowMore(true)}
              src={
                "https://lowkey-airbnb-service.onrender.com/" +
                data?.photos?.[1]
              }
              alt=""
              className={"w-full"}
            />
          </div>
          <div>
            {data?.photos?.[2] && (
              <img
                onClick={() => setShowMore(true)}
                className={"w-full"}
                src={
                  "https://lowkey-airbnb-service.onrender.com/" +
                  data?.photos?.[2]
                }
                alt="image pending"
              />
            )}
          </div>
          <button
            onClick={() => setShowMore(true)}
            className={
              "bg-gray-200 hover:bg-gray-300 duration-200 py-1 rounded-2xl"
            }
          >
            show more
          </button>
        </div>
      </div>
      <div className={"grid md:grid-cols-2 gap-x-28 bg-gray-100 p-4"}>
        <div className={"col-span-1 flex flex-col gap-y-3"}>
          <div className={"flex flex-col gap-y-2 font-semibold"}>
            <span className={"font-bold text-2xl"}>Description</span>
            <span>{data?.description}</span>
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex gap-x-2"}>
              <span className={"font-semibold"}>checkin:</span>
              <span>{data?.checkIn}</span>
            </div>
            <div className={"flex gap-x-2"}>
              <span className={"font-semibold"}>checkout:</span>
              <span>{data?.checkOut}</span>
            </div>
            <div className={"flex gap-x-2"}>
              <span className={"font-semibold"}>Max guest:</span>
              <span>{data?.maxGuest}</span>
            </div>
            <div className={"my-4 text-gray-500"}>
              Extra info: {data?.extraInfo}
            </div>
          </div>
        </div>
        <div
          className={
            "flex items-center gap-x-3 justify-around bg-white rounded-2xl shadow-2xl p-3"
          }
        >
          <div className={"flex  flex-col gap-y-3"}>
            <div className={"flex justify-between gap-x-8"}>
              <span className={"text-xl font-bold"}>Booked by:</span>
              <span className={"text-lg font-semibold"}>
                {bookingData?.[0]?.name}
              </span>
            </div>
            <div className={"flex justify-between gap-x-8"}>
              <span className={"text-xl font-bold"}>Check in:</span>
              <span className={"text-lg font-semibold"}>
                {bookingData?.[0]?.checkIn}
              </span>
            </div>
            <div className={"flex gap-x-8 justify-between"}>
              <span className={"text-xl font-bold"}>Check Out:</span>
              <span className={"text-lg font-semibold"}>
                {bookingData?.[0]?.checkIn}
              </span>
            </div>
            <div className={"flex gap-x-8 justify-between"}>
              <span className={"text-xl font-bold"}>Days:</span>
              <span className={"text-lg font-semibold"}>
                {bookingData?.[0]?.days}
              </span>
            </div>
            <div className={"flex gap-x-8 justify-between"}>
              <span className={"text-xl font-bold"}>Guests:</span>
              <span className={"text-lg font-semibold"}>
                {bookingData?.[0]?.guest}
              </span>
            </div>
          </div>
          <div>
            <button
              className={
                "text-white flex flex-col gap-y-3 rounded-2xl bg-primary p-5 hover:shadow-2xl transition-all duration-200"
              }
              disabled={true}
            >
              <span>price</span>
              <span>${bookingData?.[0]?.price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
