import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Category.module.css";

export const Category = ({ data: categoryData, idCategory }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products?products=${idCategory}`)}
      className={style.categoryContainer}
    >
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
