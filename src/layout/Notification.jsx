import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { formatPrice } from "../utils/productsUtils";

export const Notification = ({
  products,
  notificationContainerRef,
  upPrice,
  productQuantity,
}) => {
  const navigate = useNavigate();

  return (
    <div className="notificationContainer" ref={notificationContainerRef}>
      <div className="messageContainer">
        <h2>Products added to the cart!</h2>
        <hr />
        <h4 className="productName">{products.results[0].data.name}</h4>
        <div className="priceContainer">
          <h5 className="oldPrice">
            Price per unit: $
            {formatPrice(products.results[0].data.price + upPrice)}
          </h5>
          <h2>
            Subtotal $
            {formatPrice(products.results[0].data.price * productQuantity)}
          </h2>
          <h5 className="savePrice">
            You're about to save ${formatPrice(upPrice * productQuantity)}!
          </h5>
        </div>
        <div className="btnAlert">
          <button
            onClick={() =>
              (notificationContainerRef.current.style.display = "none")
            }
          >
            Ok
          </button>
          <button onClick={() => navigate(`/cart`)}>Go to cart</button>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  products: PropTypes.object.isRequired,
  notificationContainerRef: PropTypes.object.isRequired,
  upPrice: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
};
