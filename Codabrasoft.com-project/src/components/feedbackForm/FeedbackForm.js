import React from 'react'
import './feedbackForm.css'

function FeedbackForm() {
  return (
    <div className='home__form__box'>
      <h5 className='form__box__h5'>Get Free Estimation</h5>
      <p className='form__box__paragraph'>Leave us your inquiry, and our specialists will get in touch within 1 business day!</p>
      <form className='form'>
        <input type='text' className='home__form__name' required placeholder='Your Name' />
        <input type='mail' className='home__form__mail' required placeholder='Your Email' />
        <input type='text' className='home__form__message' required placeholder='Your Message' />
        <input type='submit' className='home__form__submit' value='Submit Now' />
      </form>
    </div>
  )
}

export default FeedbackForm
