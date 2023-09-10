import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import gold from '../../assets/gold trophy.png'
import silver from '../../assets/silver trophy.png'
import bronze from '../../assets/bronze trophy.png'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'
import { useNavigate, useParams } from 'react-router-dom'

export default function Result() {
    const {tournamentId}=useParams()
    const { width, height } = useWindowSize()
    const navigator=useNavigate()
    const [resultData,setResultData]=useState()
    const [message,setMessage]=useState("")
    const getResuts=async()=>{
        const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}/displayresults`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include'
        })
        const data=await response.json()
        if(data.message){
            setMessage(data.message)
        }
        else{
        setResultData(data)
        console.log("Result:",data)
        }
    }
    useEffect(()=>{
        if(!document.cookie.split('=')[1]){
            navigator('/signin')
            }
            getResuts()
    },[])
    
  return (
    <>
    <Navbar/>
    
  {!message &&  <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={500}
    />}
   {message?
    <p className='text-center text-3xl'>{message}</p>
    :
     <div className="Result flex m-auto w-1/2">

    <div className="second mt-40">
            <img src={silver} alt=""  className='w-52'/>
            <div className="resContent text-center text-xl bg-gray-300 h-32 -mt-6">
                <h1 className='pt-4'>TeamName/Email: {resultData?.resultsData[1]?resultData?.resultsData[1]:""}</h1>
                <h2>Position:{resultData?.prizes[1]?.name?resultData?.prizes[1]?.name:""}</h2>
                <h3>Rs {resultData?.prizes[1]?.description?resultData?.prizes[1]?.description:""}</h3>
            </div>
        </div>
        <div className="first ">
            <img src={gold} alt=""  className='w-96'/>
            <div className="resContent text-center text-xl bg-amber-300 h-32 -mt-7">
                <h1 className='pt-4'>TeamName/Email: {resultData?.resultsData[0]?resultData?.resultsData[0]:""}</h1>
                <h2>Position:{resultData?.prizes[0]?.name?resultData?.prizes[0]?.name:""}</h2>
                <h3>Rs {resultData?.prizes[0]?.description?resultData?.prizes[0]?.description:""}</h3>
            </div>
        </div>
        <div className="third mt-40">
            <img src={bronze} alt=""  className='w-44'/>
            <div className="resContent text-center text-xl bg-[#bc752f] h-32 -mt-7">
                <h1 className='pt-4'>TeamName/Email: {resultData?.resultsData[2]?resultData?.resultsData[2]:""}</h1>
                <h2>Position:{resultData?.prizes[2]?.name?resultData?.prizes[2]?.name:""}</h2>
                <h3>Rs {resultData?.prizes[2]?.description?resultData?.prizes[2]?.description:""}</h3>
            </div>
        </div>
    </div>

}
    </>
  )
}
