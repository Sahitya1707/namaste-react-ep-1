import { useEffect, useState } from "react";
import React from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    // console.log(data);
    // console.log("THis is fetching data from custom hook");

    const json = await data.json();
    // console.log(json);

    setResInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, [resId]);

  // fetchData

  // fetchData();

  return resInfo;
};

export default useRestaurantMenu;
