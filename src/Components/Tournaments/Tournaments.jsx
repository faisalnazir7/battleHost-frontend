import React, { useEffect, useState } from "react";
import TournamentsCard from "../TournamentsCard/TournamentsCard";
import { Link } from 'react-router-dom'

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const getAllTournaments = async () => {
    const response = await fetch(
      "http://localhost:5000/api/tournament/alltournaments"
    );
    const data = await response.json();
    console.log(data);
    setTournaments(data.allTournaments);
  };
  useEffect(() => {
    getAllTournaments();
  }, []);
  return (
    <div className="Dasboard flex flex-wrap">
      {tournaments.map((tournament) => (
        <Link to={`/tournaments/details/${tournament._id}`}>
          <TournamentsCard key={tournament._id} tournament={tournament} />
        </Link>
      ))}
    </div>
  );
}

export default Tournaments;
