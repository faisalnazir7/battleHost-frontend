import React, { useEffect, useState } from 'react'
import RegisterTournament from '../RegisterTournament/RegisterTournament'
import { useParams,useNavigate } from 'react-router-dom'
import TournamentDescriptionSkeletal from './TournamentDescriptionSkeletal';

function TournamentDescription() {
  const {tournamentId}=useParams()
  const [tournamentData,setTournamentData]=useState();
  const [loading,setLoading]=useState(true)
  const navigator=useNavigate()
  const tournamentDetails=async()=>{
    const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`)
    const data=await response.json()
    // console.log(data.getTournamentDetails[0])
    setTournamentData(data.getTournamentDetails[0])
    setLoading(false)
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
 {loading &&
<TournamentDescriptionSkeletal/>
 }
    {!loading && <RegisterTournament tournament={tournamentData}/>}
   
    </div>
  )
}

export default TournamentDescription