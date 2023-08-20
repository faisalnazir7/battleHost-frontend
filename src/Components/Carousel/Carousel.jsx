import React, { useRef, useState } from 'react'; 

import { Swiper, SwiperSlide } from 'swiper/react'; 

import 'swiper/css'; 
import 'swiper/css/navigation'; 
import img from '../../assets/wp1842455.jpg';
import img1 from '../../assets/hackathon1.png';
import img2 from '../../assets/tournaments_large.jpg';
import './Carousel.css'; 
import { Navigation } from 'swiper/modules'; 

 
export default function Carousel() { 
  return ( 
    <> 
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-24"> 
        <SwiperSlide><img className="h-[43vh] block w-1/2 object-cover align-middle p-4 rounded-2xl" src={img} alt="" /><img className="h-[43vh] block w-1/2 object-cover align-middle p-4"src={img1} alt="" /></SwiperSlide> 
        <SwiperSlide><img className="h-[43vh] block w-full object-cover align-middle p-4 rounded-2xl"src={img1} alt="" /><img className="h-[43vh] block w-full object-cover align-middle p-4"src={img2} alt="" /></SwiperSlide> 
        <SwiperSlide><img className="h-[43vh] block w-full object-cover align-middle p-4 rounded-2xl"src={img2} alt="" /><img className="h-[43vh] block w-full object-cover align-middle p-4"src={img2} alt="" /></SwiperSlide> 
      </Swiper> 
    </> 
  ); 
}


// 'use client';

// import { Carousel } from 'flowbite-react';

// export default function SlidingInterval() {
//   return (
//     <Carousel slideInterval={5000}>
//       <img
//         alt="..."
//         src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
//       />
//       <img
//         alt="..."
//         src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
//       />
//       <img
//         alt="..."
//         src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
//       />
//       <img
//         alt="..."
//         src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
//       />
//       <img
//         alt="..."
//         src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
//       />
//     </Carousel>
//   )
// }