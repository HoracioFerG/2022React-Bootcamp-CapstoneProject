import React, { useState, useEffect } from "react";

import { BannerItem } from "./BannerItem";
import { useCustomAPI } from "../../utils/hooks/useCustomAPI";

export const Carousel = () => {
  const { data, isLoading } = useCustomAPI("banner");

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index === data.results.length - 1) {
        setBannerIndex(0);
        index = 0;
        return;
      }
      index++;
      setBannerIndex(index);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.results]);

  return (
    <>
      {!isLoading && (
        <BannerItem
          key={data.results[bannerIndex].id}
          title={data.results[bannerIndex].data.title}
          alt={data.results[bannerIndex].data.main_image.alt}
          url={data.results[bannerIndex].data.main_image.url}
        />
      )}
    </>
  );
};
