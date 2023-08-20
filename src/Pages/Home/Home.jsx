import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from '../../Components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import img from '../../assets/registeration.png'
import Footer from '../../Components/Footer/Footer';


export default function Home() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    <>   
                                        
    <Navbar/>
    <div className="flex mb-24 bg-sky-950">
    <div className="mt-28 ml-20">
    <div className='text-6xl  antialiased font-semibold text-left ml-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mt-8'><span className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-8'>Flaunt </span><br></br>Your Talent!</div>
    <div className='text-3xl text-white antialiased font-semibold text-left leading-normal ml-4 mt-8'>Join Competition,Tournaments <br></br>and many more Contests!</div>
    <Link to='/signup'><button className='text-3xl ml-16 mt-16 text-red-600 rounded-[2rem] border-2 w-60 h-20 bg-[#ffe4c4] font-semibold hover:bg-[#ffd1a0] shadow-md border-orange-500 transform hover:translate-y-[-5px] transition-transform duration-100'>Register Now</button></Link>

    <div className="-mt-6">
  <div className="arrow-scroll" onClick={scrollDown}>
    <img
      src="https://content.invisioncic.com/p289038/monthly_2020_04/arrow-down.gif.c819a92ab7162c828e944727a545dcd7.gif"
      className="h-28 w-26 mt-8 ml-32"
    />
    <img
      src="https://content.invisioncic.com/p289038/monthly_2020_04/arrow-down.gif.c819a92ab7162c828e944727a545dcd7.gif"
      className="h-28 w-26 ml-32 -mt-[4.75rem]"
    />
  </div>
</div>

    </div>
   <div className="image">
   <img src={img} className='h-auto w-[50rem] mt-16 ml-36'></img>
   </div>
   </div>
      
   
  <Carousel/>
  <Footer/>
   
    </>
  )
}


