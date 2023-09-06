import React, { useEffect, useState } from "react";
import "./css/Body.css";
import axios from "axios";
import Products from "../Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { jwtAxios } from "../../Services/Auth/jwtAxios";
import { setUser } from "../../Components/Redux/authSlice";
import jwtDecode from "jwt-decode";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const checkTokenValidity = async (token) => {
    if (!token) return false;

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp > currentTime) {
        return true;
      } else {
        localStorage.removeItem("token");
        return false;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };

  const fetchAuthUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) return false;

    try {
      const res = await jwtAxios.get("/authUser");
      dispatch(setUser(res.data));
      return res.status === 200;
    } catch (error) {
      console.error("Error fetching authUser:", error);
      return false;
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const isTokenValid = await checkTokenValidity(
        localStorage.getItem("token")
      );
      const isAuthUserValid = await fetchAuthUser();

      if (isTokenValid || isAuthUserValid) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

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
