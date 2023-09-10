import React, { useState } from "react";
import Popup from "./Popup";
import Navbar from "../../Components/Navbar/Navbar";
import Prizes from "./Prizes";
import { useNavigate, useParams } from "react-router-dom";
import dateFormatter from "../../util/dateFormatter";
import { Clock } from 'lucide-react';

function RegisterTournament({tournament}) {
  const [open, setOpen] = React.useState(false);
  const navigator=useNavigate()
  const {tournamentId}=useParams()
  return (
    <>
      <Navbar />
      <div className="RegisterTournament">
        <div className="tournament p-5">
          <img
            src={tournament?.bannerImg?
              tournament?.bannerImg
              :
              "https://d8it4huxumps7.cloudfront.net/uploads/images/6481ae7a08a26_flipkart-grid-50-software-development-track.png?d=1280x371"
            }
            alt="no preview"
            className="w-full rounded-lg"
          />
          <div className="tournament_header flex mt-4">
            <h1 className="mt-8 ml-8 font-bold text-4xl">{tournament?.name}</h1>
            

            {JSON.parse(localStorage.getItem('user_data'))?.role==='participant' && tournament?.endDateTime&& Date.now()<=new Date(tournament.endDateTime)?
            <button
              className="rounded-xl mt-2 mr-4 bg-black ml-auto p-5 text-xl tracking-wide font-semibold text-red-400 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-red-500"
              
              onClick={() => setOpen(true)}
            >
              Register for Tournament
            </button>
            :
            <p></p>
            }
            
          </div>
          <div className="shadow-2xl w-80 h-80 mt-8 border-2 rounded-xl pl-4 pt-1 ml-auto">
            <h2 className="font-bold text-2xl mt-6 text-center text-green-500">Application Date</h2>
            <p className="font-bold flex text-lg mt-8 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

{' '}&nbsp;From  <br/>{dateFormatter(tournament?.startDateTime, 0)}
          </p>
          
          <p className="font-bold flex text-lg mt-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        
{' '}&nbsp;Till <br/> {dateFormatter(tournament?.endDateTime,0)}
          </p>
          </div>
          <div className="ml-12 -mt-80">
          <div className="shadow-2xl w-[60rem] h-[20rem] border-2 rounded-xl pl-4 pt-1">
          <p className="font-bold flex mt-8 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
           {' '}&nbsp; {tournament?.organizerId?.name}
          </p>
          <p className="font-bold flex text-lg mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
           {' '}&nbsp;{tournament?.location?tournament.location:"Online"}
          </p>
          <p className="font-bold flex text-lg mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
{' '}&nbsp;Upto {tournament?.teamSize} Members
          </p>
          {/* <p className="font-bold flex text-lg mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

{' '}&nbsp;From {dateFormatter(tournament?.startDateTime,0)}
          </p>
          <p className="font-bold flex text-lg mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        
{' '}&nbsp;Till {dateFormatter(tournament?.endDateTime,0)}
          </p> */}
          <p className="font-bold text-lg mt-16 italic text-red-500">Already {tournament?.participants.length} Participants have registered for the tournament</p>
          </div>
          <div className="description mt-6">
            <h1 className="text-2xl font-semibold">Tournament Description</h1>
            <p className="text-base font-medium">
              {tournament?.description}
            </p>
          </div>
          <div className="rules mt-6">
          <h1 className="text-2xl font-semibold">Rules</h1>
          <ul className="list-disc p-4">
          <li className="text-base">{tournament?.rules}</li>
          {/*<li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>*/}
          </ul>
          </div>
          <div className="positions mt-6">
          <h1 className="text-2xl font-semibold">Rewards & Prizes</h1>
          <div className="prizes_display flex">

          {tournament?.prizes.length>0?
            tournament?.prizes?.map(prize=>(
            <Prizes pos={prize?.name} cash={prize?.description}/>
          ))
         :
         <p>Yet to reveal. Stay tuned!</p>
          }
          </div>
          </div>
          </div>
        </div>
       <div className="py-6">
        <button
        className="rounded-md p-5 bg-teal-400 text-white text-xl flex m-auto"
        onClick={()=>navigator(`/tournaments/details/${tournamentId}/result`)}
      >
       <span className="mr-2">Get Results</span> 

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

      </button>
      </div>
        <Popup open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default RegisterTournament;
