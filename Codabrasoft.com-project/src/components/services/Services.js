import React from 'react'
import ServicesItems from '../servicesItems/ServicesItems'
import laptopIcon from '../../icons/laptop.svg'
import medalIcon from '../../icons/medal.svg'
import rocketIcon from '../../icons/rocket.svg'
import iphoneIcon from '../../icons/smartphone-iphone.svg'
import smartphoneIcon from '../../icons/smartphone.svg'
import teamIcon from '../../icons/team.svg'
import ScrollableAnchor from 'react-scrollable-anchor'
import './services.css'
import ServicesParagraph from '../servicesParagraph/ServicesParagraph'

const serviceIcons = [
  iphoneIcon,
  smartphoneIcon,
  laptopIcon,
  teamIcon,
  rocketIcon,
  medalIcon
];

const cardsH3 = [
  'iOS Development',
  'Android Development',
  'Web Development',
  'Dedicated Team',
  'Proposition for Start-up',
  'Quality & Assurance'
];

const cardsText = [
  'Is the process of making mobile applications for Apple hardware, including iPhone and iPad, then deployed to the App Store.',
  'Is the process by which applications are created for devices running the Android operating system.',
  'Is the building and maintenance of websites, to make a website looks great, work fast and perform well.',
  'Our consultants, designers and software engineers provide full-stack development and consulting services.',
  'Establishing a substantive value proposition for you to start from your "idea" to building a successful Start-up.',
  'Whether it’s manual or automated testing, our perceptive QA specialists dig beneath the surface to get at the source of issues.'
];

let cardsH3Text = cardsH3.map(h3 => {
  return <h3 className='card__title__h3'>{h3}</h3>
});

let cardsParagraphText = cardsText.map(paragraph => {
  return <p className='card__title__paragraph'>{paragraph}</p>
});

let icon = serviceIcons.map(serviceIcons => {
  return <img className='serviceIcons' src={serviceIcons} alt='icon' />
})

function Services() {
  return (
    <ScrollableAnchor id={'services'}>
      <section className='services'>
        <div className='services__box'>
          <div className='services__title'>
            <h2 className='services__title__h2'>Full-cycle Custom Software Development</h2>
            <ServicesParagraph />
          </div>
          <div className='services__info__box'>
            <ServicesItems key={cardsH3.length} icon={icon[0]} h3={cardsH3Text[0]} p={cardsParagraphText[0]} />
            <ServicesItems icon={icon[1]} h3={cardsH3Text[1]} p={cardsParagraphText[1]} />
            <ServicesItems icon={icon[2]} h3={cardsH3Text[2]} p={cardsParagraphText[2]} />
            <ServicesItems icon={icon[3]} h3={cardsH3Text[3]} p={cardsParagraphText[3]} />
            <ServicesItems icon={icon[4]} h3={cardsH3Text[4]} p={cardsParagraphText[4]} />
            <ServicesItems icon={icon[5]} h3={cardsH3Text[5]} p={cardsParagraphText[5]} />
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default Services;
