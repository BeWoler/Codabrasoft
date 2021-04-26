import React from 'react'
import './main.css'
import Home from '../home/Home'
import Services from '../services/Services'
import About from '../about/About'
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../testimonials/Testimonials'

function Main() {
  return (
    <main className='main'>
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
    </main>
  )
}

export default Main;
