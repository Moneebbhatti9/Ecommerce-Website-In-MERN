import React from "react";
import "./css/Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));
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

        <button
          onClick={() => addItemToCart(product)}
          className="product_item-button"
        >
          Add to Cart
        </button>
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
