import React from "react";
import Wifi from "../../assets/icons/Wifi";
import Truck from "../../assets/icons/Truck";
import Tv from "../../assets/icons/Tv";
import Pets from "../../assets/icons/Pets";
import Search from "../../assets/icons/search";

function Perks({ perks, setPerks }) {
  const handleChange = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      setPerks([...perks, name]);
      console.log("add", perks);
    } else {
      setPerks(perks.filter((perk) => perk !== name));
      console.log("remove", perks);
    }
  };

  return (
    <div className={"flex flex-col gap-y-2"}>
      <h1 className={"font-bold text-xl"}>Perks</h1>
      <p className={"text-gray-500"}>Select all perks</p>
      <div className={"grid grid-cols-2 gap-y-4 md:grid-cols-3 "}>
        <label className={"flex gap-x-2"}>
          <Wifi />
          <input
            type="checkbox"
            name="wifi"
            onChange={handleChange}
            checked={perks.includes("wifi")}
          />
          <span>Wifi</span>
        </label>
        <label className={"flex gap-x-2"}>
          <Truck />
          <input
            type="checkbox"
            name="parking"
            onChange={handleChange}
            checked={perks.includes("parking")}
          />
          <span>Free Parking</span>
        </label>
        <label className={"flex gap-x-2"}>
          <Tv />
          <input
            type="checkbox"
            name="tv"
            onChange={handleChange}
            checked={perks.includes("tv")}
          />
          <span>TV</span>
        </label>
        <label className={"flex gap-x-2"}>
          <Pets />
          <input
            type="checkbox"
            name="pet"
            onChange={handleChange}
            checked={perks.includes("pet")}
          />
          <span>Pets</span>
        </label>
        <label className={"flex gap-x-2"}>
          <Search />
          <input
            type="checkbox"
            name="private"
            onChange={handleChange}
            checked={perks.includes("private")}
          />
          <span>Private Entrance</span>
        </label>
      </div>
    </div>
  );
}

export default Perks;
