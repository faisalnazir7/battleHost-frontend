import React, { useEffect, useState } from 'react'
import RegisterTournament from '../RegisterTournament/RegisterTournament'
import { useParams } from 'react-router-dom'

function TournamentDescription() {
  const {tournamentId}=useParams()
  const [tournamentData,setTournamentData]=useState();
  const tournamentDetails=async()=>{
    const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`)
    const data=await response.json()
    console.log(data.getTournamentDetails[0])
    setTournamentData(data.getTournamentDetails[0])
  }
  useEffect(()=>{
tournamentDetails()
  },[])
  return (
    <div>
    <RegisterTournament tournament={tournamentData}/>
    </div>
  )
}

export default TournamentDescription