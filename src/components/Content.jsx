import React from "react";
import { Carousel } from "./carousel/Carousel";
import { SliderCategories } from "./categories/SliderCategories";
import { ProductsGrid } from "./products/ProductsGrid";

export const Content = ({ componentOn }) => {
  return (
    <>
      <Carousel />
      <SliderCategories />
      <ProductsGrid componentOn={componentOn} />
    </>
  );
};
