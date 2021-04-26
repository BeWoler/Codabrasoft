import React from 'react'
import Icon from '../navIcons/Icon'
import './nav.css'

function Nav() {

    const navMenu = ['Home', 'Services', 'About', 'Works', 'Testimonials', 'Contact'];

    let navigation = navMenu.map(arr => {
        let idKey = arr;
        return <li key={idKey} className='nav__ul__items'>
            <a href={'main#' + idKey.toLowerCase()}>{arr}</a>
        </li>
    });

    return (
        <nav className='nav'>
            <ul className='nav__ul'>
                {navigation}
            </ul>
            <Icon />
        </nav>
    )
};

export default Nav;
