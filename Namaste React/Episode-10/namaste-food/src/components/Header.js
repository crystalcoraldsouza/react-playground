import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between header border-b-1 border-gray-300">
      <div className="max-w-100">
        <img className="w-30" src={LOGO_URL} alt="logo" />
      </div>
      <div className="my-auto mx-0 text-teal-700">
        <ul className="flex list-none ml-auto">
          <li className="px-4 py-2">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="p-2 text-white bg-teal-500 hover:bg-teal-600 rounded mr-6"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
