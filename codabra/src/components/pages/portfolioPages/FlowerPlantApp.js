import React from 'react'
import { flower } from '../../portfolioInfo'
import ProjectDetails from '../../projectDetails/ProjectDetails'
import './portfolioPages.css'

function FlowerPlantAppApp() {
  return (
    <main className='portfolioPage'>
      <div className='portfolio__header'>
        <h1 className='portfolio__header__h1'>{flower.title}</h1>
        <div className='portfolio__header__opacity'></div>
      </div>
      <div className='portfolio__content'>
        <div className='content__flex'>
          <h2 className='content__h2'>Summary</h2>
          {flower.text}
          <a className='img__hover' target='_blank' rel='noreferrer' href={flower.img}>
            <img className='portfolioImgBig' alt='preview' src={flower.img} />
          </a>
          <hr />
        </div>
        <ProjectDetails date={flower.date} href={flower.href} />
      </div>
    </main>
  )
}

export default FlowerPlantAppApp;
