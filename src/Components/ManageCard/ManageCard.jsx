import {  MapPin ,Trash2} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dateFormatter from '../../util/dateFormatter'
import { Link } from 'react-router-dom'
export default function ManageCard() {
  const {tournamentId}=useParams()
  const [tournamentData,setTournamentData]=useState([])

  const getTournamentData=async()=>{
    const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`)
    const data=await response.json()
    console.log(data.getTournamentDetails[0])
    setTournamentData(data.getTournamentDetails[0])
  }
  useEffect(()=>{

   getTournamentData()
      },[])
  return (
    <div className="flex w-4xl h-4xl flex-col items-center rounded-md border md:flex-row mt-20 ml-36
    ">
      <div className="h-full w-full ml-8 md:h-[200px] md:w-[300px]">
        <img
        src={tournamentData?.bannerImg}
          alt="no preview"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {tournamentData?.name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
{tournamentData?.description}
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Tournament Rules
          </p>
          <div className='flex'>
          <div className="mt-4">
          <p className="mt-3 text-sm text-gray-600">
            Start Date: {dateFormatter(tournamentData?.startDateTime,0)}
          </p>
          <p className="mt-3 text-sm text-gray-600">
            End Date: {dateFormatter(tournamentData?.endDateTime,0)}
          </p>
          </div>
          <div className='ml-32 mt-8 flex'>
          <MapPin />
          <p className="ml-2 text-sm text-gray-600">
            {tournamentData?.location}
          </p>          
          </div>
          </div>
          <br />
          <div className='flex justify-end'>
            <Link to='/hostdashboard/manage/:tournamentId/update'>
          <button type="button"
        className="rounded-md bg-blue-700 px-3 py-2 mt-1 text-sm font-semibold text-white shadow-sm mr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Update
      </button></Link>
      <button type="button"
        className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <Trash2 />
      </button>
          </div>

        </div>
      </div>
    </div>
  )
}
