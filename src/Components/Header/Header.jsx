import React from "react";
import "./css/Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import { selectUser } from "../Redux/authSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <div className="header">
        {/* website logo */}
        <div>
          <Link to="/">
            <img
              className="image-logo"
              src="https://links.papareact.com/f90"
              alt="logo"
            />
          </Link>
        </div>
        {/* Search input */}
        <div className="header_search_container">
          <input
            className="header_input"
            type="text"
            placeholder="search items"
          />
          <SearchOutlinedIcon
            style={{ color: "white", marginLeft: "4px", marginTop: "3px" }}
          />
        </div>
        {user ? (
          <div style={{ display: "flex" }}>
            <div>
              <h4 className="headerText">Hello {user.firstName}</h4>
              <h4 className="headerText">Accounts & Lists</h4>
            </div>{" "}
            <ArrowDropDownIcon style={{ color: "white", cursor: "pointer" }} />
          </div>
        ) : null}

        <div onClick={navigateToCart} className="Shopping-cart">
          <ShoppingCartOutlinedIcon className="shopping_cart-icon" />
          <span className="span-container">{cart.length}</span>
        </div>
        <div style={{ display: "flex" }}>
          <Link to="/signin">
            <Button variant="contained">SIGN IN</Button>
          </Link>
        </div>
        {/* Cart Icon */}
        <div>
          <Link to="/signup">
            <Button variant="outlined">SIGN UP</Button>
          </Link>
        </div>
      </div>

      {/* Header Bottom */}

      <div className="headerBottom">
        <MenuIcon style={{ color: "white" }} />
        <p className="bottom_header_text">All</p>
        <p className="bottom_header_text">Buy</p>
        <p className="bottom_header_text">Baby</p>
        <p className="bottom_header_text">Men</p>
        <p className="bottom_header_text">Women</p>
        <p className="bottom_header_text">Super Sale</p>
        <p className="bottom_header_text">Health & lifeStyle</p>
        <p className="bottom_header_text">Exiting Offers</p>
        <p className="bottom_header_text">Customer Service</p>
        <p className="bottom_header_text">Sell</p>
      </div>
    </>
  );
};

export default Header;
