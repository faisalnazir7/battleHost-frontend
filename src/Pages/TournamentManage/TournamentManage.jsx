import React from 'react'
import { useParams } from 'react-router-dom'

function TournamentManage() {
    const {tournamentId}=useParams()
    
  return (
    <div>TournamentManage {tournamentId}</div>
  )
}

export default TournamentManage