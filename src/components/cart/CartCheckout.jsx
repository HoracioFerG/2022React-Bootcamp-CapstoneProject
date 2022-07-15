import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { formatPrice } from "../../utils/productsUtils";

export const CartCheckout = ({ items, products }) => {
  const navigate = useNavigate();

  const costs = products.map(
    (product) => product.price * product.productQuantity
  );
  const totalProducts = costs.reduce((tempSum, a) => tempSum + a, 0);
  const shipmentCost = totalProducts * 0.19;
  const taxesCost = totalProducts * 0.16;
  const totalPayment = shipmentCost + totalProducts + taxesCost;
  return (
    <>
      <div className="title">
        <h1>Checkout Preview</h1>
      </div>
      <div className="checkoutRow">
        <p>Total number of products: </p>
        <b>{items}</b>
      </div>
      <div className="checkoutRow">
        <p>Total cost of products: </p>
        <b>${formatPrice(totalProducts)}</b>
      </div>
      <div className="checkoutRow">
        <p>Shipping Cost: </p>
        <b>${formatPrice(shipmentCost)}</b>
      </div>
      <div className="checkoutRow">
        <p>Taxes: </p>
        <b>${formatPrice(taxesCost)}</b>
      </div>
      <hr />
      <div className="bottom">
        <h3>Total: ${formatPrice(totalPayment)}</h3>
        <button
          onClick={() =>
            navigate("/checkout", {
              state: {
                products,
                costs: {
                  subtotal: totalProducts,
                  shippingCost: shipmentCost,
                  taxes: taxesCost,
                  total: totalPayment,
                },
              },
            })
          }
        >
          Proceed to payment
        </button>
      </div>
    </>
  );
};

CartCheckout.propTypes = {
  items: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
};
