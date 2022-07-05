import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductResults(
  type,
  searchTerm,
  pageSize = 20,
  page = 1,
  nextPage = ""
) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [results, setResults] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getAPIResults() {
      try {
        setResults({ data: {}, isLoading: true });
        const url =
          nextPage.length > 0
            ? nextPage
            : `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                `[[at(document.type, "${type}")][fulltext(document, "${searchTerm}")]]`
              )}&lang=en-us&pageSize=${pageSize}&page=${page}`;
        console.log("url");
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        setResults({ data, isLoading: false });
      } catch (err) {
        setResults({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getAPIResults();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, page, searchTerm]);

  return results;
}
