import React from 'react'
import facebookIcon from '../../icons/facebook.svg'
import twitterIcon from '../../icons/twitter.svg'
import linkedinIcon from '../../icons/linkedin.svg'
import instagramIcon from '../../icons/instagram.svg'
import './Icon.css'

function Icon() {

    return (
        <ul className='nav__icons'>
            <li key='facebook' className='nav__icons__items'>
                <a href='https://web.facebook.com/codabrasoft/?_rdc=1&_rdr'><img src={facebookIcon} alt='icon' /></a>
            </li>
            <li key='twitter' className='nav__icons__items'>
                <a href='https://twitter.com/codabrasoft'><img src={twitterIcon} alt='icon' /></a>
            </li>
            <li key='instagram' className='nav__icons__items'>
                <a href='https://www.instagram.com/codabrasoft.com.us/'><img src={instagramIcon} alt='icon' /></a>
            </li>
            <li key='linkedin' className='nav__icons__items'>
                <a href='https://www.linkedin.com/company/codabrasoft/'><img src={linkedinIcon} alt='icon' /></a>
            </li>
        </ul>
    )
}

export default Icon;