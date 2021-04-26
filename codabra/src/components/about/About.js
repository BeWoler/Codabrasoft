import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import './about.css'

function About() {
    return (
        <ScrollableAnchor id={'about'}>
            <section className='about'>
                <div className='about__opacity'></div>
                <div className='about__box'>
                    <div className='about__title'>
                        <h2 className='about__title__h2'>We're A Dynamic<br />Team Of Experts</h2>
                        <p className='about__title__paragraph'>Also, we provide our customers with backend and frontend development.
                        Codabrasoft helps start-ups to better understand their project, business plan,
                        marketing strategy, and publish ready-to-use applications to the App Store and
                        Play Market.We’ve gained solid experience making apps for Sport, Health and Care,
                    Fitness, E-commerce, Finance, and other industries.</p>
                        <button className='about__title__btn' onClick={() => { goToAnchor('services') }}>
                            <div className='btn-back-hover'></div>
                            <span>Read Our Story</span>
                        </button>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    )
}

export default About;
