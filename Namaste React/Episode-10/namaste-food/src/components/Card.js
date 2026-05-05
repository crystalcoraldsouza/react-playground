const Card = (item) => {
  return (
    <div className="w-70 h-100 p-4 hover:shadow-lg rounded-lg cursor-pointer">
      <img
        className="w-60 h-60"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/18/1b056f87-0c7e-4407-a2ff-db9320b4f817_eeb6afb31ec546f09b4b80e670470b8703b1cf32b47e4e729dd5018266839c5a.JPG"
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

export default Card;
