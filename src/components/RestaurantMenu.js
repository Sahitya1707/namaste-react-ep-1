import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState(true);

  const { loggedInUser } = useContext(UserContext);
  // const [eachShowItem, setEachShowItem] = useState(false);
  const params = useParams();

  const { resId } = params;

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);
  console.log(resInfo);
  const { name, cloudinaryImageId, city, costForTwo, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const dummy = "dummy Data";

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
        {cuisines &&
          cuisines.map((e, i) => {
            //   console.log(e);
            //   console.log("momo");
            return <li key={i}>{e}</li>;
          })}
      </ul>

      <p>{costForTwo / 100} for two</p>
      <span>{loggedInUser}</span>
      {categories &&
        categories.map((category, i) => {
          console.log(showItem);
          return (
            <RestaurantCategory
              key={i}
              data={category?.card?.card}
              showItem={i === showIndex && showItem}
              setShowIndex={() => {
                setShowIndex(i);
                // setShowIndex(true);
                // setShowItem(!showItem);
              }}
              setShowItem={() => {
                setShowItem(!showItem);
              }}
            />
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
