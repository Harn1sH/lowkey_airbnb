import React from "react";
import { Link, useParams } from "react-router-dom";
import Plus from "../../assets/icons/plus";
import NewPlace from "./NewPlace";

function Accommodation(props) {
  const { action } = useParams();
  return (
    <>
      {action !== "new" ? (
        <div className={"flex justify-center mt-8"}>
          <Link
            to={"/account/place/new"}
            className={
              "bg-primary rounded-full py-2 px-3 text-white inline-flex text-center"
            }
          >
            <Plus />
            <span>Add new place</span>
          </Link>
        </div>
      ) : (
        <NewPlace />
      )}
    </>
  );
}

export default Accommodation;
