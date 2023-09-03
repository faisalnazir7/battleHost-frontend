import React,{useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TournamentsCard from '../../Components/TournamentsCard/TournamentsCard';

export default function HostDashboard() {
  const [tournaments, setTournaments] = useState([]);
  const getAllTournaments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/alltournaments`
    );
    const data = await response.json();
    // console.log(data);
    setTournaments(data.allTournaments)
  };
  useEffect(() => {
    getAllTournaments();
  }, []);
  return (
    <>
    <Navbar/>
     <div className='HostDashboard mt-12 ml-8'>
     <h1 className='text-3xl font-extrabold ml-12'>My Tournaments</h1>
     <div className='flex flex-wrap'>
     {tournaments?.filter(filt=>filt.organizerId._id===JSON.parse(localStorage.getItem('user_data'))?._id)?.map(tournament=>(
      <TournamentsCard key={tournament._id} tournament={tournament} buttonContent={'Manage'}/>
     ))
    
     }
     </div>
     
     </div>
    </>
   
  )
}
