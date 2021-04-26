import React from 'react'
import './modalWindow.css'

export function modalToggle() {
  const modal = document.querySelector('.modal');

  if(modal.classList.toString() === 'modal modal__disactive') {
    modal.classList.replace('modal__disactive', 'modal__active');
  }
  else {
    modal.classList.replace('modal__active', 'modal__disactive');
  }
}

function ModalWindow() {
  return (
    <div className='modal modal__disactive'>
      <div className='modal__content'>
        <span className='modal__close' onClick={modalToggle}></span>
        <h2 className='modal__title__h2'>Let's Talk?</h2>
        <p className='modal__title__paragraph'>Let’s make something awesome together</p>
        <form className='modal__form'>
          <label>Your Name<br/>
            <input type='text' className='modal__form__name' required />
          </label>
          <label>
            Your Email<br/><input type='mail' className='modal__form__mail' required />
          </label>
          <label>
            Your Message (Optional)<br/><input type='text' className='modal__form__textarea' required />
          </label>
          <input type='submit' className='modal__form__submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default ModalWindow;
