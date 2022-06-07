import React from 'react'
import PropTypes from 'prop-types';
import style from './BannerItem.module.css';

export const BannerItem = ({title, alt, url}) => {
  return (
    <>
    <div className={style.bannerContainer}>
        <img className={style.img} src={url} alt={alt} />
        <label className={style.label} htmlFor="">{title}</label>
    </div>
    </>
  )
}

BannerItem.propTypes = {
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,    
}
