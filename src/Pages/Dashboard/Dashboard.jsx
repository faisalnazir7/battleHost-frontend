import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import CardWithDecorativeImage from '../../Components/Card/Card'
import TournamentsCard from '../../Components/TournamentsCard/TournamentsCard'
import Tournaments from '../../Components/Tournaments/Tournaments'

export default function Dasboard() {
  return (
    <>
    <Navbar/>
    <Tournaments/>
    </>
  )
}
