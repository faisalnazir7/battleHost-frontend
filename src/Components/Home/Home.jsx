
import React from 'react';
import { Carousel } from 'flowbite-react';
import Navbar from '../Navbar/Navbar';

export default function DefaultCarousel() {
  return (
    <>
    <Navbar/>
    <Carousel>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
    </>
  )
}


