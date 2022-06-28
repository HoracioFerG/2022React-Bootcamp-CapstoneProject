import React, { useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useSearchParams } from "react-router-dom";
import { useProductDetail } from "../../utils/hooks/useProductDetail";
import ProductDetailContainer from "./ProductDetail";
import { formatPrice, setCamelCase } from "../../utils/productsUtils.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const [productQuantity, setProductQuantity] = useState(1);

  const params = searchParams.get("productID");
  const upPrice = useMemo(() => Math.random() * 100, []);

  const { data: productData, isLoading } = useProductDetail("product", params);
  console.log(productData);

  const handleMoreProduct = () => {
    console.log(productData.results[0].data.stock);
    if (productQuantity + 1 <= productData.results[0].data.stock) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleLessProduct = () => {
    if (productQuantity - 1 !== 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <ProductDetailContainer>
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className="sliderContainer">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
              {productData.results[0].data.images.map((element, i) => (
                <div key={i}>
                  <img src={element.image.url} alt={`image${i}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="productInformation">
            <h1>{productData.results[0].data.name}</h1>
            <hr />
            <label>SKU: {productData.results[0].data.sku}</label>
            <h4 style={{ margin: "1px" }}>
              Category:{" "}
              {setCamelCase(productData.results[0].data.category.slug)}
            </h4>
            <div className="tagsContainer">
              {productData.results[0].tags.map((tag) => {
                return <p>{` #${tag}`}</p>;
              })}
            </div>
            <div className="btn-group">
              <button onClick={handleLessProduct}>-</button>
              <button>{productQuantity}</button>
              <button onClick={handleMoreProduct}>+</button>
            </div>
            <div className="priceContainer">
              <h3 className="oldPrice">
                Price before: $
                {formatPrice(productData.results[0].data.price + upPrice)}
              </h3>
              <h2>
                Price now ${formatPrice(productData.results[0].data.price)}
              </h2>
              <h3 className="savePrice">Save ${formatPrice(upPrice)}!</h3>
            </div>
            <p className="productDescription">
              {productData.results[0].data.short_description}
            </p>
            {productData.results[0].data.specs.map((spec) => {
              return (
                <p>
                  <b>{spec.spec_name}</b>: {spec.spec_value}
                </p>
              );
            })}
            <div className="addToCartBtn">
              <button>Add to cart</button>
            </div>
          </div>
        </>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
