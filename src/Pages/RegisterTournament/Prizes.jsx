import React from 'react'

function Prizes({pos,cash}) {
  return (
    <div className='Prizes mt-5 flex border-2 border-blue-500 rounded-lg p-6 w-fit mx-5'>
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/svg-images/unstop-trophy.png" alt="" />
    <div className="prize_content ml-4">
    <h1 className='text-3xl font-extrabold'>{pos}</h1>
    <p className='text-xl'>Swags+Internship Opportunities</p>
    <p className='text-xl font-bold'>${cash}</p>
    </div>
    </div>
  )
}

export default Prizes