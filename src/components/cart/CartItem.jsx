import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { QuantityButtons } from "../QuantityButtons";
import CartItemContainer from "./CartItemStyle";
import traschIcon from "../../assets/trash-icon.png";
import { formatPrice } from "../../utils/productsUtils";
import { cartUpdate } from "../../store/slices/shoppingCartSlice";

export const CartItem = ({ product }) => {
  const [productQuantity, setProductQuantity] = useState(
    product.productQuantity
  );
  const dispatch = useDispatch();

  const handleOnRemove = () => {
    dispatch(cartUpdate({ product, quantity: 0, operation: "remove" }));
  };

  return (
    <CartItemContainer>
      <div className="imageContainer">
        <img src={product.image.url} alt={product.image.alt} />
      </div>
      <div className="descriptionContainer">
        <div className="header">
          <h3>{product.name}</h3>
          <img src={traschIcon} alt="trash_icon" onClick={handleOnRemove} />
        </div>
        <hr />
        <h4>
          {product.productQuantity} x ${formatPrice(product.price)}
        </h4>
        <h4>${formatPrice(product.productQuantity * product.price)}</h4>
        <QuantityButtons
          stock={product.onStock}
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
          isOnCheckout={true}
          product={product}
        />
        <p>{product.onStock} on stock</p>
        <small>
          After the arrival of your product you have 15 days to any type of
          change or refund.
        </small>
      </div>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};
