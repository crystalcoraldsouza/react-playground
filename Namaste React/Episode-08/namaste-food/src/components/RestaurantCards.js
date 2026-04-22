import Card from "./Card";
import { Link } from "react-router-dom";

const RestaurantCards = ({ filteredListOfRestaurants }) => {
  return (
    <div className="restaurant-cards">
      {filteredListOfRestaurants?.map((item) => (
        <Link to={`/restaurant/${item?.info?.id}`} key={item?.info?.id}>
          <Card key={item?.info?.id} {...item?.info} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCards;
