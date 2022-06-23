import React from "react";

import { useCustomAPI } from "../../utils/hooks/useCustomAPI";
import { Category } from "./Category";
import style from "./SliderCategories.module.css";

export const SliderCategories = () => {
  const { data, isLoading } = useCustomAPI("category");

  return (
    <div className={style.sliderCategoriesContainer}>
      {isLoading ? (
        <></>
      ) : (
        data.results.map((category) => {
          return (
            <Category
              key={category.id}
              data={category.data}
              idCategory={category.id}
            />
          );
        })
      )}
    </div>
  );
};
