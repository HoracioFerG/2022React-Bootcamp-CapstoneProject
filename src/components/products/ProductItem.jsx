import React from 'react';
import PropTypes from 'prop-types';
import ProductItemContainer from './ProductItem';

export const ProductItem = ({product}) => {

  const setPrice = (price) => {
    const randomUpPrice = price + Math.random() * 500;
    return <>
      <h6 className='price'>
        ${
          randomUpPrice
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            
        }
      </h6>
      <h6 className='priceDiscount'>
        ${
          price.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
      </h6>
      <h6 className='discount'>Save ${(randomUpPrice-price).toFixed(2)}</h6>
    </>
  }

  return (
    <ProductItemContainer>
      <img alt={product.data.mainimage.alt} src={product.data.mainimage.url} />
      <hr className='leftLine'/>
      <h5 className='productName'>{product.data.name}</h5>
      <small className='productCategory'>
        {
          (product.data.category.slug)
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function(str){ 
              return str.toUpperCase(); 
              }
          )
        }
        </small>
        <hr className='rightLine'/>
        {setPrice(product.data.price)}
    </ProductItemContainer>
    
  )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

