import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ParticipantData from '../../Components/ParticipantData/ParticipantData'

function ParticipantsManage() {
  
//       useEffect(()=>{
//     tournamentDetails()
// },[])
  return (
    <>
    <ParticipantData/>
    </>
  )

}

export default ParticipantsManage