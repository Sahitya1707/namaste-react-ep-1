import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

// let filterDatas = resObj;
const Body = () => {
  const [filterDatas, setFilterDatas] = useState(resObj);

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
              return res.info.avgRating > 4;
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
            <RestaurantCard resData={filterData} key={filterData.info.id} />
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
