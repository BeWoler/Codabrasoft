import React from 'react'
import './projectDetails.css'

function ProjectDetails(props) {
  return (
    <div className='project__details'>
      <h2 className='details__h2'>PROJECT DETAILS</h2>
      <hr className='details_hr' />
      <div className='details__date'>
        <h3 className='details__h3'>Date</h3>
        <p className='date__text'>{props.date}</p>
      </div>
      <div className='details__category'>
        <h3 className='details__h3'>CATEGORY</h3>
        <p className='category__text'>App, Design</p>
      </div>
      <button className='details__btn'>
        <a href={props.href}>
          <div className='btn-back-hover'></div>
          <span>App Store</span>
        </a>
      </button>
    </div>
  )
}

export default ProjectDetails;
