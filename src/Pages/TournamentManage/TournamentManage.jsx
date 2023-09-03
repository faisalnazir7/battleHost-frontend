import React from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../../Components/SideNav/SideNav'
import Navbar from '../../Components/Navbar/Navbar'

export default function TournamentManage() {
  return (
    <>
      <Navbar />
      <div className='TournamentManage flex'>
        <SideNav />
        <div className="TournamentManageContent ml-12 mt-6">

          <div className='HeadingTournament border-b'>
            <h2 className="text-xl font-semibold">Manage Your Tournaments</h2>
            <p className="mt-1 text-sm text-gray-700 mb-4">
              You can edit or delete existing tournamnets.
            </p>

          </div>

          <div >
            <table className='w-full border-separate border-spacing-y-20'>
              <tr className='border-b'>
                <th className='pr-60 text-left'>Title</th>
                <td className='pr-96 '>HackRx 2.0</td>
               <button className='pr-96 text-blue-700 '>Update</button>
              </tr>
              <tr >
              <th className='pr-60 text-left '>Title</th>
                <td className='pr-96 '>HackRx 2.0</td>
               <button className='pr-96 text-blue-700 '>Update</button>
              </tr>
              <tr >
              <th className='pr-60 text-left '>Title</th>
                <td className='pr-96 '>HackRx 2.0</td>
               <button className='pr-96 text-blue-700 '>Update</button>
              </tr>
              <tr >
              <th className='pr-60 text-left '>Title</th>
                <td className='pr-96 '>HackRx 2.0</td>
               <button className='pr-96 text-blue-700 '>Update</button>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
