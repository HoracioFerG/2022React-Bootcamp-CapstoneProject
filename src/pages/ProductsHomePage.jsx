import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductsHomeContainer from "./ProductsHomePage";

import loadingGif from "../assets/loading-gif.gif";
import { useCustomAPI } from "../utils/hooks/useCustomAPI";
import { CategoriesMenu } from "../components/categories/CategoriesMenu.jsx";
import { ProductsList } from "../components/products/ProductsList";
import { Pagination } from "../components/Pagination";

export const ProductsHomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  useEffect(() => {
    if (params?.length > 0 || filters.length > 0) {
      setSearchParams(`products=${filters.toString()}`);
    }

    if (isProductsLoading) {
      return;
    }

    setFilteredProducts(productsResults.results);
  }, [filters, isProductsLoading, pagination]);

  return (
    <ProductsHomeContainer>
      {isCategoriesLoading ? (
        <></>
      ) : (
        <CategoriesMenu
          categories={categoriesData.results}
          setPagination={setPagination}
          setFilters={setFilters}
          filters={filters}
        />
      )}

      <img
        src={loadingGif}
        alt="loadingGif"
        style={{ display: isProductsLoading ? "block" : "none" }}
      />
      <div
        className="productsContainer"
        style={{ display: !isProductsLoading ? "" : "none" }}
      >
        <ProductsList filteredProducts={filteredProducts} />
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          total_pages={productsResults.total_pages}
          next_page={productsResults.next_page}
          page={productsResults.page}
        />
      </div>
    </ProductsHomeContainer>
  );
};

export default ProductsHomePage;
