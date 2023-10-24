import { MapPin, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dateFormatter from "../../util/dateFormatter";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function ManageCard() {
  const { tournamentId } = useParams();
  const [tournamentData, setTournamentData] = useState([]);
  const navigator = useNavigate();
  const getTournamentData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`
    );
    const data = await response.json();
    setTournamentData(data.getTournamentDetails[0]);
  };
  const deleteTournament = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/api/tournament/${tournamentId}/deletetournament`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    // console.log('Deleted:',data)
  };
  useEffect(() => {
    getTournamentData();
  }, []);
  return (
    <div className="flex w-4xl h-4xl flex-col items-center rounded-md border md:flex-row mt-2 md:mt-20 md:ml-36 ">
      <div className="h-full w-full md:ml-8 md:h-[200px] md:w-[300px]">
        <img
          src={tournamentData?.bannerImg}
          alt="no preview"
          className="h-full w-full rounded-md object-cover"
        />
      </div>

      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {tournamentData?.name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {tournamentData?.description}
          </p>
          <p className="mt-3 text-sm text-gray-600">Tournament Rules</p>
          <div className="flex">
            <div className="mt-4 -mr-24 md:mr-0">
              <p className="mt-3 text-sm text-gray-600">
                Start Date: {dateFormatter(tournamentData?.startDateTime, 0)}
              </p>
              <p className="mt-3 text-sm text-gray-600">
                End Date: {dateFormatter(tournamentData?.endDateTime, 0)}
              </p>
            </div>
            <div className="ml-32 mt-8 flex">
              <MapPin />
              <p className="ml-2 text-sm text-gray-600">
                {tournamentData?.location}
              </p>
            </div>
          </div>
          <br />
          <div className="flex justify-end">
            <Link to={`/hostdashboard/manage/${tournamentId}/update`}>
              <button
                type="button"
                className="rounded-md bg-blue-700 px-3 py-2 mt-1 text-sm font-semibold text-white shadow-sm mr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Update
              </button>
            </Link>
            <button
              type="button"
              onClick={async () => {
                if (
                  window.confirm("Do you really want to delete the tournament?")
                ) {
                  await deleteTournament();
                  navigator("/hostdashboard");
                  toast("Tournament Deleted Successfully!!", { icon: "🗑️" });
                }
              }}
              className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
