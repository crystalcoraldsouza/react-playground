import Search from "./Search";
import Filter from "./Filter";
import RestaurantCards from "./RestaurantCards";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    setListOfRestaurants(restaurantList);
  }, []);

  return (
    <div className="body-component">
      <Search />
      <Filter
        listOfRestaurants={listOfRestaurants}
        setListOfRestaurants={setListOfRestaurants}
      />
      <RestaurantCards listOfRestaurants={listOfRestaurants} />
    </div>
  );
};

export default Body;
