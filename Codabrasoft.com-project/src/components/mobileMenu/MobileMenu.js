import React from 'react'
import Nav from '../nav/Nav'
import './mobileMenu.css'

function MobileMenu() {
  return (
    <div className='mobile__menu__box disactive'>
      <div className='mobile__menu'>
        <Nav />
      </div>
    </div>
  )
}

export default MobileMenu;
