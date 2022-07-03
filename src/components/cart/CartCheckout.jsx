import React from "react";

export const CartCheckout = () => {
  return (
    <>
      <div className="title">
        <h1>Checkout Preview</h1>
      </div>
      <div className="checkoutRow">
        <p>Total number of products: </p>
        <b>12345</b>
      </div>
      <div className="checkoutRow">
        <p>Total cost of products: </p>
        <b>12345</b>
      </div>
      <div className="checkoutRow">
        <p>Shipping Cost: </p>
        <b>12345</b>
      </div>
      <div className="checkoutRow">
        <p>Taxes: </p>
        <b>12345</b>
      </div>
      <hr />
      <div className="bottom">
        <h3>Total: $1,000,000</h3>
        <button>Proceed to payment</button>
      </div>
    </>
  );
};
