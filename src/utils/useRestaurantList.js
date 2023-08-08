import { useEffect ,useState} from "react";
import { SWIGGY_API_URL } from "../utils/config";

const useRestaurantList =()=>{

    const[listOfRestaurants , setListOfRestaurants] = useState([]);
    const[filteredRestaurant , setFilteredRestaurant] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const data = await fetch(SWIGGY_API_URL);
    
          const json = await data.json();

          console.log(json);
    
          setListOfRestaurants(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        } catch {
          console.log("Something went wrong!!");
        }
      };

    return([listOfRestaurants , filteredRestaurant , setFilteredRestaurant]);
};

export default useRestaurantList;