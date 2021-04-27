import React from 'react'
import MobileNav from '../mobileNav/MobileNav'
import './mobileMenu.css'

function MobileMenu() {
  return (
    <div className='mobile__menu__box disactive'>
      <div className='mobile__menu__back'></div>
      <div className='mobile__menu__front disactive__menu'>
        <MobileNav />
      </div>
    </div>
  )
}

export default MobileMenu;
