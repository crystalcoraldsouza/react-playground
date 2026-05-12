import React, { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import CardSection from "./CardSection";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
  //   );
  //   const json = await data.json();
  //   setResInfo(json?.data);
  // };

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // const { title, itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const sections =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) => card && Object.keys(card).length > 0,
    );

  return resInfo === null ? (
    <ShimmerUI />
  ) : (
    <div className="text-center m-auto mt-4">
      <div className="flex gap-5 m-auto w-1/2">
        <img
          className="w-20 h-20 m-auto rounded-full"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            cloudinaryImageId
          }
          alt="Restaurant"
        />
        <h1 className="bold text-3xl my-auto">{name}</h1>
      </div>
      <div className="flex gap-5 mx-auto my-4 w-1/2">
        <div className="text-sm my-auto">{cuisines.join(", ")}</div>
        <div className="text-sm bg-yellow-400 w-30 m-auto p-1 rounded text-white">
          {costForTwo}
        </div>
      </div>

      {sections.map((section, index) => {
        return (
          <CardSection
            sectionCard={section?.card?.card || {}}
            index={index}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
