import React, { useRef } from 'react'
import ItemSlider from './ItemSlider'
import './Slide.css'
import { BsChevronRight, BsTypeH3 } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

const Slide = ({elements,title}) => {
    const carouselRef = useRef()

    const handleClick = (e) => {
        if (e.target.className === "left-icon" || e.target.parentNode.className === "left-icon") {
            console.log("left")
            console.log(carouselRef.current.scrollLeft)
            carouselRef.current.scrollLeft -= 280;
            return false

        }

        if (e.target.className === "right-icon" || e.target.parentNode.className === "right-icon") {
            console.log("right")
            console.log( carouselRef.current.scrollLeft)
            carouselRef.current.scrollLeft += 280;
            return false
        }
    }

  return (
    <>
     <h3 className='title-slider'>{title}</h3>
    <div className='slide-container'>
        <div className='carousel' ref={carouselRef}>
        <div className='left-icon' onClick={handleClick}> <BsChevronLeft size={24} color="#fff" /></div>
        <div className='right-icon' onClick={handleClick}> <BsChevronRight size={24} color="#fff" /></div>
        {
            elements.map((item,index)=>{
                return <ItemSlider key={index} item={item} index={index}/>
            })
        }
        </div>
    </div>
    </>
   
  )
}

export default Slide