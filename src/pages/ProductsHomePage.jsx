import React, { useEffect, useState } from 'react';
import ProductsHomeContainer from './ProductsHomePage';
import { categoriesData } from '../assets/categories';
import {products} from '../assets/featured2';
import { ProductItem } from '../components/products/ProductItem.jsx';
import loadingGif from '../assets/loading-gif.gif';



export const ProductsHomePage = () => {
  
  const {results: categories} = categoriesData; 
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const handleOnCategoryClick = (e) => {
    const isClicked = e.target;
    setLoading(!loading);
    setTimeout(() => {
      
      if(!isClicked.className){
        isClicked.className='clicked';
        setFilters(filters => [...filters,isClicked.id])
        
      }else{
        isClicked.className='';
        setFilters( filters => filters.filter( (val,i) =>  val !== isClicked.id));
      }    
    }, 1500);
      
  }

  

  useEffect(() => {
    
    if(filters.length>0){
      
      const newProducts = products.filter( (product) =>{
        const existingProduct = filters.includes(product.data.category.id);
        
        if(existingProduct){
          return product;
        }else{
          return null;
        }
      });
      setFilteredProducts(newProducts);
    }else{
      setFilteredProducts(products)
    }
    setTimeout(() => {
      
      setLoading(!loading);
    }, 1500);
    
    
  }, [filters])
  

  return (
    
    <ProductsHomeContainer>
      <div className='categoriesMenu'>
        
        {
          categories.map((category) => {
             return <p 
                      onClick={handleOnCategoryClick} 
                      key={category.id} 
                      id={category.id}
                    >
                      {category.data.name}
                    </p>
            
          })
        }
        
      </div>
      
      <img src={loadingGif} alt="loadingGif"  style={{display: (loading) ? 'block': 'none'}} />
      <div className='productsContainer' style={{display: (!loading) ? '': 'none'}}>
      
      <div className='productsGrid' >
      {
            

            filteredProducts.map( (product) => {
                return <ProductItem key={product.id} product={product}/>
            })
            
            
        }
        
      </div>
      <div className='paginationContainer'>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
      </div>
    
    </ProductsHomeContainer>
    
    
    
    
  )
}
