import React from "react";
import { useSearchParams } from "react-router-dom";
import { useProductResults } from "../../utils/hooks/useProductsResults";
import { ProductItem } from "../products/ProductItem.jsx";
import { NoProductsFound } from "./NoProductsFound";
import SearchResultsContainer from "./SearchResults";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("querySearch");
  const { data: productsResults, isLoading: isProductsResultsLoading } =
    useProductResults("product", params);

  console.log(productsResults);
  return (
    <SearchResultsContainer>
      {isProductsResultsLoading ? (
        <></>
      ) : productsResults.results_size === 0 ? (
        <NoProductsFound />
      ) : (
        productsResults.results.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;
