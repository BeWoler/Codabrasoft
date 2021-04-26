import React from 'react'
import ModalWindow from '../modalWindow/ModalWindow'
import { modalToggle } from '../modalWindow/ModalWindow'
import ScrollableAnchor from 'react-scrollable-anchor'
import './contactUs.css'

function ContactUs() {
  return (
    <ScrollableAnchor id={'contact'}>
      <section className='contactUs__box'>
        <div className='contactUs__content'>
          <h2 className='contactUs__title__h2'>Have A Project In Mind? Let’s Discuss</h2>
          <button className='contactUs__btn' onClick={modalToggle}>
            <div className='btn-back-hover'></div>
            <span>Get a Quote Today</span>
          </button>
        </div>
        <ModalWindow />
      </section>
    </ScrollableAnchor>
  )
}

export default ContactUs;
