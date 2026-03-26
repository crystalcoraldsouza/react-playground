import { useState } from "react";

const Search = ({ listOfRestaurants, setFilteredListOfRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search for dishes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
            restaurant.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase()),
          );
          setFilteredListOfRestaurants(filteredRestaurants);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
