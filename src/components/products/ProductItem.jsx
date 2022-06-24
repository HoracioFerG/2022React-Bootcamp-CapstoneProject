import React from "react";
import PropTypes from "prop-types";
import ProductItemContainer from "./ProductItem.js";
import { getFormattedPrices, setCamelCase } from "../../utils/productsUtils.js";
import bagLogo from "../../assets/bag-icon.png";

export const ProductItem = ({ product }) => {
  const { originalPrice, priceOnDiscount, save } = getFormattedPrices(
    product.data.price
  );
  const category = setCamelCase(product.data.category.slug);

  return (
    <ProductItemContainer>
      <div className="imageContainer">
        <img
          className="product-image"
          alt={product.data.mainimage.alt}
          src={product.data.mainimage.url}
        />
        <img className="bagLogo" src={bagLogo} alt="bagLogo" />
      </div>

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
