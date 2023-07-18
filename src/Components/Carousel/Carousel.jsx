// import React from 'react' 
 
// export default function Carousel() { 
//   return ( 
//     <div>Carousel</div> 
//   ) 
// } 
 
 
 
import React, { useRef, useState } from 'react'; 
// Import Swiper React components 
import { Swiper, SwiperSlide } from 'swiper/react'; 
// Import Swiper styles 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import img from '../../assets/wp1842455.jpg';
import img1 from '../../assets/hackathon1.png';
import img2 from '../../assets/tournaments_large.jpg';
import './Carousel.css'; 
// import required modules 
import { Navigation } from 'swiper/modules'; 

 
export default function Carousel() { 
  return ( 
    <> 
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 
        <SwiperSlide><img className="h-[44.7rem] block w-full object-cover align-middle" src={img} alt="" /></SwiperSlide> 
        <SwiperSlide><img className="h-[44.7rem] block w-full object-cover align-middle"src={img1} alt="" /></SwiperSlide> 
        <SwiperSlide><img className="h-[44.7rem] block w-full object-cover align-middle"src={img2} alt="" /></SwiperSlide> 
      </Swiper> 
    </> 
  ); 
}