const Filter = ({ listOfRestaurants, setListOfRestaurants }) => {
  return (
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("Clicked");
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.rating > 4,
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Filter;
