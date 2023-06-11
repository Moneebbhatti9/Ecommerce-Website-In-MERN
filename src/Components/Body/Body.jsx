import React, { useEffect, useState } from "react";
import "./css/Body.css";
import axios from "axios";
import Products from "../Products/Products";

const Body = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

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
