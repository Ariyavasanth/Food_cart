import React from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../features/cart/cartSlice";

const Product = ({ product }) => {
  //add the items in this array
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  //get the action from the reducers
  const dispatch = useDispatch();

  console.log(product.pic);

  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + ".."
      : product.name;
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt="image is pizza"></img>
      </div>

      <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.some((item) => item.id === product.id) ? (
          <button
            onClick={() => dispatch(removeCart(product.id))}
            id="remove-btn"
          >
            Remove Cart
          </button>
        ) : (
          <button onClick={() => dispatch(addCart(product))}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
