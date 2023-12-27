import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header 
  - Logo
  - Nav Items


*Body
  - Search
  - CardContainer
    - Cards
      Img
      Name of Res, Star Rating, Cusine, Delivery time
   

*Footer
 - CopyRight
 - Links
 - Address
 - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
          alt=""
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://i.ytimg.com/vi/7uyOcS8QCTg/maxresdefault.jpg"
        alt="megna-food"
        className="res-logo"
      />
      <h3>Megna Food</h3>
      <h4>Biryani, North Indian, Nepali</h4>
      <h4>4.5 Rating</h4>
      <h4>38 Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
