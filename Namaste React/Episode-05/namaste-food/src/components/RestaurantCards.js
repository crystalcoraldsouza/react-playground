import Card from "./Card";

const RestaurantCards = ({ listOfRestaurants }) => {
  return (
    <div className="restaurant-cards">
      {listOfRestaurants.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default RestaurantCards;
