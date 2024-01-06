import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { BeatLoader } from "react-spinners";
import Shimmer from "./Shimmer";
// let filterDatas = resObj;
const Body = () => {
  const [filterDatas, setFilterDatas] = useState([]);

  useEffect(() => {
    fetchData();
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6105073&lng=77.1145653&str=Best%20Food%20Bank&trackingId=e12a47d4-5716-ea53-3dbe-f8e4fc6b078e&submitAction=ENTER&queryUniqueId=84fa4b8b-4671-714a-3f37-917d6df4ae01"
    );
    const json = await data.json();

    const restaurantCard =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;

    const restaurantCardInfo = [];
    restaurantCard.forEach((e) => {
      restaurantCardInfo.push(e?.card?.card?.info);
    });

    setFilterDatas(restaurantCardInfo);
  };

  if (filterDatas.length === 0) {
    return (
      // <div className="loader">
      //   <BeatLoader color="#36d7b7" />{" "}
      // </div>
      <Shimmer />
    );
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(filterData);
            console.log("filter-btn clicked");
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
          return <RestaurantCard resData={filterData} key={filterData.id} />;
        })}
        {/* <RestaurantCard resData={resObj[0]} /> */}
        {/* <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} /> */}
      </div>
    </div>
  );
};

export default Body;
