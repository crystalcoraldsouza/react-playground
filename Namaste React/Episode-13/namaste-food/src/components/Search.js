import { useState } from "react";

const Search = ({ listOfRestaurants, setFilteredListOfRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="my-4 mx-0">
      <input
        data-testid="searchInput"
        type="text"
        className="p-3 w-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Search for dishes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="p-3 bg-green-500 text-white rounded-md ml-2 hover:bg-green-600"
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
