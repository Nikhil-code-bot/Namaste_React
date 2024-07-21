import { RES_URL } from "../../Utils/constants";
const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cloudinaryImageId, cuisines, areaName, sla, avgRatingString } =
    resList?.info;

  return (
    <div className="m-4 p-4 w-72 rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="res-logo rounded-lg h-52 w-72"
        src={RES_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>
        <i className="fa-solid fa-star"></i>⭐ {avgRatingString} stars
      </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
