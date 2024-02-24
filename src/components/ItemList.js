import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items &&
        items.map((e) => {
          return (
            <div
              key={e.card.info.id}
              className="text-left p-2 m-2 border-b-2 border-solid border-grey-400 flex justify-between gap-x-4"
            >
              <div className="font-semibold py-2 ">
                <div>
                  <span className="pr-2">{e.card.info.name}</span>
                  <span>रु {e.card.info.price / 100}</span>
                </div>

                <p>{e.card.info.description}</p>
              </div>
              {e.card.info.imageId ? (
                <div className="relative">
                  <img
                    src={CDN_URL + e.card.info.imageId}
                    alt=""
                    className="w-[6rem] h-[6rem]"
                  />
                  <button className="p-1 bg-black text-white shadow-sm absolute bottom-0 left-0 text-sm rounded-sm cursor-pointer">
                    Add +
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
