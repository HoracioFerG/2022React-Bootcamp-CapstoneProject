import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { cartUpdate } from "../store/slices/shoppingCartSlice";
import QuantityButtonsContainer from "./QuantityButtonsStyle";

export const QuantityButtons = ({
  stock,
  productQuantity,
  setProductQuantity,
  isOnCheckout = false,
  product = null,
}) => {
  const dispatch = useDispatch();

  const handleMoreProduct = () => {
    if (stock > 0) {
      setProductQuantity(productQuantity + 1);
      isOnCheckout &&
        dispatch(cartUpdate({ product, quantity: 1, operation: "increment" }));
    }
  };

  const handleLessProduct = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
      isOnCheckout &&
        dispatch(cartUpdate({ product, quantity: 1, operation: "decrement" }));
    }
  };

  return (
    <QuantityButtonsContainer>
      <div className="btn-group">
        <button onClick={handleLessProduct}>-</button>
        <button>{productQuantity}</button>
        <button onClick={handleMoreProduct}>+</button>
      </div>
    </QuantityButtonsContainer>
  );
};

QuantityButtons.propTypes = {
  stock: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
  isOnCheckout: PropTypes.bool,
  product: PropTypes.object,
};
