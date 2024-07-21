import RestaurantCard from "./RestaurantCard";
// import resData from "../../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { withPromotedLabel } from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [fileredRestaurant, setFileredRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  console.log("fileredRestaurant", fileredRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0595596&lng=72.8295287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFileredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurant.length);
  if (fileredRestaurant.length === 0) {
    return <Shimmer />;
  }
  // const PromotedLabel = withPromotedLabel(RestaurantCard);
  return (
    <div className="body">
      <div className="filter flex content-center px-36">
        <div className="m-4 p-2 flex items-center">
          <button
            className="px-4 py-1 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurant(filterList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-2">
          <input
            type="text"
            className="px-4 py-2 border border-solid border-black p-4 m-4"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(elem) => setSearchText(elem.target.value)}
          />
          <button
            className="px-4 py-1 m-4 bg-orange-200 rounded-lg"
            onClick={() => {
              const data = filterData(searchText, listOfRestaurant);
              // update the state of restaurants list
              setFileredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {fileredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
