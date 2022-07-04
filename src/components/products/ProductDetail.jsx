import React, { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Carousel } from "react-responsive-carousel";
import { useProductDetail } from "../../utils/hooks/useProductDetail";
import ProductDetailContainer from "./ProductDetail";
import { formatPrice, setCamelCase } from "../../utils/productsUtils.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addItem } from "../../store/slices/shoppingCartSlice";
import { Notification } from "../../layout/Notification";
import { QuantityButtons } from "../QuantityButtons";
import { useCheckForAvailability } from "../../utils/hooks/useProductHooks";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const notificationContainerRef = useRef(null);
  const [productQuantity, setProductQuantity] = useState(1);

  const [searchParams] = useSearchParams();
  const productIdParams = searchParams.get("productID");
  const { data: productData, isLoading } = useProductDetail(
    "product",
    productIdParams
  );
  const upPrice = useMemo(() => Math.random() * 100, []);

  const productImages = !isLoading && productData.results[0].data.images;
  const productInfo = !isLoading && productData.results[0].data;
  const productTags = !isLoading && productData.results[0].tags;
  const productSpecs = !isLoading && productData.results[0].data.specs;
  const { product: productCart, disable: isDisable } =
    useCheckForAvailability(productIdParams);

  const productStock = productCart?.onStock ?? productInfo?.stock;

  const handleAddToCart = () => {
    notificationContainerRef.current.style.display = "block";
    dispatch(
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
              {productImages.map((element, i) => (
                <div key={i}>
                  <img src={element.image.url} alt={`element${i}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="productInformation">
            <h1>{productInfo.name}</h1>
            <hr />
            <label>SKU: {productInfo.sku}</label>
            <h4 style={{ margin: "1px" }}>
              Category: {setCamelCase(productInfo.category.slug)}
            </h4>

            <div className="tagsContainer">
              {productTags.map((tag) => {
                return <p>{` #${tag}`}</p>;
              })}
            </div>
            <h4>{productStock} on stock</h4>
            <QuantityButtons
              stock={productStock}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
            {productStock === 0 && (
              <label style={[]} htmlFor="">
                {`We run out of this product :(`}
              </label>
            )}
            <div className="priceContainer">
              <h3 className="oldPrice">
                Price before: ${formatPrice(productInfo.price + upPrice)}
              </h3>
              <h2>Price now ${formatPrice(productInfo.price)}</h2>
              <h3 className="savePrice">Save ${formatPrice(upPrice)}!</h3>
            </div>
            <p className="productDescription">
              {productInfo.short_description}
            </p>
            <div className="specsContainer">
              {productSpecs.map((spec) => {
                return (
                  <p className="spec" key={spec.spec_name}>
                    <b className="specName">{spec.spec_name}</b>:{" "}
                    {spec.spec_value}
                  </p>
                );
              })}
            </div>
            <div className="addToCartBtn">
              <button
                disabled={productStock === 0 && "disabled"}
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
