import React, { useState, useEffect } from "react";
import { BannerItem } from "./BannerItem";
import bannersData from "../../assets/banners";

export const Carousel = () => {

  const { results: banners } = bannersData;
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === banners.length - 1) {
        setBannerIndex(0);
        index = 0;
        return;
      }
      index++;
      setBannerIndex(index);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <>
      <BannerItem
        key={banners[bannerIndex].id}
        title={banners[bannerIndex].data.title}
        alt={banners[bannerIndex].data.main_image.alt}
        url={banners[bannerIndex].data.main_image.url}
      />
    </>
  );
};
