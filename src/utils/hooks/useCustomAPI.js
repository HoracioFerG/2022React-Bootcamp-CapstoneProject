import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useCustomAPI(type,queryCategories, queryTags = [], pageSize=5) {
  
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
        const queryParams = {
          tags: (queryTags.length>0) ? 
          `[at(document.tags,[${'"' + queryTags.join('","') + '"'}])]` 
          : '',  
          categories: (queryCategories.length>0) ? 
          `[any(my.product.category,[${'"' + queryCategories.join('","') + '"'}])]` 
          : '',          
        }
        // console.log(`${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        //   `[[at(document.type, "${type}")]${queryParams.tags}]]`
        // )}&lang=en-us&pageSize=${pageSize}`)
        const response = await fetch(
          
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "${type}")]${queryParams.tags}${queryParams.categories}]`
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
  }, [apiRef, isApiMetadataLoading,type]);

  return results;
}
