import React from 'react'
import { mySoundDelve } from '../../portfolioInfo'
import ProjectDetails from '../../projectDetails/ProjectDetails'
import './portfolioPages.css'

function MySoundDelveApp() {
  return (
    <main className='portfolioPage'>
      <div className='portfolio__header'>
        <h1 className='portfolio__header__h1'>{mySoundDelve.title}</h1>
        <div className='portfolio__header__opacity'></div>
      </div>
      <div className='portfolio__content'>
        <div className='content__flex'>
          <h2 className='content__h2'>Summary</h2>
          {mySoundDelve.text}
          <a className='img__hover' target='_blank' rel='noreferrer' href={mySoundDelve.img}>
            <img className='portfolioImgBig' alt='preview' src={mySoundDelve.img} />
          </a>
          <hr />
        </div>
        <ProjectDetails date={mySoundDelve.date} href={mySoundDelve.href} />
      </div>
    </main>
  )
}

export default MySoundDelveApp;
