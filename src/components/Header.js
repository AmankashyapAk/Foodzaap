import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  //subscribing to thestore selector
  // const cart = useSelector((store) => store.cart.items);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("CII", cartItems);
  return (
    <div className="flex justify-between shadow-lg">
      {/* <h3>Hello</h3> */}
      <div className="logo-container">
        <img
          className="w-24"
          src="https://t4.ftcdn.net/jpg/02/41/39/03/360_F_241390329_FiQgvA7vusqkYx0snAjXkrd6ayW882ZD.jpg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Online</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
