import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductsHomeContainer from "./ProductsHomePage";
import { ProductItem } from "../components/products/ProductItem.jsx";
import loadingGif from "../assets/loading-gif.gif";
import { useCustomAPI } from "../utils/hooks/useCustomAPI";

export const ProductsHomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriesContainerRef = useRef(null);
  const params = searchParams.get("products");

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState(params ? params.split(",") : []);
  const [pagination, setPagination] = useState({ page: 1, nextPage: "" });
  const { data: productsResults, isLoading: isProductsLoading } = useCustomAPI(
    "product",
    filters,
    [],
    12,
    pagination.page,
    pagination.nextPage
  );

  const { data: categoriesData, isLoading: isCategoriesLoading } =
    useCustomAPI("category");

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

  const getPagination = (maxPage) => {
    const options = [];
    for (let i = 0; i < maxPage; i++) {
      options.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      );
    }
    return options;
  };

  useEffect(() => {
    if (params?.length > 0 || filters.length > 0) {
      setSearchParams(`products=${filters.toString()}`);
      applyFilterStyle("clicked");
    }

    if (isProductsLoading) {
      return;
    }

    setFilteredProducts(productsResults.results);
  }, [filters, isProductsLoading, pagination]);

  return (
    <ProductsHomeContainer>
      <div className="categoriesMenu" ref={categoriesContainerRef}>
        <h4 style={{ textDecoration: "underline" }}>Categories</h4>
        {isCategoriesLoading ? (
          <></>
        ) : (
          categoriesData.results.map((category) => {
            return (
              <p
                onClick={handleOnCategoryClick}
                key={category.id}
                id={category.id}
              >
                {category.data.name}
              </p>
            );
          })
        )}
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

      <img
        src={loadingGif}
        alt="loadingGif"
        style={{ display: isProductsLoading ? "block" : "none" }}
      />
      <div
        className="productsContainer"
        style={{ display: !isProductsLoading ? "" : "none" }}
      >
        <div className="productsGrid">
          {isProductsLoading ? (
            <></>
          ) : (
            filteredProducts.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })
          )}
        </div>
        <div className="paginationContainer">
          <select
            name="paginationSelec"
            id="paginationSelect"
            value={pagination.page}
            onChange={(e, pagination) =>
              setPagination({ ...pagination, page: e.target.value })
            }
          >
            {isProductsLoading ? (
              <></>
            ) : (
              getPagination(productsResults.total_pages).map((opt) => opt)
            )}
          </select>
          {productsResults.next_page && (
            <p
              className="nextButton"
              onClick={(pagination) =>
                setPagination({
                  page: productsResults.page + 1,
                  nextPage: productsResults.next_page,
                })
              }
            >
              Next page
            </p>
          )}
        </div>
      </div>
    </ProductsHomeContainer>
  );
};

export default ProductsHomePage;
