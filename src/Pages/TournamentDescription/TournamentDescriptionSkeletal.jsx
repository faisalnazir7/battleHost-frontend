import React, { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function TournamentDescriptionSkeletal() {
  const navigator=useNavigate()
  return (
    <>
      <Navbar />
      <div className="RegisterTournament">
        <div className="tournament p-5">
         <Skeleton  className="w-full rounded-lg h-96"/>
          <div className="tournament_header md:flex mt-4 block text-center">
            <h1 className=" mt-8 ml-8 font-bold text-4xl m-auto mb-6 md:mb-0"></h1>
            

            
            <Skeleton
              className="rounded-xl w-72 mt-2 md:mr-4  md:ml-auto  p-5 md:text-xl text-lg tracking-wide font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              
            />
             
           
            
          </div>
          <div className="md:shadow-2xl shadow-xl md:w-80 md:h-80 w-full h-full mt-8 rounded-xl ml-auto p-0">
      <Skeleton height={'100%'} width={'100%'} className="md:shadow-2xl shadow-xl md:w-80 md:h-80 w-full h-full mt-8 border-2 rounded-xl ml-auto p-0"/>
          </div>
          <div className="md:ml-12 md:-mt-80 m-auto mt-4">
          <Skeleton className="md:shadow-2xl mt-8 shadow-xl md:w-[60rem] md:h-[20rem] border-2 rounded-xl pl-4 md:pt-1 md:m-0 m-auto "/>
       
         
         
          <div className="rules mt-6">
          <Skeleton className="text-2xl font-semibold text-center md:text-left"/>
          <ul className="list-disc p-4">
          <Skeleton className="text-base mb-2" count={4}/>
          </ul>
          </div>
          <div className="positions mt-6">
          <Skeleton className="text-2xl font-semibold text-center md:text-left"/>
          <div className="prizes_display md:flex block">

          
          </div>
          </div>
          </div>
        </div>
       <div className="py-6">
        <Skeleton
        className="rounded-md p-5 w-36 text-white text-xl flex m-auto"
      />
      

       

     
      </div>
    
      </div>
    </>
  );
}

export default TournamentDescriptionSkeletal;
