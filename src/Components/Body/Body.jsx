import React, { useEffect, useState } from "react";
import "./css/Body.css";
import axios from "axios";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

const Body = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
      });
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="body">
        <div className="bodyItems">
          {products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
