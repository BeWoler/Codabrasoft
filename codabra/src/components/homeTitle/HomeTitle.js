import React from 'react'
import { goToAnchor } from 'react-scrollable-anchor'
import './homeTitle.css'

function HomeTitle() {
  return (
    <div className='home__title'>
      <h2 className='title__h2'>Full-Cycle Mobile & Game Development Company</h2>
      <p className='title__paragraph'>Powered by Technology, Driven by Your Ideas</p>
      <button className='title__btn' onClick={() => { goToAnchor('services') }}>
        <div className='btn-back-hover'></div>
        <span>Getting Started Today</span>
      </button>
    </div>
  )
}

export default HomeTitle;
