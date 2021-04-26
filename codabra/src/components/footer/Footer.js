import React from 'react'
import { Link } from 'react-router-dom'
import { goToTop } from 'react-scrollable-anchor'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content__box'>
                <div className='content__codabra'>© 2021 Codabrasoft. All Rights Reserved</div>
                <div className='content__info'>
                    <div>
                        <p className='codabra__society'>info@codabrasoft.com</p>
                        <p>66 Botolph St, Quincy, MA 02171-1910, United States</p>
                    </div>
                    <div>
                        <p className='codabra__docs'>
                            <Link to='/home/terms-of-use' onClick={goToTop} >Terms of use</Link>
                        </p>
                        <p>
                            <Link to='/home/privacy-policy' onClick={goToTop} >Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer