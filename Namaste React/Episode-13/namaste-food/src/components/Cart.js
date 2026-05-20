import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg mt-4">Your cart is currently empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="p-2 m-2 border-gray-100 rounded border-b-1 text-left flex flex-row gap-2"
              data-testid="added-cart-item"
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
                  onClick={() => handleAddItem(item?.card?.info)}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
