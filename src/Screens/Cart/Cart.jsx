import React from "react";
import "./css/cart.css";
import Header from "../../Components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../Components/Redux/CartSlice";

const Cart = (product) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const decrementItemQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };
  const incrementItemQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };

  const removeItem = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <>
      <Header />
      <div className="cart">
        {/* Left Part */}
        <div className="cartLeft">
          {cart.map((product) => (
            <div className="cartContainer">
              <div>
                <img
                  src={product.image}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="cartDesc">
                <p>
                  {product.title.length > 60
                    ? product.title.substr(0, 60)
                    : product.title}
                </p>
                <p>
                  {product.description.length > 80
                    ? product.description.substr(0, 80)
                    : product.description}
                </p>
                <p>${product.price}</p>
              </div>
              <div className="cartButtons">
                <div className="incrementButton">
                  <div
                    onClick={() => decrementItemQuantity(product)}
                    className="cartButton"
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    -{" "}
                  </div>
                  <div className="cartButton"> {product.quantity} </div>
                  <div
                    onClick={() => incrementItemQuantity(product)}
                    className="cartButton"
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    +{" "}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(product)}
                  className="removeProductButton"
                >
                  Remove Item
                </button>
                <h5>${product.price * product.quantity}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Right Part */}

        <div className="cartRight">
          <h1>Cart Left</h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
