import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  const { resId } = params;
  useEffect(() => {
    fetchMenu();
  }, []);
  // console.log(params);
  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}${resId}`);

    // console.log(data);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
    console.log(resInfo);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo?.cards[0]?.card?.card?.info);
  const { name, cloudinaryImageId, city, costForTwo, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  // const { cards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR;

  // console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR);
  // console.log(cards);

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
