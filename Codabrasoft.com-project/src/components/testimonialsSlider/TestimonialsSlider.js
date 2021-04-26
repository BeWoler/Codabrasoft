import React from 'react'
import Slider from 'react-slick'
import './testimonialsSlider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function TestimonialsSlider() {

  let settings = {
    dots: true,
    arrows: false,
    infinity: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const firstSlide = <div className='slide'>
    <p className='slider__paragraph'>
      Codabrasoft LLC clearly understood the project’s requirements,
      satisfied an extensive feature list, and delivered the app ahead of schedule.
      Responsive and supportive, the team scaled up as necessary on short notice and
      suggested innovative solutions to improve the initial design.
        </p>
    <div className='slider__author'>BERIL SIRMACE</div>
    <div className='author__company'>CTO, farmAR</div>
  </div>;

  const secondSlide = <div className='slide'>
    <p className='slider__paragraph'>
      Testers responded positively to the app's user-friendly layout and fluid performance.
      Codabrasoft impressed with their resposive communication, organized management,
      and straightforward pricing. Their products functioned perfectly and their suggestions saved money.
    </p>
    <div className='slider__author'>STEVEN HOROWITZ</div>
    <div className='author__company'>Founder, TeamSafe</div>
  </div>;

  const thirdSlide = <div className='slide'>
    <p className='slider__paragraph'>
      The client has been thrilled with the development so far, which includes positive
      feedback from users of a demo version. Codrabrasoft always asks the right questions and
      are available around the clock to fix any issues that arose.
        </p>
    <div className='slider__author'>DANIEL HUFF</div>
    <div className='author__company'>Founder, ER Biometrics</div>
  </div>;

  const fourthSlide = <div className='slide'>
    <p className='slider__paragraph'>
      The app generates roughly 750 installs a month, which has contributed to the client's
      revenue doubling in the past year. They were able to quickly understand a very specialized
      business and creative a relevant application that has streamlined their day to day processes.
    </p>
    <div className='slider__author'>CHRIS LAING</div>
    <div className='author__company'>Founder, Flipping Cars Ltd</div>
  </div>;

  const fifthSlide = <div className='slide'>
    <p className='slider__paragraph'>
      Codabrasoft has come back to me with solutions to problems I haven’t thought about.
      The iOS version of the app has been developed, and the team is currently working on the
      Android version. So far, the client has been impressed with the Codabrasoft LLC team’s
      collaborative efforts and suggestions that help move the project forward. Their QA portal
      has also been highly useful.
        </p>
    <div className='slider__author'>CHRISTIAN BORCHERT</div>
    <div className='author__company'>Evening Hudle Enterpises</div>
  </div>;

  return (
    <div className='testimonials__slider__box'>
      <Slider {...settings}>
        {firstSlide}
        {secondSlide}
        {thirdSlide}
        {fourthSlide}
        {fifthSlide}
      </Slider>
    </div>
  )
}

export default TestimonialsSlider;
