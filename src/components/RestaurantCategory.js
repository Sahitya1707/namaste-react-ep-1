import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndex, setShowItem }) => {
  const [individualState, setIndividualState] = useState(false);
  //   console.log(data.itemCards);
  const handleClick = () => {
    setShowItem();

    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4  ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title}({data?.itemCards?.length})
        </span>
        {showItem ? <span>⬆️</span> : <span>⬇️</span>}
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
