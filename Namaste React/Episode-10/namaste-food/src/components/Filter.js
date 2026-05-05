const Filter = ({
  filteredListOfRestaurants,
  setFilteredListOfRestaurants,
}) => {
  console.log("Filter Component Rendered", filteredListOfRestaurants);
  return (
    <div className="mx-0 my-4">
      <button
        className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => {
          console.log("Clicked");
          const filteredList = filteredListOfRestaurants.filter(
            (restaurant) => restaurant?.info?.avgRating > 4,
          );
          setFilteredListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Filter;
