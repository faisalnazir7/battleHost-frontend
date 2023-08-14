import React from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import img from '../../assets/registeration.png'


export default function Home() {
  return (
    <>                                          
    <Navbar/>
    <div className="flex bg-black mb-40">
    <div className="mt-28 ml-20">
    <div className='text-6xl  antialiased font-semibold text-left ml-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mt-8'><span className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 ml-6 mb-8'>Flaunt </span><br></br>Your Talent!</div>
    <div className='text-3xl text-white antialiased font-semibold text-left leading-normal ml-10 mt-8'>Join Competition,Tournaments <br></br>and many more Contests!</div>
    <h3 className='text-4xl ml-24 mt-16 text-red-600'>Register Now</h3>
    <img src="https://content.invisioncic.com/p289038/monthly_2020_04/arrow-down.gif.c819a92ab7162c828e944727a545dcd7.gif" className='h-28 w-26 mt-8 ml-40'></img>
    <img src="https://content.invisioncic.com/p289038/monthly_2020_04/arrow-down.gif.c819a92ab7162c828e944727a545dcd7.gif" className='h-28 w-26 ml-40 mt-[-5rem]'></img>
   
    </div>
   <div className="image">
   <img src={img} className='h-auto w-[50rem] mt-16 ml-36'></img>
   
  
   </div>
   </div>
   
   <Carousel/>
    </>
  )
}


