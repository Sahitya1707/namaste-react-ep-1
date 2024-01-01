import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  //Destructing of Object
  // console.log(props);
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, cuisines, name, costForTwo, sla, avgRating } =
    resData?.info;
  const { deliveryTime } = sla;

  // console.log(resData);
  // console.log(resData.info.cloudinaryImageId);
  // const { cuisine } = resData;

  // console.log(cuisine);
  // console.log(resData[0]);
  // console.log(resData.menu[0].name);
  return (
    <div className="res-card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="megna-food"
        className="res-logo"
      />
      <h3>{cuisines.join(", ")}</h3>
      <h4>{name}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};
export default RestaurantCard;
