import Search from "./Search";
import Filter from "./Filter";
import RestaurantCards from "./RestaurantCards";
import ShimmerUI from "./ShimmerUI";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect, useRef } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    [],
  );
  // const [fullData, setFullData] = useState();

  const bottomRef = useRef(null);

  useEffect(() => {
    // setListOfRestaurants(restaurantList);
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        console.log("Bottom of the page reached!");
        // Fetch more data or perform any action when the bottom is reached
        // fetchMoreData();
      }
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [filteredListOfRestaurants]);

  // const fetchMoreData = async () => {
  //   const data = await fetch(
  //     "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //       body: JSON.stringify({
  //         lat: 12.9351929,
  //         lng: 77.62448069999999,
  //         nextOffset: fullData?.data?.pageOffset?.nextOffset,
  //         page_type: "DESKTOP_WEB_LISTING",
  //         filters: {},
  //         _csrf: fullData?.csrfToken,
  //         widgetOffset: fullData?.data?.pageOffset?.widgetOffset,
  //         seoParams: {
  //           seoUrl: "https://www.swiggy.com/restaurants",
  //           pageType: "FOOD_HOMEPAGE",
  //           apiName: "FoodHomePage",
  //           businessLine: "FOOD",
  //         },
  //       }),
  //     },
  //   );
  //   const json = await data?.json();

  //   // setPageOffset(json?.data?.pageOffset?.nextOffset);
  // };

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    setListOfRestaurants(
      json.data?.data?.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );
    setFilteredListOfRestaurants(
      json.data?.data?.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );
    // setFullData(json);
  };

  if (listOfRestaurants?.length === 0) {
    return <ShimmerUI />;
  }

  // console.log(pageOffset);
  return (
    <div className="body-component">
      <div className="filter-container">
        <Search
          listOfRestaurants={listOfRestaurants}
          setFilteredListOfRestaurants={setFilteredListOfRestaurants}
        />
        <Filter
          filteredListOfRestaurants={filteredListOfRestaurants}
          setFilteredListOfRestaurants={setFilteredListOfRestaurants}
        />
      </div>
      <RestaurantCards filteredListOfRestaurants={filteredListOfRestaurants} />

      <div ref={bottomRef} style={{ height: "1px" }} />
    </div>
  );
};

export default Body;
