import React from 'react'
import PropTypes from 'prop-types';

export const BannerItem = ({title, alt, url}) => {
  return (
    <div>
        <img src={url} alt={alt} />
        <label htmlFor="bannerLabel">{title}</label>
    </div>
  )
}

BannerItem.propTypes = {
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,    
}
