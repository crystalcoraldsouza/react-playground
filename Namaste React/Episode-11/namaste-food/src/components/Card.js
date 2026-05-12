const Card = (item) => {
  return (
    <div className="w-70 h-100 p-4 shadow-sm rounded-lg  hover:shadow-lg rounded-lg cursor-pointer">
      <img
        className="w-60 h-60"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
          item.cloudinaryImageId
        }
        alt="food"
      />
      <h2>{item.name}</h2>
      <p>{item.cuisines?.join(", ")}</p>
      <p>{item.costForTwo}</p>
      <p>{item.avgRating} Stars</p>
    </div>
  );
};

export const withDiscountedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="bg-red-300 text-white p-2 absolute rounded-tl-lg rounded-br-lg text-sm">
          {props?.aggregatedDiscountInfoV3?.header}
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
