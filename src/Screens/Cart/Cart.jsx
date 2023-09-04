import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/cart.css";
import Header from "../../Components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  cleanCart,
} from "../../Components/Redux/CartSlice";
import PlaceIcon from "@mui/icons-material/Place";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const Cart = (product) => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const charges = 30;
  const orders = [...cart];
  console.log("cart console", orders);
  const navigate = useNavigate();
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

  const cleanCartProduct = () => {
    dispatch(cleanCart());
  };

  const handlePlaceOrder = () => {
    setTimeout(() => {
      navigate("/order", {
        state: { orders: orders },
      });
    });

    setTimeout(() => {
      cleanCartProduct();
    });
  };

  return (
    <>
      <Header />
      <div className="cart">
        {/* Left Part */};
        {total === 0 ? (
          <h2 className="cartLeft">Cart is Empty</h2>
        ) : (
          <>
            <div className="cartLeft">
              {cart.map((product) => (
                <div className="cartContainer" key={product.id}>
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
            <div className="cartRight">
              <div className="locationWarraper">
                <PlaceIcon style={{ color: "lightgray" }} />
                <div className="locationDescription">
                  <p style={{ marginTop: "3px", cursor: "pointer" }}>
                    Select Your Location
                  </p>
                  <p style={{ marginTop: "3px" }}>
                    Select Your Location So that we can find you easily
                  </p>
                  <button className="locationButton">Select Location</button>
                </div>
              </div>

              <div className="locationWarraper">
                <PlaceIcon style={{ color: "lightgray" }} />
                <div className="locationDescription">
                  <p style={{ marginTop: "3px" }}>Choose Your Saved Location</p>
                  <button className="locationButton">Choose Location</button>
                </div>
              </div>

              {/* Coupon Section */}

              <div className="couponWarraper">
                <ConfirmationNumberIcon style={{ color: "lightgray" }} />
                <div>
                  <h4 className="couponDescriptionHeading">Apply Coupon</h4>
                  <p
                    className="couponDescriptionDescription"
                    style={{ marginTop: "3px" }}
                  >
                    Apply Coupons to avail offers on products
                  </p>
                </div>
              </div>

              {/* CheckOut Part */}

              <div className="checkOutPart">
                <div className="checkOutTotal">
                  <h5>Total Price</h5>
                  <p style={{ fontSize: "14px" }}>${total}</p>
                </div>

                <div className="checkOutTotal">
                  <h5>Discount</h5>
                  <p style={{ fontSize: "14px" }}>-</p>
                </div>

                <div className="checkOutTotal">
                  <h5>Shipping Charges</h5>
                  <p style={{ fontSize: "14px" }}>${charges}</p>
                </div>
                <hr />
                <div className="checkOutTotal">
                  <h3>Grand Total</h3>
                  <p style={{ fontSize: "14px" }}>${total + charges}</p>
                </div>
              </div>

              <button className="checkOutPlaceOrder" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </>
        )}
        {/* Right Part */}
      </div>
    </>
  );
};

export default Cart;
