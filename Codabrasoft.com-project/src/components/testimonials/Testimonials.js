import React from 'react'
import TestimonialsSlider from '../testimonialsSlider/TestimonialsSlider';
import ScrollableAnchor from 'react-scrollable-anchor'
import './testimonials.css'

function Testimonials() {
  return (
    <ScrollableAnchor id={'testimonials'}>
      <section className='testimonials__box'>
        <div className='testimonials__content'>
          <h2 className='testimonials__title__h2'>Our Customers' Succes Stories</h2>
          <TestimonialsSlider />
        </div>
        <div className='testimonials__opacity'></div>
      </section>
    </ScrollableAnchor>
  )
}

export default Testimonials;
