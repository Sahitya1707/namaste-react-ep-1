import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("Header component rendered");
  // if no dependency array => useEffect is call on every render

  // if dependency array is [] use effect is called only in the initial render

  // if dependency array is [btnName] - update everytime btnName is upadted
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex h-[5rem] w-[100vw] justify-between items-center px-[2rem ] bg-[#5b92c5] shadow-lg">
      <div>
        <Link to="/">
          <img src={`${LOGO_URL}`} alt="" className="h-[rem] w-[7rem]" />
        </Link>
      </div>
      <div className=" uppercase">
        <ul className="flex px-2">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "😡"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="uppercase px-2"
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
