import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Plus from "../../assets/icons/plus";
import NewPlace from "./NewPlace";
import Places from "./places";

function Accommodation(props) {
  const [places, setPlaces] = useState([]);

  const getData = async () => {
    const data = await fetch("http://localhost:5001/place/getPlace", {
      credentials: "include",
    });
    const finData = await data.json();
    setPlaces(finData);
  };
  useEffect(() => {
    getData();
  }, []);
  const { action } = useParams();
  return (
    <>
      {action !== "new" ? (
        <div className={"flex  flex-col  mt-8"}>
          <div className={"mb-4 "}>
            {places?.map((place) => (
              <Places place={place} key={place} />
            ))}
          </div>
          <div className={"flex justify-center"}>
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
        </div>
      ) : (
        <NewPlace />
      )}
    </>
  );
}

export default Accommodation;
