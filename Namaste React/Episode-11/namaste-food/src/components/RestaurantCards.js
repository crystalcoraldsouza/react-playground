import Card, { withDiscountedLabel } from "./Card";
import { Link } from "react-router-dom";

const RestaurantCards = ({ filteredListOfRestaurants }) => {
  const DiscountedCard = withDiscountedLabel(Card);
  return (
    <div className="grid grid-cols-3 gap-2">
      {filteredListOfRestaurants?.map((item) => (
        <Link
          className="no-underline text-[#2c6b64] px-5 py-2.5"
          to={`/restaurant/${item?.info?.id}`}
          key={item?.info?.id}
        >
          {item?.info?.aggregatedDiscountInfoV3 ? (
            <DiscountedCard key={item?.info?.id} {...item?.info} />
          ) : (
            <Card key={item?.info?.id} {...item?.info} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCards;
