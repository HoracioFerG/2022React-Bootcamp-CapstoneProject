import React, { useState, useEffect } from 'react';
import { BannerItem } from './BannerItem';
import bannersData from '../../assets/banners';




export const Carousel = () => {

  const { results: banners } = bannersData;

  const [banner, setBanner] = useState({
    title: banners[0].data.title,
    url: banners[0].data.main_image.url,
    alt: banners[0].data.main_image.alt,
  });
  const [bannerIndex, setBannerIndex] = useState(0);

  const handleOnclick = () => {
    if (bannerIndex + 1 === banners.length) {
      setBannerIndex(0);
    } else {
      setBannerIndex(bannerIndex + 1);
    }

  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBanner(
  //       {
  //         id: banners[bannerIndex].id,
  //         title: banners[bannerIndex].data.title,
  //         url: banners[bannerIndex].data.main_image.url,
  //         alt: banners[bannerIndex].data.main_image.alt,
  //       }
  //     );
  //     if (bannerIndex === banners.length) {
  //       setBannerIndex(0);
        
  //     } else {
        
  //       setBannerIndex(bannerIndex + 1);
  //     }
  //     console.log(first)



  //   }, 3000);
  // }, [bannerIndex])


  // useEffect(() => {
  //   setBanner(
  //     {
  //       id: banners[bannerIndex].id,
  //       title: banners[bannerIndex].data.title,
  //       url: banners[bannerIndex].data.main_image.url,
  //       alt: banners[bannerIndex].data.main_image.alt,
  //     }
  //   );
  //    console.log(bannerIndex);

  // }, [bannerIndex]);

  // setInterval(() => {
  //   let index = 0;
  //   // setBanner(
  //   //   {
  //   //     id: banners[index].id,
  //   //     title: banners[index].data.title,
  //   //     url: banners[index].data.main_image.url,
  //   //     alt: banners[index].data.main_image.alt,
  //   //   }
  //   // );
  //   if(index===banners.length){
  //     setBannerIndex(0);
  //     index=0;
  //   }else{
  //     index++;
  //     setBannerIndex(index);    
  //   }
  //   console.log(index);
  // }, 3000);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner(
        {
          id: banners[bannerIndex].id,
          title: banners[bannerIndex].data.title,
          url: banners[bannerIndex].data.main_image.url,
          alt: banners[bannerIndex].data.main_image.alt,
        }
      );
      if (bannerIndex === banners.length) {
        setBannerIndex(0);
        
      } else {
        
        setBannerIndex(bannerIndex + 1);
      }
      console.log(bannerIndex)



    }, 3000);
  }, [bannerIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    
    <>
      <button onClick={handleOnclick}>+1</button>
      <BannerItem key={banner.id} title={banner.title} alt={banner.alt} url={banner.url} />
    </>


  )
}
