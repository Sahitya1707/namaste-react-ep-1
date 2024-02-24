import React from "react";
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // try to check if user is online or not
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      // console.log("offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  //boolean
  return onlineStatus;
};

export default useOnlineStatus;
