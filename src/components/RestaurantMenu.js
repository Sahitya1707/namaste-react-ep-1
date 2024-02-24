import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  // console.log(useParams());
  const { resId } = params;
  // console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  // console.log(useRestaurantMenu);
  // console.log(resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
  // console.log(resInfo.cards[5]);
  // console.log(resInfo[2].groupedCard.cardGroupMap);
  // console.log(resInfo);

  const { name, cloudinaryImageId, city, costForTwo, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // filter all the items with the type filter of catergories
  // console.log(
  //   resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((e) => {
  //     return e.card.card?.["@type"] = 'hi';
  //   })
  // );
  // console.log(resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // select only the cards with the @type of itemCategory
  const categories =
    resInfo &&
    resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  if (resInfo === null) {
    console.log("shimmer");
    return <Shimmer />;
  }
  return (
    <div className="text-center">
      <h1 className="font-bold my-2 uppercas text-2xl">{name}</h1>

      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="megna-food"
        className="mx-auto h-[20rem] w-[20rem] rounded"
      />
      <h1 className="font-bold">{city}</h1>
      <ul>
        <h2 className="font-semibold">Cusines:</h2>
        {cuisines.map((e, i) => {
          //   console.log(e);
          //   console.log("momo");
          return <li key={i}>{e}</li>;
        })}
      </ul>

      <p>{costForTwo / 100} for two</p>

      {categories &&
        categories.map((category, i) => {
          return <RestaurantCategory key={i} data={category?.card?.card} />;
        })}
    </div>
  );
};

export default RestaurantMenu;
