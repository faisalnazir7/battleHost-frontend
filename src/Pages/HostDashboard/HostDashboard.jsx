import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HostCard from './HostCard'

export default function HostDashboard() {
  return (
    <>
    <Navbar/>
     <div className='HostDashboard mt-12 ml-8'>
       <HostCard/>
     </div>
    </>
   
  )
}
