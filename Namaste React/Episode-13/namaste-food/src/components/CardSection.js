import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const CardSection = ({
  sectionCard,
  index,
  expandedIndex,
  setExpandedIndex,
}) => {
  const { title, itemCards } = sectionCard || {};
  const isExpanded = expandedIndex === index;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Logic to add item to cart
    dispatch(addItem(item));
  };
  return (
    <div key={index}>
      <div
        className="w-200 shadow-lg p-4 flex justify-between items-center rounded-md cursor-pointer "
        onClick={() => setExpandedIndex(index === expandedIndex ? -1 : index)}
      >
        <div className="text-xl my-auto">{`${title} (${itemCards?.length})`}</div>
        <div className=" text-gray-500 my-auto">{isExpanded ? "^" : "⌄"}</div>
      </div>

      {isExpanded && (
        <div>
          {itemCards?.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="p-2 m-2 border-gray-100 rounded border-b-1 text-left flex flex-row gap-2"
              data-testid="food-item"
            >
              <img
                className="w-20 h-20 m-auto rounded-full mx-0 mr-4"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                  item?.card?.info?.imageId
                }
                alt="Restaurant"
              />
              <div className="my-auto">
                {`${item?.card?.info?.name} - Rs. ${item?.card?.info?.price / 100}`}
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="ml-auto my-auto">
                <button
                  className="bg-yellow-400 p-1 rounded text-white w-16 cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSection;
