import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function MoreInfo() {
  const userName = useSelector((store) => store.user.name);
  const [loginRedirect, setLoginRedirect] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [bookingRedirect, setBookingRedirect] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuest, setMaxGuest] = useState(1);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://lowkey-airbnb-service.onrender.com/place/" + id,
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName) {
      setLoginRedirect(true);
    }
    const diff = new Date(checkOut) - new Date(checkIn);
    const days = diff / (24 * 3600 * 1000);
    const response = await fetch(
      "https://lowkey-airbnb-service.onrender.com/booking/",
      {
        method: "POST",
        body: JSON.stringify({
          id,
          name,
          checkIn,
          checkOut,
          number,
          maxGuest,
          price: days * data?.price,
          days,
        }),
        headers: { "content-type": "application/json" },
        credentials: "include",
      },
    );
    if (response.ok) {
      setBookingRedirect(true);
    }
  };
  if (bookingRedirect) {
    return <Navigate to={"/account/booking/" + id} />;
  }
  if (loginRedirect) {
    return <Navigate to={"/login"} />;
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
        <div className={" col-span-2  "}>
          <img
            onClick={() => setShowMore(true)}
            className={"h-full w-full object-cover"}
            src={
              "https://lowkey-airbnb-service.onrender.com/" + data?.photos?.[0]
            }
            alt=""
          />
        </div>
        <div className={"col-span-1 flex flex-col gap-y-2 "}>
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
            "flex flex-col gap-y-5 items-center shadow-2xl p-2 rounded-xl overflow-hidden"
          }
        >
          <div>
            <span className={"text-xl font-semibold"}>{"Price: "}</span>
            <span className={"font-semibold"}>
              {"$" + data?.price + "/night"}
            </span>
          </div>
          <div className={"flex flex-col gap-y-2"}>
            <div className={"flex gap-x-5 font-semibold  px-1"}>
              <span>Check in:</span>
              <input
                type="date"
                name={"checkin"}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className={"flex gap-x-5 font-semibold  px-1"}>
              <span>Check out:</span>
              <input
                type="date"
                name={"checkout"}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div className={"flex w-full justify-around "}>
            <span>Number of guests</span>
            <input
              min={1}
              max={data?.maxGuest}
              type="number"
              name={"maxNumber"}
              placeholder={"1"}
              className={"p-2"}
              value={maxGuest}
              onChange={(e) => setMaxGuest(e.target.value)}
            />
          </div>
          {checkIn && checkOut && (
            <div className={"w-full flex gap-y-5 flex-col"}>
              <div className={"w-full flex justify-around"}>
                <span className={"text-start"}>Name</span>
                <input
                  type="text"
                  className={"p-2 "}
                  placeholder={"name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={"w-full flex justify-evenly "}>
                <span className={"text-start"}>Mobile number</span>
                <input
                  type="text"
                  className={"p-2 border"}
                  placeholder={"number"}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          )}
          <button
            className={"bg-primary text-white py-2 px-2 rounded-2xl w-full"}
            disabled={checkIn.length === 0 && checkOut.length === 0}
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
