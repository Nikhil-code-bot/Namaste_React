// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU } from "../../Utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestauranatMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  console.log("dffffffafsf", showIndex);

  if (resData === null) return <Shimmer />;

  // console.log("resData?.data?.cards[0]?.card?.card?.info", resData);
  const { name, cuisines, areaName, sla, expectationNotifiers } =
    resData?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  // const categories =
  //   resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"||
  //         "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  //   );

  const categories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log("AAAAAAAAAAA", categories);
  return (
    <div className="res-detail">
      <div className="text-center">
        <h1 className="font-bold my-4 text-2xl">{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>
          {areaName},{sla.lastMileTravelString}
        </p>
        <p>{expectationNotifiers}</p>
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            key={category?.card?.card?.title}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestauranatMenu;
