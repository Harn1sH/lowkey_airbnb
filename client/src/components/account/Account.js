import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

function Account() {
  const user = useSelector((store) => store.user.name);
  let { subpage } = useParams();
  console.log(subpage);
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  const styling = (page) => {
    let result = "py-2 px-6";
    if (page === subpage) {
      result =
        "py-2 px-6 bg-primary rounded-full text-white hover:bg-[rgb(230,56,94)] active:bg-[rgb(220,56,94)]";
    }
    return result;
  };

  return (
    <div>
      <nav className={"flex w-full justify-center gap-6 mt-8 "}>
        <Link className={styling(undefined)} to={"/account"}>
          My Profile
        </Link>
        <Link className={styling("booking")} to={"/account/booking"}>
          My Bookings
        </Link>
        <Link className={styling("place")} to={"/account/place"}>
          My Accomodations
        </Link>
      </nav>
      {subpage === undefined && <Profile />}
    </div>
  );
}

export default Account;
