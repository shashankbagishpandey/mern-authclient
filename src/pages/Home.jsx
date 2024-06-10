
import Navbar from '../Componets/Navbar/Navbar';
import React, { useState } from "react";
import Hero from '../Componets/Hero/Hero';
import Title from '../Componets/Title/Title';
import Programs from '../Componets/Programs/Programs';
import About from '../Componets/About/About.jsx';
import Campus from '../Componets/Campus/Campus.jsx';
import Testimonials from '../Componets/Testimonials/Testimonials.jsx';
import Contact from '../Componets/Contact/Contact.jsx';
import Footer from '../Componets/Footer/Footer.jsx';
import VideoPlayer from '../Componets/VideoPlayer/VideoPlayer.jsx';
import { Toaster } from "react-hot-toast";
function Home() {
  const [playState ,setPlayState]=useState(false);

  return (
    <div>
    <Navbar/>
      
    <Hero/>
    <div className="container">
      <Title  subTitle='Our PROGRAM'  title='What We Offer'/>
       <Programs/>
       <About setPlayState ={setPlayState}/>
       <Title  subTitle='Gallery'  title='Campus Photos'/>
       <Campus/>
       <Title  subTitle='TESTIMONIALS'  title='What Clients Says'/>
       <Testimonials/>
       <Title  subTitle='Contact Us'  title='Get in Touch'/>
       <Contact/>
       <Footer/>


    </div>
   <VideoPlayer playState={playState} setPlayState={setPlayState} />
</div>
   
);
}

export default Home
