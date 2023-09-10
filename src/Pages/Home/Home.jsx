
'use client'
import Navbar from '../../Components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer'
import Typewriting from '../../Components/TextAnimation/TextAnimation'
import Animation from '../../assets/animation.json'
import Lottie from 'lottie-react';
import img1 from '../../../src/assets/opportunity.png'
import img2 from '../../../src/assets/network.png'
import img3 from '../../../src/assets/prize.png'
import img4 from '../../../src/assets/fun.png'
import { Link } from 'react-router-dom';

export default function LandinngPageOne() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <>
    <Navbar/>

    <div className="w-full">
      
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-12 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            
            <Typewriting/>
    
              
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              This platform offers you to showcase your skills and prove yourself. Join Competition,Tournaments and many more Contests!
            </p>
            
              <div>
                <Link to="/signup">
                <button
                  type="button"
                  className="rounded-xl bg-black mt-8 px-12 py-4 text-sm font-semibold text-red-400 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Register Now!
                </button>
                </Link>
              </div>
            
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <Lottie
            animationData={Animation}
            loop={false}
            autoplay
            style={{width:'100%',height:'100%',marginLeft:'auto',marginRight:'7rem'}}
          />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <img src={img1} className="h-15 w-15 text-orange-600" viewBox="0 0 24 24" stroke="currentColor"/>
              
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Opportunities</h3>
            <p className="mt-4 text-sm text-gray-600">
            Meet other talented developers and get your foot in the door of the tech industry.
            Build your network and make connections that will last a lifetime
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <img src={img2} className="h-15 w-15 text-blue-600" viewBox="0 0 24 24" stroke="currentColor"/>
              
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Networking</h3>
            <p className="mt-4 text-sm text-gray-600">
            Connect with other talented developers and learn from the best. 
            Meetup with other participants and collaborate on projects.
            Learn from the best and get inspired
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <img src={img3} className="h-15 w-15 text-orange-600" viewBox="0 0 24 24" stroke="currentColor"/>
              
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Prizes</h3>
            <p className="mt-4 text-sm text-gray-600">
            Win cash prizes, scholarships, and other amazing prizes! Scholarships to top universities. Other amazing prizes, such as laptops, drones, and more!
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <img src={img4} className="h-15 w-15 text-orange-600" viewBox="0 0 24 24" stroke="currentColor"/>
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Fun</h3>
            <p className="mt-4 text-sm text-gray-600">
            Have a great time competing and learning new things.
            Meet new people and make friends
            Have a blast competing and learning new things
            </p>
          </div>
        </div>
      </div>
      
      <Footer/>
      
    </div>
    </>
  )
}
