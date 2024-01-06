import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("Header component rendered");
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
