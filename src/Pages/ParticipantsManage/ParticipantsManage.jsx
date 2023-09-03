import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ParticipantData from '../../Components/ParticipantData/ParticipantData'

function ParticipantsManage() {
    const {tournamentId}=useParams()
    const [participants,setParticipants]=useState([])
    const tournamentDetails=async()=>{
        const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`)
        const data=await response.json()
        console.log(data.getTournamentDetails[0])
        // setTournamentData(data.getTournamentDetails[0])
        setParticipants(data.getTournamentDetails[0].participants)
        
      }
      useEffect(()=>{
    tournamentDetails()
},[])
  return (
    <>
    <ParticipantData data={participants}/>
    </>
  )

}

export default ParticipantsManage