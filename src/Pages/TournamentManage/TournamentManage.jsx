import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../../Components/SideNav/SideNav'
import Navbar from '../../Components/Navbar/Navbar'
import ManageCard from '../../Components/ManageCard/ManageCard'

export default function TournamentManage() {

  return (
    <>
      <Navbar />
      <div className='TournamentManage md:flex'>
        <SideNav />
        <div className="TournamentManageContent mt-2 ml-1 md:ml-12 md:mt-14">

          <div className='HeadingTournament border-b'>
            <h2 className="text-base md:text-xl font-semibold">Manage Your Tournaments</h2>
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
