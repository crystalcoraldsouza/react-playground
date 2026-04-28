const Filter = ({
  filteredListOfRestaurants,
  setFilteredListOfRestaurants,
}) => {
  console.log("Filter Component Rendered", filteredListOfRestaurants);
  return (
    <div className="filter">
      <button
        className="filter-btn"
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
