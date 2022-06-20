import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../assets/featured";
import FeaturedProductGrid from "./PoductGrid";
import { ProductItem } from "./ProductItem.jsx";

export const ProductsGrid = () => {
  const navigate = useNavigate();
  return (
    <FeaturedProductGrid>
      <div className="featuredProductsTitleContainer">
        <h3>Check out our featured products!</h3>
        <hr />
      </div>

      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
      <button onClick={() => navigate("/products")}>
        <h4>Wanna see more? Click here!</h4>
      </button>
    </FeaturedProductGrid>
  );
};
