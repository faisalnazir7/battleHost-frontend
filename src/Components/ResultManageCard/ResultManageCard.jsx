import React, { useState } from "react";
import img from "../../assets/result.jpg";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function ResultManageCard() {
  const { tournamentId } = useParams();
  const [Winner, setWinner] = useState("");
  const [FirstRunnerUp, setFirstRunnerUp] = useState("");
  const [SecondRunnerUp, setSecondRunnerUp] = useState("");
  const declareResults = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/api/tournament/${tournamentId}/declareresults`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Winner,
          FirstRunnerUp,
          SecondRunnerUp,
        }),
        credentials: "include",
      }
    );
    const data = await response.json();
    if (data.stack !== null) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex w-4xl h-4xl flex-col items-center w-80 md:w-[50rem] rounded-md border md:flex-row  mt-6 md:ml-8">
      <div className="h-full w-full ml-8 md:h-[427px] md:w-[400px]">
        <img src={img} alt="" id="output" className="h-[22rem] mt-8" />
      </div>

      <div>
        <div className="md:ml-12 w-[18rem]">
          <label htmlFor="Winner">Winner</label>
          <input
            type="text"
            id="name"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter email/team name for winner"
            value={Winner}
            onChange={(e) => setWinner(e.target.value)}
          />
          <label htmlFor="RunnerUp1">1st Runner Up</label>
          <input
            type="text"
            id="description"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter email/team name for 1st runner up"
            value={FirstRunnerUp}
            onChange={(e) => setFirstRunnerUp(e.target.value)}
          />

          <label htmlFor="RunnerUp2">2nd Runner Up</label>
          <input
            type="text"
            id="TournamentRules"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter email/team name for 2nd runner up"
            value={SecondRunnerUp}
            onChange={(e) => setSecondRunnerUp(e.target.value)}
          />
          <br />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => declareResults()}
              className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
