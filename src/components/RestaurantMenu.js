import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import axios from "axios";

import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=650753&catalog_qa=undefined&submitAction=ENTER"
    );

    console.log(data);
    // const json = await data.json();
    // console.log(json);
    // setResInfo(json.data);
  };
  //   console.log(resInfo);
  // const { name, cloudinaryImageId } = resInfo.resInfo.cards[0].card.card.info;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      {/* <h1>{resInfo.cards[0].card.card.info.name}</h1> */}
      {/*    
      <img
        src={`${CDN_URL}${resInfo.cards[0].card.card.info.cloudinaryImageId}`}
        alt="megna-food"
        className="res-logo"
      />
      <h1>{resInfo.cards[0].card.card.info.city}</h1>
      <h2>Cusines</h2>
      <ul>
        {resInfo.cards[0].card.card.info.cuisines.map((e, i) => {
          //   console.log(e);
          //   console.log("momo");
          return <li key={i}>{e}</li>;
        })}
      </ul>
      <h2>Menu</h2>
      <ul>
        <li>Momos</li>
      </ul>
      <p>{resInfo.cards[0].card.card.info.costForTwo / 100} for two</p> */}
    </div>
  );
};

export default RestaurantMenu;
