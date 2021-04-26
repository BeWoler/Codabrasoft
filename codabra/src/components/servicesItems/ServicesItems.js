import React from 'react'
import './servicesItems.css'

function ServicesItems(props) {
  return (
    <div className='info__card'>
      {props.icon}
      {props.h3}
      {props.p}
    </div>
  )
}

export default ServicesItems;
