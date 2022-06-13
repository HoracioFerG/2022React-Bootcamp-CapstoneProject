import React, { useEffect, useState } from 'react';
import ProductsHomeContainer from './ProductsHomePage';
import { categoriesData } from '../assets/categories';
import {products} from '../assets/featured2';
import { ProductItem } from '../components/products/ProductItem.jsx';



export const ProductsHomePage = () => {
  
  const {results: categories} = categoriesData; 
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState([]);
  

  const handleOnCategoryClick = (e) => {
    const isClicked = e.target;
    
    if(!isClicked.className){
      isClicked.className='clicked';
      setFilters(filters => [...filters,isClicked.id])
      
    }else{
      isClicked.className='';
      setFilters( filters => filters.filter( (val,i) =>  val !== isClicked.id));
    }    
      
  }

  

  useEffect(() => {
    
    if(filters.length>0){
      
      const newProducts = products.filter( (product) =>{
        const existingProduct = filters.includes(product.data.category.id);
        
        if(existingProduct){
          return product;
        }else{
          return;
        }
      });
      setFilteredProducts(newProducts);
    }else{
      setFilteredProducts(products)
    }
    
    
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
      <div className='productsGrid'>
      {
            
            filteredProducts.map( (product) => {
                return <ProductItem key={product.id} product={product}/>
            })
        }
      </div>
    </ProductsHomeContainer>
  )
}
