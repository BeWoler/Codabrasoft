import React from 'react'
import { weightLoss } from '../../portfolioInfo'
import ProjectDetails from '../../projectDetails/ProjectDetails'
import './portfolioPages.css'

function WeightLossAppApp() {
  return (
    <main className='portfolioPage'>
      <div className='portfolio__header'>
        <h1 className='portfolio__header__h1'>{weightLoss.title}</h1>
        <div className='portfolio__header__opacity'></div>
      </div>
      <div className='portfolio__content'>
        <div className='content__flex'>
          <h2 className='content__h2'>Summary</h2>
          {weightLoss.text}
          <a className='img__hover' target='_blank' rel='noreferrer' href={weightLoss.img}>
            <img className='portfolioImgBig' alt='preview' src={weightLoss.img} />
          </a>
          <hr />
        </div>
        <ProjectDetails date={weightLoss.date} href={weightLoss.href} />
      </div>
    </main>
  )
}

export default WeightLossAppApp;
