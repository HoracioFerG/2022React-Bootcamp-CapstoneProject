import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductResults(type, searchTerm, pageSize = 20) {
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
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "${type}")][fulltext(document, "${searchTerm}")]]`
          )}&lang=en-us&pageSize=${pageSize}`,
          {
            signal: controller.signal,
          }
        );
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
  }, [apiRef, isApiMetadataLoading]);

  return results;
}
