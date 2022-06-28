import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductResults } from "../../utils/hooks/useProductsResults";
import { Pagination } from "../Pagination";
import { ProductsList } from "../products/ProductsList";
import { NoProductsFound } from "./NoProductsFound";
import SearchResultsContainer from "./SearchResults";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState({ page: 1, nextPage: "" });
  const params = searchParams.get("querySearch");
  const { data: productsResults, isLoading: isProductsResultsLoading } =
    useProductResults(
      "product",
      params,
      20,
      pagination.page,
      pagination.nextPage
    );

  return (
    <SearchResultsContainer>
      {isProductsResultsLoading ? (
        <></>
      ) : productsResults.results_size === 0 ? (
        <NoProductsFound />
      ) : (
        <>
          <ProductsList filteredProducts={productsResults.results} />
          <Pagination
            pagination={pagination}
            setPagination={setPagination}
            total_pages={productsResults.total_pages}
            next_page={productsResults.next_page}
            page={productsResults.page}
          />
        </>
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;
