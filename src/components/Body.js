import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

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

  //conditional rendering

  return filterDatas.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
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
              console.log(filteredData);
              setFilterDatas(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {/* {console.log(filterDatas)} */}
        {filterDatas.map((filterData) => {
          return (
            <Link to={`/restaurants/${filterData.id}`} key={filterData.id}>
              <RestaurantCard resData={filterData} />
            </Link>
          );
        })}
        {/* <RestaurantCard resData={resObj[0]} /> */}
        {/* <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} /> */}
      </div>
    </div>
  );
};

export default Body;
