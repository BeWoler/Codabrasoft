import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import ContactUs from '../contactUs/ContactUs'
import TermsOfUse from '../pages/termsOfUse/TermsOfUse'
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy'
import MySoundDelveApp from '../pages/portfolioPages/MySoundDelveApp'
import WalkingApp from '../pages/portfolioPages/WalkingApp'
import PulsePlusApp from '../pages/portfolioPages/PulsePlusApp'
import FlowerPlantApp from '../pages/portfolioPages/FlowerPlantApp'
import WeightLossApp from '../pages/portfolioPages/WeightLossApp'
import Footer from '../footer/Footer'

import {
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import './app.css'


function App(props) {

  const { history } = props

  return (
    <div className='wrapper'>
      <Header />
      <Switch>
        <Route history={history} exact path='/main' component={Main} />
        <Route history={history} path='/portfolio/my-sound-delve' component={MySoundDelveApp} />
        <Route history={history} path='/portfolio/walking-&-pedometer-by-depfit' component={WalkingApp} />
        <Route history={history} path='/portfolio/pulse-plus:-heart-rate-monitor' component={PulsePlusApp} />
        <Route history={history} path='/portfolio/flower-plant-identification' component={FlowerPlantApp} />
        <Route history={history} path='/portfolio/weight-loss-running-by-depfit' component={WeightLossApp} />
        <Route history={history} path='/home/terms-of-use' component={TermsOfUse} />
        <Route history={history} path='/home/privacy-policy' component={PrivacyPolicy} />
        <Redirect from='/' to='/main' />
      </Switch>
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App;
