import React, { useEffect, useState } from "react";
import Perks from "./Perks";
import AddPhoto from "./AddPhoto";
import { Navigate, useParams } from "react-router-dom";
import Nav from "./Nav";

function NewPlace() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [photoName, setPhotoName] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [maxMembers, setMaxMembers] = useState();
  const [key, setKey] = useState(Date.now());
  const [redirect, setRedirect] = useState(null);
  const [price, setPrice] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setRedirect(null);
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:5001/place/" + id);
    const response = await data.json();
    setTitle(response.title);
    setAddress(response.address);
    setCheckIn(response.checkIn);
    setCheckOut(response.checkOut);
    setPerks(response.perks);
    setDescription(response.description);
    setExtraInfo(response.extraInfo);
    setPhotoName(response.photos);
    setMaxMembers(response.maxGuest);
    setPrice(response.price);
  };

  useEffect(() => {
    if (id) {
      console.log(id);
      fetchData();
    }
  }, [id]);

  const handleChange = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = {
      title,
      address,
      photoName,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxMembers,
      price,
    };
    const data = await fetch("http://localhost:5001/place", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });

    console.log(await data.json());
    setRedirect("abcd");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const photos = new FormData();
    for (let i = 0; i < files.length; i++) {
      photos.append("photos", files[i]);
    }
    const data = await fetch("http://localhost:5001/uploads/device", {
      method: "POST",
      body: photos,
      credentials: "include",
    });
    const fileName = await data.json();
    setPhotoName((prev) => [...prev, fileName]);
    setKey(Date.now());
  };

  const addPhotosByLink = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:5001/uploads/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ link: photoLink }),
      credentials: "include",
    });
    const fileName = await data.json();
    setPhotoName((prev) => [...prev, fileName]);
    setPhotoLink("");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    console.log("handle edit");
    const sendData = {
      id,
      title,
      address,
      photoName,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxMembers,
      price,
    };
    const data = await fetch("http://localhost:5001/place", {
      method: "PUT",
      body: JSON.stringify(sendData),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });

    console.log(await data.json());
    setRedirect("abcd");
  };

  if (redirect) {
    return <Navigate to={"/account/place"} />;
  }

  return (
    <>
      {id && <Nav edit={true} />}
      <form
        className={"w-full flex space-y-8 flex-col my-4"}
        onSubmit={id ? handleEdit : handleSubmit}
      >
        <div className={"py-2 px-2 w-full gap-y-4 flex flex-col "}>
          <span className={"font-bold text-xl"}>Title</span>
          <p className={"text-gray-500"}>Make the title catchyy</p>
          <input
            value={title}
            onChange={(e) => handleChange(e, setTitle)}
            type="text"
            className={"py-2 px-2 rounded-full border"}
            placeholder={"Enter name here"}
          />
        </div>
        <div className={"py-2 px-2 w-full flex flex-col gap-y-4"}>
          <span className={"font-bold text-xl"}>Address</span>
          <p className={"text-gray-500"}>Address to the place</p>
          <input
            value={address}
            onChange={(e) => handleChange(e, setAddress)}
            type="text"
            className={"py-2 px-2 rounded-full border"}
            placeholder={"Enter address here"}
          />
        </div>
        <div className={"grid  gap-y-4"}>
          <h1 className={"font-bold text-xl"}>Description</h1>
          <p className={"text-gray-500"}>description of the place</p>
          <textarea
            className={"w-full py-2 px-3 rounded-2xl border"}
            value={description}
            onChange={(e) => handleChange(e, setDescription)}
          />
        </div>
        <AddPhoto
          key={key}
          value={photoLink}
          onChange={(e) => handleChange(e, setPhotoLink)}
          onClick={(e) => addPhotosByLink(e)}
          photoName={photoName}
          onChange1={(e) => handleUpload(e)}
        />

        <Perks perks={perks} setPerks={setPerks} />
        <div>
          <h2 className={"font-bold text-xl"}>Extra Info </h2>
          <p className={"text-gray-500"}>House rules and what nots</p>
          <textarea
            className={"w-full py-2 px-3 rounded-2xl border"}
            value={extraInfo}
            onChange={(e) => handleChange(e, setExtraInfo)}
          />
        </div>
        <div className={"flex flex-col gap-y-2"}>
          <h2 className={"font-bold text-xl"}>Check-in and Check-out </h2>
          <p className={"text-gray-500"}>
            Remember to have some time window to clean
          </p>
          <div className={"flex gap-x-7"}>
            <div className={"flex flex-col gap-y-2"}>
              <h4 className={"font-bold"}>check-in</h4>
              <input
                className={"border-2 rounded-2xl py-1 px-2"}
                value={checkIn}
                onChange={(e) => handleChange(e, setCheckIn)}
                type="time"
                name="checkin"
                id="checkin"
              />
            </div>
            <div className={"flex flex-col gap-y-2"}>
              <h4 className={"font-bold"}>check-out</h4>
              <input
                className={"border-2 rounded-2xl py-1 px-2"}
                value={checkOut}
                onChange={(e) => handleChange(e, setCheckOut)}
                type="time"
                name="checkout"
                id="checkout"
              />
            </div>
            <div className={"flex flex-col gap-y-2"}>
              <h4 className={"font-bold"}>Max People</h4>
              <input
                type="number"
                className={"border-2 rounded-2xl py-1 px-2"}
                value={maxMembers}
                onChange={(e) => handleChange(e, setMaxMembers)}
                min={0}
                defaultValue={5}
              />
            </div>
            <div className={"flex flex-col gap-y-2"}>
              <h4 className={"font-bold"}>Price per night</h4>
              <input
                type="number"
                className={"border-2 rounded-2xl py-1 px-2"}
                value={price}
                onChange={(e) => handleChange(e, setPrice)}
                min={0}
              />
            </div>
          </div>
        </div>
        <button
          className={
            "bg-primary hover:bg-[#F12249FF] duration-150 active:bg-[#F30D38FF] py-2 rounded-full text-white"
          }
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default NewPlace;
