import React from 'react';
import { Carousel } from './carousel/Carousel';
import { SliderCategories } from './categories/SliderCategories';


export const Content = () => {
  
  return (
    <>
    
    <Carousel/>
    <SliderCategories/>
    <div className='featured-products-slider'>Slider Categories</div>
    </>
  )
}
