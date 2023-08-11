import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const {resId}= useParams();

  const dummy  = "Dummy data" ;

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  //early return
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = 
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c)=>
        c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    //console.log(categories);

    return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl font-serif ">{name}</h1>
      <h3 className="font-semibold text-lg font-serif ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>{avgRating} stars</h3>
      {/* category accordians */}
      {categories.map((category, index)=>(
        <RestaurantCategory key={category?.card?.card?.title} data ={category?.card?.card}
        showItems= {index === showIndex? true : false}
        setShowIndex={()=> setShowIndex(index)}
        dummy ={dummy}/>

      ))}
    </div>
  );
};

export default RestaurantMenu;
