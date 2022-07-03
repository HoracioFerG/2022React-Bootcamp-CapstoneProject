import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Header";
import smLogo from "../assets/logo-50.png";
import smCart from "../assets/cart-64.png";
import { CartImage } from "./cart/CartImage";

export const Header = () => {
  const navigate = useNavigate();
  const refSearch = useRef(null);
  const handleOnSearch = (e) => {
    navigate(`/search/?querySearch=${refSearch.current.value}`);
  };

  return (
    <NavBar>
      <div className="leftSideHeader">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src={smLogo}
          alt="logo"
        />
        <h3 className="brand-text">Luxury Furniture</h3>
      </div>
      <div className="rightSideHeader">
        <input
          ref={refSearch}
          type="text"
          className="search-input"
          placeholder="King size bed"
        />
        <button onClick={handleOnSearch} className="searchButton">
          Search
        </button>
        <CartImage imgSrc={smCart} />
      </div>
    </NavBar>
  );
};
