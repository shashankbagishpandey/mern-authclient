import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png' 

function About({setPlayState}) {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-img' onClick={()=>
            {
               setPlayState(true);
            }}  />
        </div>
        <div className="about-right">
         <h3>
            About us 
         </h3>
         <h2>lorem sdfghgfd sdfgfds sdfgfds asdfg dfgfds</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt aliquam voluptas nulla vero saepe dicta sed illo dolorum lam? Veniam amet voluptatum repudiandae cum earum dicta voluptatem laborum iste aperiam. Enim, qui.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta iure quae eaque perferendis earum consectetur, aut minimavoluptatibus voluptas odit suscipit explicabo, provident lausum, aliquid, laboriosam possimus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam at cupiditate tenetur! Atque excepturi eligendi consectetur delectus, amet error, saepe optio cum eveniet quo explicabo, deleniti nesciunt? Blanditiis, quod.
          o possimus?enim exerciue ad atque dignissimos ipsum in!</p>



        </div>
      
    </div>
  )
}

export default About
