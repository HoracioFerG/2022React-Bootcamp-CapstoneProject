import React from "react";
import { CartCheckout } from "../components/cart/CartCheckout";
import CartContainer from "../components/cart/CartContainer";
import { CartItem } from "../components/cart/CartItem";

export const CartHomePage = () => {
  return (
    <CartContainer>
      <h1>Review your cart</h1>
      <hr />
      <div className="container">
        <div className="itemsContainer">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="checkoutContainer">
          <CartCheckout />
        </div>
      </div>
    </CartContainer>
  );
};

export default CartHomePage;
