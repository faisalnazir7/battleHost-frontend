import React, { useEffect, useState } from 'react'
import Card from './Card'
import Cup from '../../assets/cup.json'
import Live from '../../assets/live.json'
import People from '../../assets/people.json'
function Stats() {
    const [noOfTournaments,setnoOfTournaments]=useState("Calculating...");
    const [liveTournamentCount,setLiveTournamentCount]=useState("Calculating...")
    const [totalUsers,setTotalUsers]=useState("Calculating...")
    const fetchTournamentData=async()=>{
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/api/tournament/alltournaments`
          );
          const data = await response.json();
          setnoOfTournaments(data?.allTournaments?.length)
          const filterLiveTournaments=data?.allTournaments?.filter(tournament=>Date.now()>=new Date(tournament.startDateTime) && Date.now()<=new Date(tournament.endDateTime))
          setLiveTournamentCount(filterLiveTournaments.length)
    }
    const getTotalUsers=async()=>{
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/api/users/total`
          );
        const data=await response.json()
        setTotalUsers(data.totalUsers)
    }
    useEffect(()=>{
fetchTournamentData()
getTotalUsers()
    },[])
  return (
    <div className="Stats flex flex-wrap justify-center m-6">
    <Card animationData={Cup} heading={"Tournaments Registered"} count={noOfTournaments} isLoop={false}/>
    <Card animationData={Live} heading={"Live Tournaments"} count={liveTournamentCount} isLoop={true}/>
    <Card animationData={People} heading={"Users Active"} count={totalUsers} isLoop={true} width={"full"}/>
    </div>
  )
}

export default Stats