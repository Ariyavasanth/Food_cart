import { useState, useEffect } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    const totalAmount = cart.reduce(
      (total, item) => total + Number(item.amt),
      0 // ⬅️ Initial value for total
    );
    setTotal(totalAmount);
  }, [cart]);

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((items) => (
          <div className="cart-product" key={items.id}>
            <div className="img">
              <img src={items.pic} alt={items.name} />
            </div>
            <div className="cart-product-details">
              <h3>{items.name}</h3>
              <p>Price Rs: {items.amt}</p>
            </div>

            <div className="btn">
              <button onClick={() => dispatch(removeCart(items.id))}>
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cart-amt">Total Amount: {total}</h3>
    </>
  );
};

export default Cart;
