import React from 'react';
import PropTypes from 'prop-types';

export const ProductItem = ({product}) => {
  return (
    <div className='product'>
        <image href={product.data.mainimage.url}/>
        <h6>{product.data.name}</h6>
    </div>
  )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

