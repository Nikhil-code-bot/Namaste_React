import { RES_MENU } from "../../Utils/constants";
// import resData from "../../Utils/mockData";

// console.log(resData);

const ItemList = (Item) => {
  console.log("item", Item?.item?.itemCards);

  const mainItem = Item?.item || [];
  const subItem = Item?.item.itemCards || [];

  const totalItems = [...mainItem, ...subItem];
  console.log("totalItems", totalItems);

  return (
    <div>
      {totalItems?.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>
                {/* {item?.card?.info?.name || item?.itemCards?.card?.info?.name} */}
                {item?.card?.info?.name}
              </span>
              <span>
                -₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.finalPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button className="p-2 mx-16 bg-white text-black-500 rounded-lg content-baseline">
                Add +
              </button>
            </div>
            <img
              src={RES_MENU + item?.card?.info?.imageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
