import React from 'react';
import NavBar from './Header';
import smLogo from '../assets/logo-50.png';
import smCart from '../assets/cart-64.png';

export const Header = () => {
  return (
    <>
     
      <NavBar>
      <a href='/' >
        <img className='logo' src={smLogo} alt="React Logo" />
        
      </a> 
      <h3 className='brand-text'>Luxury Furniture</h3>             
        <input 
          type="text" 
          className="search-input" 
          placeholder='King size bed' 
          
        />
        <a href='/' className='cart-logo'><img src={smCart} alt="React Logo" /></a>
      </NavBar>
    </>
  )
}