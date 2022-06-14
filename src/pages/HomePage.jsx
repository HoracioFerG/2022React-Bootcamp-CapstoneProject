
import React, { useState } from 'react'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import { ProductsHomePage } from './ProductsHomePage.jsx'

export const Homepage = () => {
 
  const [view, setView] = useState('home');
  let viewOn = (view==='home') ? <Content componentOn={setView}/> : <ProductsHomePage/>;
  return (
      <>
  
        <Header componentOn={setView}/>
        
        
          {viewOn}
          
        
          
        
        
        
        <Footer/>
      </>
    
  )
}
