import React from 'react'
import Nav from '../nav/Nav'
import MobileMenu from '../mobileMenu/MobileMenu'
import logo from '../../img/logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { goToTop } from 'react-scrollable-anchor'

function Header() {
    return (
        <header className='header'>
            <div className='header__box'>
                <div className='header__items'>
                    <Link to='/main' id='logo'><img alt='logo' className='logo' src={logo} onClick={goToTop} /></Link>
                    <Nav />
                </div>
                <div className='burger' onClick={() => {
                    let burger = document.querySelector('.toggle');
                    if (burger.classList.toString() === 'toggle') {
                        burger.classList.add('opened');
                    }
                    else {
                        burger.classList.replace('opened', 'toggle');
                    }
                }}>
                    <span className='toggle'></span>
                </div>
            </div>
        </header>
    )
}

export default Header;