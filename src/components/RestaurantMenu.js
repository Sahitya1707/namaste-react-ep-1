import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const params = useParams();

  const { resId } = params;

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, city, costForTwo, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>

      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="megna-food"
        className="resmenu-img"
      />
      <h1>{city}</h1>
      <h2>Cusines</h2>
      <ul>
        {cuisines.map((e, i) => {
          //   console.log(e);
          //   console.log("momo");
          return <li key={i}>{e}</li>;
        })}
      </ul>

      <p>{costForTwo / 100} for two</p>
    </div>
  );
};

export default RestaurantMenu;
