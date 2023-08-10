import CDN_URL from "../utils/config";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div
      className="m-4 p-2 w-64 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer   "
    >
      <img 
        className="res-logo rounded-lg object-fill h-48 w-96"
        alt="img"
        src={ CDN_URL+cloudinaryImageId} 
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
