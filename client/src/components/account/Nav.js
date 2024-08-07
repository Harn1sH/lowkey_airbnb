import React from "react";
import { Link, useParams } from "react-router-dom";
import User from "../../assets/icons/user";
import List from "../../assets/icons/List";
import Home from "../../assets/icons/Home";

function Nav({ edit }) {
  let { subpage } = useParams();
  if (edit) {
    subpage = "place";
  }
  const styling = (page) => {
    let result = "py-2 px-6";
    if (page === subpage) {
      result =
        "px-6 bg-primary rounded-full text-white hover:bg-[rgb(230,56,94)] active:bg-[rgb(220,56,94)] flex justify-center items-center ";
    } else {
      result = "py-2 px-6 bg-gray-200 gap-x-1 inline-flex rounded-full";
    }
    return result;
  };
  return (
    <nav className={"flex w-full justify-center gap-6 mt-8 "}>
      <Link className={styling(undefined)} to={"/account"}>
        <User />
        My Profile
      </Link>
      <Link className={styling("booking")} to={"/account/booking"}>
        <List />
        My Bookings
      </Link>
      <Link className={styling("place")} to={"/account/place"}>
        <Home />
        My Accommodations
      </Link>
    </nav>
  );
}

export default Nav;
