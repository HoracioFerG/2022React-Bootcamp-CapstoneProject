import React from "react";
import CheckoutContainer from "./CheckoutStyle";
import { Form } from "./Form";
import { Summary } from "./Summary";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <h1>Review your order</h1>
      <hr />
      <div className="container">
        <Form />
        <Summary />
      </div>
    </CheckoutContainer>
  );
};
