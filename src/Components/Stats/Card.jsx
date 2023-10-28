import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Lottie from 'lottie-react'
export default function Card({animationData, heading, count, isLoop,width}) {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row shadow-lg mx-10 mb-10">
      <div className={`h-fit w-fit md:h-[200px] md:w-[${width?width:"150px"}]`}>
        
        <Lottie
        animationData={animationData}
        loop={isLoop}
        autoplay
        className='h-full w-fit rounded-md object-cover'
      />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {heading} <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-2xl text-gray-600">
            <b>{count}</b>
          </p>
          <div className="mt-9 flex items-center space-x-2">
            <p><b className='color-green-400'>+55%</b> more than last week</p>
          </div>
        </div>
      </div>
    </div>
  )
}
