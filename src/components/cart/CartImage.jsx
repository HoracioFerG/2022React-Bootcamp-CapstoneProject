import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import LinkContainer from "./CartImageStyle";

export const CartImage = ({ imgSrc }) => {
  const state = useSelector((state) => state.cart);

  return (
    <LinkContainer to={"/cart"}>
      <img src={imgSrc} alt="cart-logo" />
      {state.items > 0 && <span className="quantityOnCart">{state.items}</span>}
    </LinkContainer>
  );
};

CartImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
