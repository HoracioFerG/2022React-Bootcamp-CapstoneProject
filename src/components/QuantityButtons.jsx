import React from "react";
import { useDispatch } from "react-redux";

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
    if (productQuantity + 1 <= stock) {
      setProductQuantity(productQuantity + 1);
      isOnCheckout &&
        dispatch(cartUpdate({ product, quantity: 1, operation: "increment" }));
    }
  };

  const handleLessProduct = () => {
    if (productQuantity - 1 !== 0) {
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
