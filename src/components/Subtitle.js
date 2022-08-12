import React from 'react'
import './Subtitle.css'

const Subtitle = (props)=> {
  return (
   <h3 className='subtitle'>{props.children} {props.subtitle}</h3>
  )
}

export default Subtitle