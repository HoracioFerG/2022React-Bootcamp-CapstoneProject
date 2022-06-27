import React from "react";
import { useSearchParams } from "react-router-dom";
import { useProductDetail } from "../../utils/hooks/useProductDetail";
import ProductDetailContainer from "./ProductDetail";

export const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("productID");
  const { data, isLoading } = useProductDetail("product", params);

  return (
    <ProductDetailContainer>
      {isLoading ? <></> : <p>data loaded</p>}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
