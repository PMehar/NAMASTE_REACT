import RestaurantCard from "./RestaurantCard";
import {useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {
  //Local state Variable
  const [listOfRestaurants, filteredRestaurant , setFilteredRestaurant] = useRestaurantList();
 
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return(
      <h1>
        🔴 Looks like you are offline!! Please check your internet connection 
      </h1>
    )
  };
  //if (!listOfRestaurants) return null; //early return(component not rendered)
  //Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between mx-8">
        <div className="search my-4 py-2 flex">
          <input
            type="text"
            className=" h-10 px-28 m-4 bg-slate-100 rounded-md placeholder-gray-500" placeholder="Search for Restaurants..." 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 my-4 rounded-lg"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //searchText
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div className="filter m-4 p-4 flex">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            //filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant?.info?.id} to= {"/restaurants/"+ restaurant?.info?.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
