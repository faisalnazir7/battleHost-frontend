import React, { useEffect, useState } from "react";
import TournamentsCard from "../TournamentsCard/TournamentsCard";
import { Link } from "react-router-dom";
import SkeletalCardLayout from "../SkeletalCardLayout/SkeletalCardLayout";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
  const getAllTournaments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/alltournaments`
    );
    const data = await response.json();
    // console.log(data);
    setTournaments(data.allTournaments);
    setLoading(false);
  };
  const filterTournaments=()=>{
    if(startDate && endDate){
      const filterData=tournaments.filter(tournament=>new Date(startDate)<=new Date(tournament.startDateTime) && new Date(endDate)>=new Date(tournament.startDateTime))
      return filterData
    }
    if(startDate){
      const filterData=tournaments.filter(tournament=>new Date(startDate)<=new Date(tournament.startDateTime))
      return filterData
    }
    if(endDate){
      const filterData=tournaments.filter(tournament=>new Date(endDate)>=new Date(tournament.startDateTime))
      return filterData
    }
    return tournaments
  }
  useEffect(() => {
    getAllTournaments();
  }, []);
  return (
    <>
    <div className="filterData flex w-full justify-end">
    <p className="mr-3 align-middle my-auto font-semibold">From: </p>
    <input type="date" name="startDate" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
    <p className="mx-3 align-middle my-auto font-semibold">To: </p>
    <input type="date" name="endDate" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
 
    <button
    type="button"
    class="rounded-md bg-red-600 mx-5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  onClick={()=>{
    setStartDate('')
    setEndDate('')
  }}
    >
    Clear Filter
  </button>
 
    </div>
    <div className="Dasboard flex flex-wrap justify-center">
      {loading && <SkeletalCardLayout />}
     
      {filterTournaments().length>0?
       filterTournaments()?.map((tournament) => (
        <Link to={`/tournaments/details/${tournament._id}`}>
          <TournamentsCard
            key={tournament._id}
            tournament={tournament}
            buttonContent={"Register Now!"}
          />
        </Link>

      ))
      :
      <p className="p-36">No tournament found!</p>
  
  }
    </div>
    </>
  );
}

export default Tournaments;
