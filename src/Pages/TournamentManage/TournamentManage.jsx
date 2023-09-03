import React from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../../Components/SideNav/SideNav'
import Navbar from '../../Components/Navbar/Navbar'
import ManageCard from '../../Components/ManageCard/ManageCard'

export default function TournamentManage() {
  return (
    <>
      <Navbar />
      <div className='TournamentManage flex'>
        <SideNav />
        <div className="TournamentManageContent ml-12 mt-14">

          <div className='HeadingTournament border-b'>
            <h2 className="text-xl font-semibold">Manage Your Tournaments</h2>
            <p className="mt-1 text-sm text-gray-700 mb-4">
              You can edit or delete existing tournamnets.
            </p>

          </div>

          <div >
            
            <ManageCard/>
          </div>
        </div>
      </div>
    </>
  )
}
