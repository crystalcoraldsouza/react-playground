import React from "react";
import ReactDOM from "react-dom/client";

const restaurantList = [
  {
    id: "1",
    name: "Pizza Place",
    description: "Delicious pizza with fresh ingredients.",
    price: 9.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Barbecue-Grilled-Food.png",
  },
  {
    id: "2",
    name: "Burger Joint",
    description: "Juicy burgers with a variety of toppings.",
    price: 7.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Grilled-Food-PNG-Cutout.png",
  },
  {
    id: "3",
    name: "Sushi Bar",
    description: "Fresh sushi rolls and sashimi.",
    price: 12.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Barbecue-Grilled-Food.png",
  },
  {
    id: "4",
    name: "Pizza Place",
    description: "Delicious pizza with fresh ingredients.",
    price: 9.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Barbecue-Grilled-Food.png",
  },
  {
    id: "5",
    name: "Burger Joint",
    description: "Juicy burgers with a variety of toppings.",
    price: 7.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Grilled-Food-PNG-Cutout.png",
  },
  {
    id: "6",
    name: "Sushi Bar",
    description: "Fresh sushi rolls and sashimi.",
    price: 12.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Barbecue-Grilled-Food.png",
  },
  {
    id: "8",
    name: "Pizza Place",
    description: "Delicious pizza with fresh ingredients.",
    price: 9.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Barbecue-Grilled-Food.png",
  },
  {
    id: "7",
    name: "Burger Joint",
    description: "Juicy burgers with a variety of toppings.",
    price: 7.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Grilled-Food-PNG-Cutout.png",
  },
  {
    id: "9",
    name: "Sushi Bar",
    description: "Fresh sushi rolls and sashimi.",
    price: 12.99,
    image:
      "https://www.pngall.com/wp-content/uploads/12/Barbecue-Grilled-Food.png",
  },
];
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.pngall.com/wp-content/uploads/8/Burger-Restaurant-PNG-Free-Download.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const SearchComponent = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search for dishes..." />
    </div>
  );
};

const Card = (item) => {
  return (
    <div className="card">
      <img src={item.image} alt="food" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
    </div>
  );
};

const RestaurantCards = () => {
  return (
    <div className="restaurant-cards">
      {restaurantList.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-component">
      <SearchComponent />
      <RestaurantCards />
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Namaste Food. All rights reserved.</p>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
