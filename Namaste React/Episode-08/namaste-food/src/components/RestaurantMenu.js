import React, { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };
  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};
  // const { title, itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const sections = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(sections);
  const CardSection = ({ sectionCard }) => {
    console.log(sectionCard);
    const { title, itemCards } = sectionCard || {};
    console.log(title, itemCards);
    return (
      <React.Fragment key={title}>
        <h3>{title}</h3>
        <ul>
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              <div>
                {`${item?.card?.info?.name} - Rs. ${item?.card?.info?.price / 100}`}
                <p>{item?.card?.info?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  };
  return resInfo === null ? (
    <ShimmerUI />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <hr />
      {sections.map((section) => {
        return (
          <CardSection
            sectionCard={section?.card?.card || {}}
            key={section?.card?.card?.title}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
