import React from "react";
import PropTypes from "prop-types";
import ProductItemContainer from "./ProductItem.js";
import { getFormattedPrices, setCamelCase } from "../../utils/productsUtils.js";

export const ProductItem = ({ product }) => {
  const { originalPrice, priceOnDiscount, save } = getFormattedPrices(
    product.data.price
  );
  const category = setCamelCase(product.data.category.slug);

  return (
    <ProductItemContainer>
      <img alt={product.data.mainimage.alt} src={product.data.mainimage.url} />

      <h5 className="productName">{product.data.name}</h5>
      <small className="productCategory">{category}</small>
      <hr className="rightLine" />
      <h6 className="price">${originalPrice}</h6>
      <h6 className="priceDiscount">${priceOnDiscount}</h6>
      <h6 className="discount">Save ${save}</h6>
    </ProductItemContainer>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};
