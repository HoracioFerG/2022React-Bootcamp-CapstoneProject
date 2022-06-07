import React from 'react';
import {categoriesData } from '../../assets/categories';
import { Category } from './Category';

export const SliderCategories = () => {

    const {results: categories} = categoriesData;
    
  return (
    < >
        {
                categories.map( (category) => {
                    
                    return <Category key={category.id} data={category.data}/>
            })
        }
    </>
  )
}
