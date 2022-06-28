import React, { useRef } from "react";
import CategoriesMenuContainer from "./CategoriesMenu";

export const CategoriesMenu = ({
  categories,
  setPagination,
  setFilters,
  filters,
}) => {
  const categoriesContainerRef = useRef(null);
  const handleOnCategoryClick = (e) => {
    const isClicked = e.target;
    setPagination({ page: 1, nextPage: "" });
    if (!isClicked.className) {
      isClicked.className = "clicked";
      setFilters((filters) => [...filters, isClicked.id]);
    } else {
      isClicked.className = "";
      setFilters((filters) => filters.filter((val, i) => val !== isClicked.id));
    }
  };

  const applyFilterStyle = (isOnOff) => {
    const childs = Object.entries(categoriesContainerRef.current.childNodes);
    for (let i = 0; i < childs.length; i++) {
      const element = childs[i];
      if (filters.includes(element[1].id)) {
        element[1].className = isOnOff;
      }
    }
  };
  return (
    <CategoriesMenuContainer ref={categoriesContainerRef}>
      <div className="categoriesMenu">
        <h4 style={{ textDecoration: "underline" }}>Categories</h4>
        {categories.map((category) => {
          return (
            <p
              onClick={handleOnCategoryClick}
              key={category.id}
              id={category.id}
            >
              {category.data.name}
            </p>
          );
        })}
        <hr />
        <p
          onClick={() => {
            setFilters([]);
            applyFilterStyle("");
            setPagination({ page: 1, nextPage: "" });
          }}
        >
          Clear filters
        </p>
      </div>
    </CategoriesMenuContainer>
  );
};