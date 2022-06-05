import React from 'react';
import NavBar from './Header';


export const Header = () => {
  return (
    <>
     
      <NavBar>
        <a href='#' className='logo'></a>
        <button className='btn-logo' alt="logo"><a href='#' className='brand-text'>Luxury Furniture</a></button>        
        <input 
          type="text" 
          className="search-input" 
          placeholder='What are you looking for?' 
          disabled
        />
        <button className='btn-cart'></button>
      </NavBar>
    </>
  )
}
