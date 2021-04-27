import React from 'react'
import Nav from '../nav/Nav'
import MobileMenu from '../mobileMenu/MobileMenu'
import logo from '../../img/logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { goToTop } from 'react-scrollable-anchor'

function Header() {
    return (
        <>
            <header className='header'>
                <div className='header__box'>
                    <div className='header__items'>
                        <Link to='/main' id='logo'><img alt='logo' className='logo' src={logo} onClick={goToTop} /></Link>
                        <Nav />
                    </div>
                    <div className='burger' onClick={() => {
                        const burger = document.querySelector('.toggle');
                        const mobileMenuBox = document.querySelector('.mobile__menu__box');
                        const mobileNav = document.querySelector('.mobile__menu__front');

                        if (burger.classList.toString() === 'toggle') {
                            burger.classList.add('opened');
                            mobileNav.classList.replace('disactive__menu', 'active');
                            mobileMenuBox.classList.replace('disactive', 'active');
                        }
                        else {
                            burger.classList.replace('opened', 'toggle');
                            mobileNav.classList.replace('active', 'disactive__menu');
                            mobileMenuBox.classList.replace('active', 'disactive');
                        }
                    }}>
                        <span className='toggle'></span>
                    </div>
                </div>
                <MobileMenu />
            </header>
        </>
    )
}

export default Header;