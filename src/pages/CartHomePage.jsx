import React from "react";
import { useSelector } from "react-redux";

import { CartCheckout } from "../components/cart/CartCheckout";
import CartContainer from "../components/cart/CartContainer";
import { CartItem } from "../components/cart/CartItem";

export const CartHomePage = () => {
  const { products, items } = useSelector((state) => state.cart);
  console.log(products);
  return (
    <CartContainer>
      <h1>Review your cart</h1>
      <hr />
      <div className="container">
        <div className="itemsContainer">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.idProduct} product={product} />
            ))
          ) : (
            <>
              <h3>Your cart is empty.</h3>
            </>
          )}
        </div>
        <div className="checkoutContainer">
          <CartCheckout items={items} products={products} />
        </div>
      </div>
    </CartContainer>
  );
};

export default CartHomePage;
