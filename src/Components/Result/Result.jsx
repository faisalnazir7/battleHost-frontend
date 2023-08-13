import React from 'react'
import Navbar from '../Navbar/Navbar'
import gold from '../../assets/gold trophy.png'
import silver from '../../assets/silver trophy.png'
import bronze from '../../assets/bronze trophy.png'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'
export default function Result() {
    const { width, height } = useWindowSize()
  return (
    <>
    <Navbar/>
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={500}
    />
    <div className='Result flex m-auto w-1/2'>
    <div className="second mt-44">
            <img src={silver} alt=""  className='w-52'/>
            <div className="resContent text-center text-xl bg-gray-300 h-32 -mt-6">
                <h1 className='pt-4'>Team: Error-404</h1>
                <h2>Leader:XYZ</h2>
                <h3>Rs 50000</h3>
            </div>
        </div>
        <div className="first ">
            <img src={gold} alt=""  className='w-96'/>
            <div className="resContent text-center text-xl bg-amber-300 h-32 -mt-7">
                <h1 className='pt-4'>Team: Error-404</h1>
                <h2>Leader:XYZ</h2>
                <h3>Rs 50000</h3>
            </div>
        </div>
        <div className="third mt-40">
            <img src={bronze} alt=""  className='w-44'/>
            <div className="resContent text-center text-xl bg-[#bc752f] h-32 -mt-7">
                <h1 className='pt-4'>Team: Error-404</h1>
                <h2>Leader:XYZ</h2>
                <h3>Rs 50000</h3>
            </div>
        </div>
    </div>
    </>
  )
}
