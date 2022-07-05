import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useProductResults } from "../../utils/hooks/useProductsResults";
import { Pagination } from "../Pagination";
import { ProductsList } from "../products/ProductsList";
import { NoProductsFound } from "./NoProductsFound";
import SearchResultsContainer from "./SearchResultsStyle";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState(1);
  const params = searchParams.get("querySearch");

  const { data: productsResults, isLoading: isProductsResultsLoading } =
    useProductResults("product", params, 20, pagination, "");

  return (
    <SearchResultsContainer>
      {!isProductsResultsLoading && productsResults.results_size === 0 ? (
        <NoProductsFound />
      ) : (
        <>
          <ProductsList filteredProducts={productsResults.results} />
          <Pagination
            handlePageChange={(page) => setPagination(page)}
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
