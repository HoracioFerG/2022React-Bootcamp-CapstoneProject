import React from "react";
import { useLocation } from "react-router-dom";

import CheckoutContainer from "./CheckoutStyle";
import { Form } from "./Form";
import { Summary } from "./Summary";

export const Checkout = () => {
  const { state } = useLocation();

  return (
    <CheckoutContainer>
      {state ? (
        <>
          <h1>Review your order</h1>
          <hr />
          <div className="container">
            <Form />
            <Summary products={state.products} costs={state.costs} />
          </div>
        </>
      ) : (
        <h2 style={{ height: "60vh" }}>Your cart is empty.</h2>
      )}
    </CheckoutContainer>
  );
};
