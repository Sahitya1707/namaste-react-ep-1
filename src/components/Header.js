import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("Header component rendered");
  // if no dependency array => useEffect is call on every render

  // if dependency array is [] use effect is called only in the initial render

  // if dependency array is [btnName] - update everytime btnName is upadted
  useEffect(() => {
    console.log("Header use effect called.");
  }, []);
  return (
    <div className="header">
      <div>
        <img src={`${LOGO_URL}`} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
