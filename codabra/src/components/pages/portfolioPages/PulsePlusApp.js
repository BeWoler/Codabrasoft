import React from 'react'
import { pulsePlus } from '../../portfolioInfo'
import ProjectDetails from '../../projectDetails/ProjectDetails'
import './portfolioPages.css'

function PulsePlusAppApp() {
  return (
    <main className='portfolioPage'>
      <div className='portfolio__header'>
        <h1 className='portfolio__header__h1'>{pulsePlus.title}</h1>
        <div className='portfolio__header__opacity'></div>
      </div>
      <div className='portfolio__content'>
        <div className='content__flex'>
          <h2 className='content__h2'>Summary</h2>
          {pulsePlus.text}
          <a className='img__hover' target='_blank' rel='noreferrer' href={pulsePlus.img}>
            <img className='portfolioImgBig' alt='preview' src={pulsePlus.img} />
          </a>
          <hr />
        </div>
        <ProjectDetails date={pulsePlus.date} href={pulsePlus.href} />
      </div>
    </main>
  )
}

export default PulsePlusAppApp;
