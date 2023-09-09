import React,{useEffect,useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate,Link } from 'react-router-dom'
import TournamentsCard from '../../Components/TournamentsCard/TournamentsCard';
function LiveTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const getAllTournaments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/alltournaments`
    );
    const data = await response.json();
    console.log(data);
    setTournaments(data.allTournaments);
  };
  useEffect(() => {
    getAllTournaments();
  }, []);
  return (
    <>
    <Navbar/>
    <div className="Dasboard flex flex-wrap">
      {tournaments?.filter?.(filtered=>new Date(filtered?.endDateTime)>=Date.now()).map((tournament) => (
        <Link to={`/tournaments/details/${tournament._id}`}>
          <TournamentsCard key={tournament._id} tournament={tournament} buttonContent={"Register Now!"}/>
        </Link>
      ))}
    </div>
    </>
  );
}

export default LiveTournaments