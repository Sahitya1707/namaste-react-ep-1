import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  //Destructing of Object
  // console.log(props);
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, cuisines, name, costForTwo, sla, avgRating } =
    resData;
  const { deliveryTime } = sla;

  // console.log(resData);
  // console.log(resData.info.cloudinaryImageId);
  // const { cuisine } = resData;

  // console.log(cuisine);
  // console.log(resData[0]);
  // console.log(resData.menu[0].name);
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
      <h4>{avgRating} Rating</h4>
    </div>
  );
};
export default RestaurantCard;
