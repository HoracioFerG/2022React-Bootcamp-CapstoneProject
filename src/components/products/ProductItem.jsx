import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProductItemContainer from "./ProductItem.js";
import { formatPrice, setCamelCase } from "../../utils/productsUtils.js";
import { addItem } from "../../store/slices/shoppingCartSlice";
import bagLogo from "../../assets/bag-icon.png";

export const ProductItem = ({ product, description }) => {
  const navigate = useNavigate();
  const upPrice = useMemo(() => Math.random() * 100, []);
  const category = setCamelCase(product.data.category.slug);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ product: product, quantity: 1 }));
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
      <h6 className="price">${formatPrice(product.data.price + upPrice)}</h6>
      <h6 className="priceDiscount">${product.data.price}</h6>
      <h6 className="discount">Save ${formatPrice(upPrice)}</h6>
    </ProductItemContainer>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  description: PropTypes.string,
};
