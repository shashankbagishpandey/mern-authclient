import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {
    const slider=useRef();
        let tx=0;
    const SlideForward=()=>{

      if(tx>-50){
        tx-=25;
      }  
      slider.current.style.transform =`translateX(${tx}%)`

    }
    const SlideBackward=()=>{
        if(tx<0){
            tx+=25;
          } 
          slider.current.style.transform =`translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="aaa" className='next-btn' onClick={SlideForward} />
        <img src={back_icon} alt="sss" className='back-btn' onClick={SlideBackward}  />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="user1" />
                            <div>
                                <h3>lorem werr</h3>
                                <span>Company In</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem perferendis ullam
                            , officia minima sequi quaerat a reprehenderit odit iure quia temporibus ad \</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="user1" />
                            <div>
                                <h3>lorem Qarr</h3>
                                <span>Company in2</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem perferendis ullam
                            , officia minima sequi quaerat a reprehenderit odit iure quia temporibus ad \</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="user1" />
                            <div>
                                <h3>lorem werr</h3>
                                <span>Company In</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem perferendis ullam
                            , officia minima sequi quaerat a reprehenderit odit iure quia temporibus ad \</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="user1" />
                            <div>
                                <h3>lorem werr</h3>
                                <span>Company In</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem perferendis ullam
                            , officia minima sequi quaerat a reprehenderit odit iure quia temporibus ad \</p>
                    </div>
                </li>
            </ul>
        </div>
      <div className=''>

      </div>
    </div>
  )
}

export default Testimonials
