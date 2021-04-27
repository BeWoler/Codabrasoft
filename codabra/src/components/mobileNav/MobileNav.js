import React from 'react'
import './mobileNav.css'

function MobileNav() {

  const navMenu = ['Home', 'Services', 'About', 'Works', 'Testimonials', 'Contact'];

  let navigation = navMenu.map(arr => {
    let idKey = arr;
    return <li key={idKey} className='mobileNav__ul__items'>
      <a href={'main#' + idKey.toLowerCase()} onClick={() => {
        const mobileMenuBox = document.querySelector('.mobile__menu__box');
        const burger = document.querySelector('.toggle');
        burger.classList.replace('opened', 'toggle');
        mobileMenuBox.classList.replace('active', 'disactive');
      }}>{arr}</a>
    </li>
  });

  return (
    <nav className='mobileNav'>
      <ul className='mobileNav__ul'>
        {navigation}
      </ul>
    </nav>
  )
}

export default MobileNav;
