import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Accommodation from "./Accommodation";
import Nav from "./Nav";
import Booking from "../booking/Booking";

function Account() {
  const user = useSelector((store) => store.user.name);
  let { subpage } = useParams();
  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <Nav />
      {subpage === undefined && <Profile />}
      {subpage === "place" && <Accommodation />}
      {subpage === "booking" && <Booking />}
    </div>
  );
}

export default Account;
