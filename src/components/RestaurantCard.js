// import react, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  // const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, cuisines, name, costForTwo, sla, avgRating } =
    resData;
  const { deliveryTime } = sla;

  return (
    <div className="w-[20rem] h-[32rem] bg-[#8080805a] rounded px-2 py-2 flex flex-col justify-center ">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="megna-food"
        className="rounded h-[17rem]"
      />
      <h1 className="font-bold uppercase">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
      {/* <h4>{loggedInUser} Minutes</h4> */}
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

// Higher order component

// takes input as a restaurant card and the output will restaurant card promoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-[black] p-2 m-2 rounded-sm">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
