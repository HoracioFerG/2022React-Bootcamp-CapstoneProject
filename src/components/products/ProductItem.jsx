import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductItemContainer from "./ProductItem.js";
import { getFormattedPrices, setCamelCase } from "../../utils/productsUtils.js";
import {
  addItem,
  removeItem,
  reset,
} from "../../store/slices/shoppingCartSlice";
import bagLogo from "../../assets/bag-icon.png";

export const ProductItem = ({ product, description }) => {
  const navigate = useNavigate();
  const { originalPrice, priceOnDiscount, save } = getFormattedPrices(
    product.data.price
  );
  const category = setCamelCase(product.data.category.slug);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("initial state ", cart);

  const handleAddToCart = () => {
    dispatch(addItem);
    console.log(cart);
  };

  return (
    <ProductItemContainer>
      <div className="imageContainer">
        <img
          className="product-image"
          alt={product.data.mainimage.alt}
          src={product.data.mainimage.url}
          onClick={() => navigate(`/products/product?productID=${product.id}`)}
        />
        <img
          className="bagLogo"
          src={bagLogo}
          alt="bagLogo"
          onClick={handleAddToCart}
        />
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
