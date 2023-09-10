import React, { useEffect, useState } from 'react'
import RegisterTournament from '../RegisterTournament/RegisterTournament'
import { useParams,useNavigate } from 'react-router-dom'

function TournamentDescription() {
  const {tournamentId}=useParams()
  const [tournamentData,setTournamentData]=useState();
  const navigator=useNavigate()
  const tournamentDetails=async()=>{
    const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`)
    const data=await response.json()
    console.log(data.getTournamentDetails[0])
    setTournamentData(data.getTournamentDetails[0])
  }
  useEffect(()=>{
    if(!document.cookie.split('=')[1]){
navigator('/signin')
}
else{
tournamentDetails()
}
  },[tournamentId])
 
  
  return (
    <div>
    <RegisterTournament tournament={tournamentData}/>
    </div>
  )
}

export default TournamentDescription