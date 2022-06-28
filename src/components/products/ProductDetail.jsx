import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useSearchParams } from "react-router-dom";
import { useProductDetail } from "../../utils/hooks/useProductDetail";
import ProductDetailContainer from "./ProductDetail";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const params = searchParams.get("productID");

  const { data: productData, isLoading } = useProductDetail("product", params);
  console.log(productData);

  const handleProductQuantity = (operation) => {
    switch (operation) {
      case "increment":
        if (productQuantity + 1 <= productData.results[0].data.stock) {
          setProductQuantity((productQuantity) => productQuantity + 1);
        }
        break;
      case "decrement":
        if (productQuantity - 1 < 1) {
          setProductQuantity((productQuantity) => productQuantity + 1);
        }
        break;
      default:
        break;
    }
    if (productQuantity - 1 < 1) {
      setProductQuantity((productQuantity) => productQuantity + 1);
    }
  };

  return (
    <ProductDetailContainer>
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className="sliderContainer">
            <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
              {productData.results[0].data.images.map((element, i) => (
                <div key={i}>
                  <img
                    src={element.image.url}
                    style={{ maxHeight: "500px" }}
                    alt={`image${i}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="productInformation">
            <h3>{productData.results[0].data.name}</h3>
            <hr />
            <h4>SKU: {productData.results[0].data.sku}</h4>
            <h5>Category: {productData.results[0].data.category.slug}</h5>
            <div>
              <button onClick={handleProductQuantity}>-</button>
              <p>{productQuantity}</p>
              <button onClick={handleProductQuantity}>+</button>
            </div>
          </div>
        </>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
