import React from "react";
import PropTypes from "prop-types";
import ProductItemContainer from "./ProductItem.js";
import { getFormattedPrices, setCamelCase } from "../../utils/productsUtils.js";
import bagLogo from "../../assets/bag-icon.png";
import { useNavigate } from "react-router-dom";

export const ProductItem = ({ product, description }) => {
  const navigate = useNavigate();
  const { originalPrice, priceOnDiscount, save } = getFormattedPrices(
    product.data.price
  );
  const category = setCamelCase(product.data.category.slug);

  return (
    <ProductItemContainer
      onClick={() => navigate(`/products/product?productID=${product.id}`)}
    >
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
      {description && <p className="text">{description}</p>}
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
