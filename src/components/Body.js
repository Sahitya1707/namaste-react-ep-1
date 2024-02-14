import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import Shimmer from "./Shimmer";
// let filterDatas = resObj;
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    // console.log("called use effect");
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6105073&lng=77.1145653&str=Best%20Food%20Bank&trackingId=e12a47d4-5716-ea53-3dbe-f8e4fc6b078e&submitAction=ENTER&queryUniqueId=84fa4b8b-4671-714a-3f37-917d6df4ae01"
    );
    const json = await data.json();

    const restaurantCard =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;

    const restaurantCardInfo = [];
    restaurantCard.forEach((e) => {
      restaurantCardInfo.push(e?.card?.card?.info);
    });

    setListOfRestaurant(restaurantCardInfo);
    setFilterDatas(restaurantCardInfo);
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //conditional rendering
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  return filterDatas.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded mx-2"
            onChange={(e) => {
              setSearchText(e.target.value);
              // setFilterDatas(listOfRestaurant);
            }}
          />
          <button
            onClick={() => {
              let filteredData = listOfRestaurant.filter((res) => {
                // console.log(res.name);
                // console.log(searchText);

                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilterDatas(filteredData);
            }}
            className="border border-black border-solid px-4 rounded uppercase text-[black] bg-[#5b92c5] hover:bg-[white] hover:duration-75"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-2 py-2 bg-[#27ffed] border-solid  border-yellow-200  rounded-md my-2 mx-2"
          onClick={() => {
            // console.log(filterData);

            // console.log(filterDatas);
            let filteredData = filterDatas.filter((res) => {
              return res.avgRating > 4;
            });
            setFilterDatas(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {/* {console.log(filterDatas)} */}
        {filterDatas.map((filterData) => {
          return (
            <Link to={`/restaurants/${filterData.id}`} key={filterData.id}>
              {/* If the restaurant promoted then add a promoted label to it. */}
              {filterData.promoted ? (
                <RestaurantCardPromoted resData={filterData} />
              ) : (
                <RestaurantCard resData={filterData} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
