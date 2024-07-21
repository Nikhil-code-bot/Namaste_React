import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  console.log("shoeeee", data);
  const itemCardsLength = data?.data?.itemCards?.length || 0;
  const categoriesLength = data?.data?.categories?.length || 0;

  const itemCards = data?.data?.itemCards || [];
  const categories = data?.data?.categories || [];

  const items = [...itemCards, ...categories];
  // const [showItem, setShowItem] = useState(false);

  const handledClick = () => {
    console.log("Clicked");
    data.setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handledClick}
        >
          <span className="font-bold text-base">
            {data?.data?.title} ({itemCardsLength + categoriesLength})
          </span>
          <span>🔽</span>
        </div>
        {data.showItems && <ItemList item={items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
