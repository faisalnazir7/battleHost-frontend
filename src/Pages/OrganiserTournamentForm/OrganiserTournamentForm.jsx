import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom";
import UploadIcon from "../../assets/uploadicon.jpg"
export default function OrganiserTournamentForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const[rules,setRules]=useState("");
  const[prize1,setPrize1]=useState("");
  const[prize2,setPrize2]=useState("");
  const[prize3,setPrize3]=useState("");
  const[bannerImg,setBannerImg]=useState("");
  const[teamSize,setTeamSize]=useState("");
  const[location,setLocation]=useState("");
  const[image,setImage]=useState("");
  const navigator=useNavigate();
  const loadFile = (e) => {
    let output = document.getElementById("output");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };
  const sendImageToCloudinary = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "battlehost_assets");
    data.append("cloud_name", `${import.meta.env.VITE_CLOUD_KEY}`);
    fetch(`${import.meta.env.VITE_CLOUD_URL}`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // setUrl(data.url);
        console.log(data.url);
      })
      .catch((err) => console.log(err));
  };
  const createTournament = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/createtournament`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: title,
                description: description,
                startDateTime: startDateTime,
                endDateTime: endDateTime,
                rules: rules,
                prizes: [
                    {
                        name: 'winner',
                        description: prize1
                    },
                    {
                        name: '1st RunnerUp',
                        description: prize2
                    },
                    {
                        name: '2nd RunnerUp',
                        description: prize3
                    }
                ],
                bannerImg: bannerImg,
                teamSize: teamSize,
                location: location
            }),
            credentials: 'include', // Send cookies with the request
        });

        const data = await response.json();
        navigator("/dashboard")
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

    
  return (
    <>
    <Navbar/>
    <div className='OrganiserTournamentForm bg-white m-auto w-1/2 mt-8'>
    <form onSubmit={(e)=>{e.preventDefault(); createTournament()}}>
      <div className="space-y-12">
        <div >
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">Create your own Tournamnet</h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-base font-medium leading-6 text-gray-900">
                Tournament Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-base font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-base font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
        {/*<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" id='output'/>*/}
                  <img src={UploadIcon} alt="no preview" id='output' height={100} width={100} className='m-auto'/>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept='image/*' 
                      onChange={(e)=>{
                        loadFile(e)
                        setImage(e.target.files[0])
                        // console.log(e.target.files[0])
                      }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <button type='button' onClick={()=>sendImageToCloudinary()}>Send</button>
                </div>
              </div>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="location" className="block text-base font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="startDate" className="block text-base font-medium leading-6 text-gray-900">
              Start Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={startDateTime} 
                  onChange={(e) => setStartDateTime(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="endDate" className="block text-base font-medium leading-6 text-gray-900">
              End Date
              </label>
              <div className="mt-2">
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={endDateTime} 
                  onChange={(e) => setEndDateTime(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="teamSize" className="block text-base font-medium leading-6 text-gray-900">
              Team Size
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="teamSize"
                  id="teamSize"
                  autoComplete="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="rules" className="block text-base font-medium leading-6 text-gray-900">
              Tournament Rules
              </label>
              <div className="mt-2">
                <textarea
                  name="rules"
                  id="rules"
                  rows={3}
                  value={rules}
                  onChange={(e) => setRules(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

            <h2 className="block text-base font-medium leading-6 text-gray-900">
              Prize Description
              </h2>
            <div className="col-span-full">
              <label htmlFor="prize1" className="block text-base font-medium leading-6 text-gray-900">
              1st Prize
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="prize1"
                  id="prize1"
                  autoComplete="prize1"
                  value={prize1}
                  onChange={(e) => setPrize1(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="prize2" className="block text-base font-medium leading-6 text-gray-900">
              2nd Prize
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="prize2"
                  id="prize2"
                  autoComplete="prize2"
                  value={prize2}
                  onChange={(e) => setPrize2(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="prize3" className="block text-base font-medium leading-6 text-gray-900">
              3rd Prize
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="prize3"
                  id="prize3"
                  value={prize3}
                  onChange={(e) => setPrize3(e.target.value)}
                  autoComplete="prize3"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
          </div>
        </div>

       
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Save
        </button>
      </div>
    </form>
    </div>
    </>
  )
}
