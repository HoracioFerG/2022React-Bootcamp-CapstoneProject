import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { formatPrice } from "../../utils/productsUtils";
import { SummaryItem } from "./SummaryItem";
import SummaryContainer from "./SummaryStyle";

export const Summary = ({ products, costs }) => {
  const { subtotal, shippingCost, taxes, total } = costs;

  const navigate = useNavigate();
  return (
    <SummaryContainer>
      <div className="header">
        <h3>Summary</h3>
      </div>
      <p>Products</p>
      <hr />
      <div className="productsSummaryC">
        {products.map((product, i) => {
          return (
            <SummaryItem
              key={i}
              quantity={product.productQuantity}
              productName={product.name}
              total={formatPrice(product.productQuantity * product.price)}
            />
          );
        })}
      </div>
      <hr />
      <div className="summary">
        <div className="summaryRow">
          <b>Subtotal:</b>
          <p>${formatPrice(subtotal)}</p>
        </div>
        <div className="summaryRow">
          <b>Shipping:</b>
          <p>${formatPrice(shippingCost)}</p>
        </div>
        <div className="summaryRow">
          <b>Taxes:</b>
          <p>${formatPrice(taxes)}</p>
        </div>
        <hr />
        <div className="summaryRow">
          <h3>Total:</h3>
          <p>${formatPrice(total)}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button>Proceed</button>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  products: PropTypes.array.isRequired,
  cost: PropTypes.object.isRequired,
};
