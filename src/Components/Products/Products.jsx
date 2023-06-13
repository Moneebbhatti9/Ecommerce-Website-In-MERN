import React from "react";
import "./css/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <>
      <div className="productItem">
        <img className="product-image " src={product.image} alt="" />

        <p>
          {product.title.length > 30
            ? product.title.substr(0, 30)
            : product.title}
        </p>

        <p>${product.price}</p>

        <p>
          {product.description.length > 65
            ? product.description.substr(0, 65)
            : product.description}
        </p>

        {/* add to cart button */}

        {cart.some((x) => x.id === product.id) ? (
          <button
            onClick={() => removeItemFromCart(product)}
            className="product_item-button"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => addItemToCart(product)}
            className="product_item-button"
          >
            Add to Cart
          </button>
        )}

        <button
          className="product_item-button"
          style={{ backgroundColor: "#FFC72C" }}
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Product;
