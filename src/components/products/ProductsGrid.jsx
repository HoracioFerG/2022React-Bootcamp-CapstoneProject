import React from 'react';
import {products} from '../../assets/featured';
import FeaturedProductGrid from './PoductGrid';
import { ProductItem } from './ProductItem.jsx';


export const ProductsGrid = () => {
  return (
    <FeaturedProductGrid>
      <div className='featuredProductsTitleContainer'>
        <h3>Check out our featured products!</h3>
        <hr />
      </div>
      
        {
            
            products.map( (product) => {
                return <ProductItem key={product.id} product={product}/>
            })
        }
    </FeaturedProductGrid>
  )
}
