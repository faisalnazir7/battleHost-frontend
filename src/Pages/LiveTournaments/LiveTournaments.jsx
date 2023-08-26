import React,{useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
function LiveTournaments() {
  const navigator=useNavigate()
  useEffect(()=>{
      if(!document.cookie.split('=')[1]){
          navigator('/signin')
          }
  },[])
  return (
    <>
    <Navbar/>
    <div>
    LiveTournaments
    </div>
    </>
  )
}

export default LiveTournaments