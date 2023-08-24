import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useParams } from 'react-router-dom';
export default function Popup({open,setOpen}) {
  const {tournamentId}=useParams()
const [Individual,setIndividual]=useState(true);
  const cancelButtonRef = useRef(null)
  const [teamName,setTeamName]=useState("");
  const [teamMember1Email,setTeamMember1Email]=useState("");
  const [teamMember2Email,setTeamMember2Email]=useState("");
  const [teamMember3Email,setTeamMember3Email]=useState("");
  const [teamMember4Email,setTeamMember4Email]=useState("");
  const [typeReg,setTypeReg]=useState("individual");

  const registerTournament=async()=>{
    try{
let teamMembers=[teamMember1Email,teamMember2Email,teamMember3Email,teamMember4Email]
      let filterNullMembers=teamMembers.filter(team=>team!=="")    
const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/tournament/registerfortournament`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        user:JSON.parse(localStorage.getItem("user_data"))._id,
        tournament:tournamentId,
        registrationType:typeReg,
        teamName,
        teamMembers:filterNullMembers
      }),
      credentials:'include'
    })
    const data=await response.json()
    
    console.log(data)
  }
  catch(err){
    console.log(err)
  }
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className='text-center p-8'>
                <h1 className='text-3xl font-bold'>Register for Tournament</h1>
               {Individual?
                <>
                 <p className='text-m italic my-4 text-center w-96'>"Life is like playing a violin solo in public and learning the instrument as one goes on.
                "</p>
                <h2 className='text-2xl text-start mt-3 font-semibold'>Individual Registration</h2>
               </>
                :
                <>
                <p className='text-m italic my-4 w-96'>"Collaboration is like carbonation for fresh ideas. Working together bubbles up ideas you would not have come up with solo, which gets you further faster.
                "</p>
                <h2 className='text-2xl text-start mt-3 font-semibold'>Team Registration</h2>
                <p className='italic w-96 text-left'><span className='font-bold'>Note:</span>The person registering will automatically be considered as the team leader.</p>
                </>
            }
               {Individual?
                
                <div className='text-left font-semibold mt-5'>
               {/* <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Your email"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="email1"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                  onClick={(e)=>setIndividualEmail(e.target.value)}
               />*/}
              </div>
            :
            <div className='text-left font-semibold mt-5 overflow-y-scroll max-h-60'>
                <div className="mb-2 block">
                  <Label
                    htmlFor="TeamName"
                    value="Team Name"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="TeamName"
                  placeholder="Enter your Team Name"
                  required
                  type="text"
                  className="mb-4"
                  onChange={(e)=>setTeamName(e.target.value)}
                />
                {/*<div className="mb-2 block">
                  <Label
                    htmlFor="TeamLeader"
                    value="Team Leader Email"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="TeamLeader"
                  placeholder="Enter Team Leader Email"
                  required
                  type="email"
                  className="mb-4"
              />*/}
                <div className="mb-2 block">
                  <Label
                    htmlFor="TeamMember1"
                    value="Team Member 1"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="TeamMember1"
                  placeholder="Enter Team Member 1 Email"
                  required
                  type="email"
                  className="mb-4"
                  onChange={(e)=>setTeamMember1Email(e.target.value)}
                />
                <div className="mb-2 block">
                  <Label
                    htmlFor="TeamMember2"
                    value="Team Member 2"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="TeamMember2"
                  placeholder="Enter Team Member 2 Email"
                //   required
                  type="email"
                  className="mb-4"
                  onChange={(e)=>setTeamMember2Email(e.target.value)}

                />
                <div className="mb-2 block">
                  <Label
                    htmlFor="TeamMember3"
                    value="Team Member 3"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="TeamMember3"
                  placeholder="Enter Team Member 3 Email"
                //   required
                  type="email"
                  className="mb-4"
                  onChange={(e)=>setTeamMember3Email(e.target.value)}
                />
                <div className="mb-2 block">
                  <Label
                    htmlFor="TeamMember4"
                    value="Team Member 4"
                    className='text-m'
                  />
                </div>
                <TextInput
                  id="TeamMember4"
                  placeholder="Enter Team Member 4"
                //   required
                  type="email"
                  className="mb-4"
                  onChange={(e)=>setTeamMember4Email(e.target.value)}
                />
              </div>
            }
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center items-center rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 sm:ml-3 sm:w-auto"
                    onClick={() => registerTournament()}
                  >
                    Register
                    <span className='ml-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</span>
                  </button>
                  {Individual?
                  <p className='text-center mt-8'>Participate as a Team? <span className='text-sky-400 cursor-pointer' onClick={()=>{setIndividual(false)
                  setTypeReg('team')
                  }}>Register Here</span></p>
                :
                <p className='text-center mt-8'>Participate solo? <span className='text-sky-400 cursor-pointer' onClick={()=>{setIndividual(true)
                setTypeReg('individual')
                }}>Register Here</span></p>

                }
                  </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
