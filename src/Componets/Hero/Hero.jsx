import React from 'react'
import './Hero.css'

import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better business to better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aliquid laudantium voluptatum minus earum aspern.</p>
           <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero
