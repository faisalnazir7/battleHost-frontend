import React, { useEffect, useState } from "react";
import TournamentsCard from "../TournamentsCard/TournamentsCard";
import { Link } from "react-router-dom";
import SkeletalCardLayout from "../SkeletalCardLayout/SkeletalCardLayout";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllTournaments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/alltournaments`
    );
    const data = await response.json();
    // console.log(data);
    setTournaments(data.allTournaments);
    setLoading(false);
  };
  useEffect(() => {
    getAllTournaments();
  }, []);
  return (
    <div className="Dasboard flex flex-wrap justify-center">
      {loading && <SkeletalCardLayout />}
      {tournaments.map((tournament) => (
        <Link to={`/tournaments/details/${tournament._id}`}>
          <TournamentsCard
            key={tournament._id}
            tournament={tournament}
            buttonContent={"Register Now!"}
          />
        </Link>
      ))}
    </div>
  );
}

export default Tournaments;
