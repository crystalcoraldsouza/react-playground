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

export default Card;
