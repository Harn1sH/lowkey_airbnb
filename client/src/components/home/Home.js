import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import Card from "./Card";

Card.propTypes = { place: PropTypes.any };

function Home() {
  const [places, setPlaces] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/place/getAllPlace");
    const data = await response.json();
    setPlaces(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={"grid grid-cols-2 md:grid-cols-4 gap-x-16"}>
      {places?.map((place) => (
        <Card place={place} />
      ))}
    </div>
  );
}

export default Home;
