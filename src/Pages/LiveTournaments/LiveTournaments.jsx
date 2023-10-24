import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import TournamentsCard from "../../Components/TournamentsCard/TournamentsCard";
import SkeletalCardLayout from "../../Components/SkeletalCardLayout/SkeletalCardLayout";
function LiveTournaments() {
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
    <>
      <Navbar />
      <div className="Dasboard flex flex-wrap">
        {loading && <SkeletalCardLayout />}
        {tournaments
          ?.filter?.(
            (filtered) => new Date(filtered?.endDateTime) >= Date.now()
          )
          .map((tournament) => (
            <Link to={`/tournaments/details/${tournament._id}`}>
              <TournamentsCard
                key={tournament._id}
                tournament={tournament}
                buttonContent={"Register Now!"}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default LiveTournaments;
