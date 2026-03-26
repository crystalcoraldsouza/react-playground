import Card from "./Card";

const RestaurantCards = ({ filteredListOfRestaurants }) => {
  return (
    <div className="restaurant-cards">
      {filteredListOfRestaurants?.map((item) => (
        <Card key={item?.info?.id} {...item?.info} />
      ))}
    </div>
  );
};

export default RestaurantCards;
