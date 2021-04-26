import React from 'react'
import { walking } from '../../portfolioInfo'
import ProjectDetails from '../../projectDetails/ProjectDetails'
import './portfolioPages.css'

function WalkingApp() {
  return (
    <main className='portfolioPage'>
      <div className='portfolio__header'>
        <h1 className='portfolio__header__h1'>{walking.title}</h1>
        <div className='portfolio__header__opacity'></div>
      </div>
      <div className='portfolio__content'>
        <div className='content__flex'>
          <h2 className='content__h2'>Summary</h2>
          {walking.text}
          <a className='img__hover' target='_blank' rel='noreferrer' href={walking.img}>
            <img className='portfolioImgBig' alt='preview' src={walking.img} />
          </a>
          <hr />
        </div>
        <ProjectDetails date={walking.date} href={walking.href} />
      </div>
    </main>
  )
}

export default WalkingApp;
