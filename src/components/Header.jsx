import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>
      <ul className="links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/cart"}>
            <span className="cart-count">{cart.length}</span> View cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
