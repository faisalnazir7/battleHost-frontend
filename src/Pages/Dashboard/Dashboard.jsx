import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CardWithDecorativeImage from '../../Components/Card/Card'
import TournamentsCard from '../../Components/TournamentsCard/TournamentsCard'
import { Link } from 'react-router-dom'

export default function Dasboard() {
  const [tournaments,setTournaments]=useState([])
  const getAllTournaments=async()=>{
    const response=await fetch('http://localhost:5000/api/tournament/alltournaments')
    const data=await response.json()
    console.log(data)
    setTournaments(data.allTournaments)
  }
  useEffect(()=>{
    getAllTournaments()
  },[])
  return (
    <>
    <Navbar/>
    <div className='Dasboard flex flex-wrap'>
{tournaments.map(tournament=>(
  <Link to={`/tournaments/details/${tournament._id}`}>
   <TournamentsCard key={tournament._id} tournament={tournament}/>
   </Link>
)
)
}
<div>
  {/*<CardWithDecorativeImage/>*/}
</div>

    </div>
    </>
  )
}
