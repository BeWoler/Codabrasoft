import React from 'react'
import { Link } from 'react-router-dom'
import { goToTop } from 'react-scrollable-anchor'
import './portfolioGridImg.css'

function PortfolioGridImg(props) {
  return (
    <div className='grid__card__box'>
      <Link to={'/portfolio/' + props.title.toLowerCase().split(' ').join('-')} onClick={goToTop}>
        <div className='card__back__img'>
          <img alt='app' src={props.img} />
        </div>
        <div className='opacity__box'></div>
        <h3 className='portfolio__card__title__h3'>{props.title}</h3>
        <p className='card__category'>App / Design</p>
      </Link>
    </div>
  )
}

export default PortfolioGridImg;
