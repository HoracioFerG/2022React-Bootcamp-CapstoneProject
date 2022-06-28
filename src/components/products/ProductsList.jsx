import React from "react";
import { ProductItem } from "./ProductItem.jsx";

export const ProductsList = ({ filteredProducts }) => {
  return (
    <div className="productsGrid">
      {filteredProducts.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            description={product.data.short_description}
          />
        );
      })}
    </div>
  );
};
