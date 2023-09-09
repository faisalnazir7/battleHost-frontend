import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UpdateCard() {
  const { tournamentId } = useParams();
  const [tournamentData, setTournamentData] = useState([]);
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [rules,setRules]=useState("")
  const getTournamentData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}`
    );
    const data = await response.json();
    console.log(data.getTournamentDetails[0]);
    setTournamentData(data.getTournamentDetails[0]);
    setName(tournamentData.name)
    setDescription(tournamentData.description)
    setRules(tournamentData.rules)
  };
  useEffect(() => {
    getTournamentData();
  }, []);
  return (
    <div className="flex w-4xl h-4xl flex-col w-[64rem] items-center rounded-md border md:flex-row mt-6 ml-8">
      <div className="h-full w-full ml-8 md:h-[427px] md:w-[534px]">
        <img
          //   src={JSON.parse(localStorage.getItem('user_data'))?.photo?JSON.parse(localStorage.getItem('user_data'))?.photo:SampleUser}
          src={tournamentData?.bannerImg}
          alt="no preview"
          //   onClick={() => image.current.click()}
          id="output"
          className="h-[27rem]"
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          //   ref={image}
          //   onChange={(e)=>{
          //     loadFile(e)
          //     setImg(e.target.files[0])
          //     setIsChanged(true)
          //   }}
        />
      </div>

      <div>
        <div className="p-4">
          <input
            type="text"
            id="name"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="HackRx 2.0"
            value={name}
          />
          <input
            type="text"
            id="description"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
          />
          <input
            type="text"
            id="TournamentRules"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" Tournament Rules"
          />
          <div className="flex">
            <div className="mt-4">
              <p className="mt-3 text-sm text-gray-600">
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value="2023-09-17"
                  //   onChange={(e) => setStartDateTime(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </p>
              <p className="mt-3 text-sm text-gray-600">
                End Date:
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value="2023-09-25"
                  //   onChange={(e) => setStartDateTime(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </p>
            </div>
            <div className="ml-32 mt-20 h-10 flex">
              <MapPin className="mt-2 mr-2" />
              <input
                type="text"
                id="Location"
                // value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Remote"
              />
            </div>
          </div>
          <br />
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm mr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
