import {  MapPin } from 'lucide-react'
import React from 'react'

export default function ManageCard() {
  return (
    <div className="flex w-4xl h-4xl flex-col items-center rounded-md border md:flex-row mt-20 ml-36">
      <div className="h-full w-full ml-8 md:h-[200px] md:w-[300px]">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            HackRx 2.0
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <div className='flex'>
          <div className="mt-4">
          <p className="mt-3 text-sm text-gray-600">
            Start Date: 17/09/2023
          </p>
          <p className="mt-3 text-sm text-gray-600">
            End Date: 25/09/2023
          </p>
          </div>
          <div className='ml-32 mt-8 flex'>
          <MapPin />
          <p className="ml-2 text-sm text-gray-600">
            Remote
          </p>          
          </div>
          </div>
          <br />
          <div className='flex justify-end'>
          <button type="button"
        className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm mr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Update
      </button>
      <button type="button"
        className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Delete
      </button>
          </div>
          <div className="mt-3 flex items-center space-x-2">
         
          </div>
        </div>
      </div>
    </div>
  )
}
