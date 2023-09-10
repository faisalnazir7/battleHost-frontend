import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateCard({tournament}) {
  const { tournamentId } = useParams();
  const [name,setName]=useState(tournament.name)
  const [description,setDescription]=useState(tournament.description)
  const [rules,setRules]=useState(tournament.rules)
  const [location,setLocation]=useState(tournament.location)
  const [startDateTime,setStartDateTime]=useState(tournament.startDateTime)
  const [endDateTime,setEndDateTime]=useState(tournament.endDateTime)
  const navigator=useNavigate()
  const updateInfo=async()=>{
    const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/${tournamentId}/updatetournament`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        description,
        category:"Hackathon",
        startDateTime,
        endDateTime,
        rules,
        bannerImg:tournament.bannerImg,
        location
      }),
      credentials:"include"
    })
    const data=await response.json()
    // console.log(data)
  }
  const mongoDBDateConverter=(mongoDBDate)=>{
    const date = new Date(mongoDBDate);

// Get the year, month, and day components
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 because months are zero-based
const day = String(date.getDate()).padStart(2, '0');

// Format the date as YYYY-MM-DD for use in an input calendar
const formattedDate = `${year}-${month}-${day}`;
return formattedDate
  }
 useEffect(()=>{
  console.log('data',tournament)
 },[tournament])
  return (
    <div className="flex w-4xl h-4xl flex-col w-[64rem] items-center rounded-md border md:flex-row mt-6 ml-8">
      <div className="h-full w-full ml-8 md:h-[427px] md:w-[534px]">
        <img
          //   src={JSON.parse(localStorage.getItem('user_data'))?.photo?JSON.parse(localStorage.getItem('user_data'))?.photo:SampleUser}
          src={tournament?.bannerImg}
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
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="text"
            id="description"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
            />
          <input
            type="text"
            id="TournamentRules"
            // value={name}
            className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder=" Tournament Rules"
            value={rules}
            onChange={(e)=>setRules(e.target.value)}
          />
          <div className="flex">
            <div className="mt-4">
              <p className="mt-3 text-sm text-gray-600">
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  // value="2023-09-17"
                  //   onChange={(e) => setStartDateTime(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               value={mongoDBDateConverter(startDateTime)}
               onChange={(e)=>{setStartDateTime(e.target.value)
              }}
                  />
              </p>
              <p className="mt-3 text-sm text-gray-600">
                End Date:
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  // value="2023-09-25"
                  //   onChange={(e) => setStartDateTime(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={mongoDBDateConverter(endDateTime)}
                  onChange={(e)=>setEndDateTime(e.target.value)}
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
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm mr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={async()=>{ await updateInfo()
            navigator(`/hostdashboard/manage/${tournamentId}`)
            }}
              >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
