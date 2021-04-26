import React from 'react'
import FeedbackForm from '../feedbackForm/FeedbackForm'
import HomeTitle from '../homeTitle/HomeTitle'
import ScrollableAnchor from 'react-scrollable-anchor'
import './home.css'

function Home() {
  return (
    <ScrollableAnchor id={'home'}>
      <div className='home'>
        <div className='background__opacity'></div>
        <div className='home__box'>
          <div className='home__content'>
            <HomeTitle />
            <FeedbackForm />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Home;
