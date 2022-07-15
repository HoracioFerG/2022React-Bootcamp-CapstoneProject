import React from "react";
import { useNavigate } from "react-router-dom";

import { useCustomAPI } from "../../utils/hooks/useCustomAPI";
import FeaturedProductGrid from "./PoductGridStyle";
import { ProductItem } from "./ProductItem";

export const ProductsGrid = () => {
  const { isLoading, data: products } = useCustomAPI(
    "product",
    "",
    ["Featured"],
    16
  );

  const navigate = useNavigate();
  return (
    <FeaturedProductGrid>
      <div className="featuredProductsTitleContainer">
        <h3>Check out our featured products!</h3>
        <hr />
      </div>

      {isLoading ? (
        <></>
      ) : (
        products.results.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })
      )}
      <button onClick={() => navigate("/products")}>
        <h4>Wanna see more? Click here!</h4>
      </button>
    </FeaturedProductGrid>
  );
};
