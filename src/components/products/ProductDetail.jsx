import React, { useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Carousel } from "react-responsive-carousel";
import { useProductDetail } from "../../utils/hooks/useProductDetail";
import ProductDetailContainer from "./ProductDetail";
import { formatPrice, setCamelCase } from "../../utils/productsUtils.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addItem } from "../../store/slices/shoppingCartSlice";
import { Notification } from "../../layout/Notification";
import { QuantityButtons } from "../QuantityButtons";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);
  const notificationContainerRef = useRef(null);

  const [searchParams] = useSearchParams();

  const [message, setMessage] = useState("");

  const params = searchParams.get("productID");
  const upPrice = useMemo(() => Math.random() * 100, []);

  const { data: productData, isLoading } = useProductDetail("product", params);

  const handleAddToCart = () => {
    notificationContainerRef.current.style.display = "block";
    const state = dispatch(
      addItem({ product: productData.results[0], quantity: productQuantity })
    );
  };

  return (
    <ProductDetailContainer>
      {!isLoading && (
        <>
          <Notification
            products={productData}
            notificationContainerRef={notificationContainerRef}
            upPrice={upPrice}
            productQuantity={productQuantity}
          />
          <div className="sliderContainer">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
              {productData.results[0].data.images.map((element, i) => (
                <div key={i}>
                  <img src={element.image.url} alt={`element${i}`} />
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
            <h4>{productData.results[0].data.stock} on stock</h4>
            <QuantityButtons
              stock={productData.results[0].data.stock}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
            {message !== "" && (
              <label style={[]} htmlFor="">
                {message}
              </label>
            )}
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
            <div className="specsContainer">
              {productData.results[0].data.specs.map((spec) => {
                return (
                  <p className="spec" key={spec.spec_name}>
                    <b className="specName">{spec.spec_name}</b>:{" "}
                    {spec.spec_value}
                  </p>
                );
              })}
            </div>
            <div className="addToCartBtn">
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
