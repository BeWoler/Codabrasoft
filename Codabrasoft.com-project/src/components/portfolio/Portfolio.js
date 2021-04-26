import React from 'react'
import soundDelveImg from '../../img/SoundDelveApp.jpg'
import walkingImg from '../../img/WalkingApp.jpg'
import heartImg from '../../img/HeartApp.jpg'
import plantsImg from '../../img/PlantsApp.jpg'
import RunningImg from '../../img/RunningApp.jpg'
import PortfolioGridImg from '../portfolioGridImg/PortfolioGridImg'
import ScrollableAnchor from 'react-scrollable-anchor'
import './portfolio.css'

let imgAppArr = [
  soundDelveImg,
  walkingImg,
  heartImg,
  plantsImg,
  RunningImg
];

let titleArr = [
  'My Sound Delve',
  'Walking & Pedometer by Depfit',
  'Pulse Plus: Heart Rate Monitor',
  'Flower Plant Identification',
  'Weight Loss Running by Depfit'
];

function Portfolio() {
  return (
    <ScrollableAnchor id={'works'}>
      <section className='portfolio__box'>
        <h2 className='portfolio__h2'>Our Portfolio</h2>
        <div className='portfolio__grid'>
          <div className='portfolio__grid__template'>
            <PortfolioGridImg img={imgAppArr[0]} title={titleArr[0]} />
            <PortfolioGridImg img={imgAppArr[1]} title={titleArr[1]} />
            <PortfolioGridImg img={imgAppArr[2]} title={titleArr[2]} />
            <PortfolioGridImg img={imgAppArr[3]} title={titleArr[3]} />
            <PortfolioGridImg img={imgAppArr[4]} title={titleArr[4]} />
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default Portfolio;
