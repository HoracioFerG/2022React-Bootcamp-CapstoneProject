import React, { useState } from "react";

import { QuantityButtons } from "../QuantityButtons";
import CartItemContainer from "./CartItemStyle";
import traschIcon from "../../assets/trash-icon.png";

export const CartItem = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <CartItemContainer>
      <div className="imageContainer">image</div>
      <div className="descriptionContainer">
        <div className="header">
          <h3>Product Name</h3>
          <img src={traschIcon} alt="trash_icon" />
        </div>
        <hr />
        <h4>n x price</h4>
        <h4>Total</h4>
        <QuantityButtons
          stock={10}
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
        />
        <p>15 on stock</p>
        <small>
          After the arrival of your product you have 15 days to any type of
          change or refund.
        </small>
      </div>
    </CartItemContainer>
  );
};
