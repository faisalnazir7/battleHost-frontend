import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ParticipantData from '../../Components/ParticipantData/ParticipantData'
import Navbar from '../../Components/Navbar/Navbar'
import SideNav from '../../Components/SideNav/SideNav'

function ParticipantsManage() {
  
//       useEffect(()=>{
//     tournamentDetails()
// },[])
  return (
    <>
    <Navbar/>
    <div className="flex">
      <SideNav/>
      <ParticipantData/>
    </div>
    
    </>
  )

}

export default ParticipantsManage