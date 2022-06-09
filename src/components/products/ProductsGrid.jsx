import React from 'react';
import {products} from '../../assets/featured';
import { ProductItem } from './ProductItem';


export const ProductsGrid = () => {
  return (
    <>
        {
            products.map( (product) => {
                return <ProductItem key={product.id} product={product}/>
            })
        }
    </>
  )
}
