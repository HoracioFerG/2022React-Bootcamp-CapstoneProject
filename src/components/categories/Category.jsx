import React from "react";
import style from "./Category.module.css";

export const Category = ({ data: categoryData }) => {
  return (
    <div className={style.categoryContainer}>
      <img
        className={style.img}
        src={categoryData.main_image.url}
        alt={categoryData.main_image.alt}
      />
      <label className={style.label} htmlFor="categoryLabel">
        {categoryData.name}
      </label>
    </div>
  );
};
