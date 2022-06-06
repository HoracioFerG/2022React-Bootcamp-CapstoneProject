import React from 'react';
import bannersData from '../assets/banners';

export const Content = () => {
  
  return (
    <>
    <div className='featured-banner-slider'>Slider Featured Banners</div>
    
    {bannersData.results.map( (banner)=> {
      return <React.Fragment key={banner.id}>
      
      
      <h5>{banner.data.title}</h5>
      <img src={banner.data.main_image.url} alt={banner.data.main_image.alt} />
    
      </React.Fragment>
      
      }
    )}
    <div className='categories-slider'>Slider Categories</div>
    <div className='featured-products-slider'>Slider Categories</div>
    </>
  )
}
