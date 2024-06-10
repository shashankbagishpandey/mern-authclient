import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-b.png'
import search_icon_dark from '../../assets/search-w.png'
import toggle_light from '../../assets/night.png'
import WingmanL from '../../assets/Wingman_logoBG.png'
import { Link} from 'react-scroll';
import { NavLink as RouterLink} from 'react-router-dom'
import menu_icon from '../../assets/menu-icon.png'
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
    const [sticky, setSticky]=useState(false);
    const logoutUser =async (e)=>{
        console.log('logout done')
        const response =  await axios.get('api/logout', {
        user

    });

    if (response.status === 200) {
        
      navigate("/login");
    } 

    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true):setSticky(false);
        })
    },[]);
    
    const [mobileMenu,setMobileMenu]=useState(false);
    const toggleMenu=()=>{
        mobileMenu ? setMobileMenu(false) :setMobileMenu(true);

    }
    const { user } = useContext(UserContext);
    return (

        <nav className={`container ${sticky?'dark-nav':''}`}>
            <img src={WingmanL} alt='' className='logo'/>
             <ul className={`navbar-list  ${mobileMenu?'':'hide-mobile-menu'}`} >
                <li className="navbar-item">
                    <Link to='hero' smooth={true} offset={0} duration={500}> Home</Link>
                </li>
                <li className="navbar-item">
                <Link to='program' smooth={true} offset={-260} duration={500}> Programs</Link>
                </li>
                <li className="navbar-item">
                <Link to='about' smooth={true} offset={-150} duration={500}> About us </Link>
                </li>
                <li className="navbar-item">
                <Link to='campus' smooth={true} offset={-260} duration={500}> Campus </Link>
                </li>
                {/* <li className="navbar-item">
                <Link to='testimonials' smooth={true} offset={-260} duration={500}> Testimonials</Link>
                </li> */}
                <li className="navbar-item">
                    <Link to='contact'  smooth={true} offset={-260} duration={500}>Contact us </Link>
                </li> 
                <li className="navbar-item">
                {/* {!!user && <RouterLink to="/logout">logout</RouterLink>} */}
               { !!user?<button className='btn btn-dark' onClick={logoutUser}>logout</button>:<RouterLink to="/login">Login</RouterLink>}
                {/* <RouterLink to="/login">Login</RouterLink> */}
                {/* <Link to='/login' >Login</Link> */}
                </li> 
            </ul>

            {/* <div className='search-box'>
                <input type="text" placeholder='Search' name="" id="" />
                <img src={search_icon_light} alt="" />
            </div> */}
            {/* <span className='toggle-icon'>
                <i class="fa-solid fa-bars"></i>
            </span> */}

            <img src={menu_icon} alt="menu icon" className='menu-icon ' onClick={toggleMenu} />
            
        </nav>
    );
}
 
export default Navbar
