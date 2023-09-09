import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../../Components/SideNav/SideNav'
import Navbar from '../../Components/Navbar/Navbar'
import UpdateCard from '../../Components/UpdateCard/UpdateCard'

export default function TournamentManageUpdate() {
  return (
    <>
      <Navbar />
      <div className='TournamentManageUpdate flex'>
        <SideNav />
        <div className="TournamentManageUpdateContent ml-12 mt-12">

          <div className='HeadingTournamentUpdate border-b'>
            <h2 className="text-xl font-semibold">Update Your Tournaments</h2>
            <p className="mt-1 text-sm text-gray-700 mb-4">
              You can edit or delete existing tournamnets.
            </p>

          </div>

          <div >
            
            <UpdateCard/>
          </div>
        </div>
      </div>
    </>
  )
}
