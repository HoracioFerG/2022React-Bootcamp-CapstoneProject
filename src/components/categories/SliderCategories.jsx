import React from "react";
import { categoriesData } from "../../assets/categories";
import { Category } from "./Category";
import style from "./SliderCategories.module.css";

export const SliderCategories = () => {
  const { results: categories } = categoriesData;

  return (
    <div className={style.sliderCategoriesContainer}>
      {categories.map((category) => {
        return <Category key={category.id} data={category.data} />;
      })}
    </div>
  );
};
