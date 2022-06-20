import React from "react";
import NavBar from "./Header";
import smLogo from "../assets/logo-50.png";
import smCart from "../assets/cart-64.png";

export const Header = ({ componentOn }) => {
  return (
    <NavBar>
      <div className="leftSideHeader">
        <img
          onClick={() => componentOn("home")}
          className="logo"
          src={smLogo}
          alt="logo"
        />
        <h3 className="brand-text">Luxury Furniture</h3>
      </div>
      <div className="rightSideHeader">
        <input
          type="text"
          className="search-input"
          placeholder="King size bed"
        />
        <a href="/" className="cart-logo">
          <img src={smCart} alt="cart-logo" />
        </a>
      </div>
    </NavBar>
  );
};
