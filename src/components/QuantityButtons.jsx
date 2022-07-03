import React from "react";
import QuantityButtonsContainer from "./QuantityButtonsStyle";

export const QuantityButtons = ({
  stock,
  productQuantity,
  setProductQuantity,
}) => {
  const handleMoreProduct = () => {
    if (productQuantity + 1 <= stock) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleLessProduct = () => {
    if (productQuantity - 1 !== 0) {
      setProductQuantity(productQuantity - 1);
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
