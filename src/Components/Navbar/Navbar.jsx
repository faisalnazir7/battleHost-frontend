import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const[isOpen,setOpen]=useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='Navbar h-20 bg-sky-800 '>
        <div className="Search self-center">
            <input type="text" placeholder='Search...'  className='SearchField ml-96 w-96 h-12 rounded-3xl outline-none pl-8 pr-14 md:ml-2.5 md:w-64'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3 -ml-10 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" onClick={toggleOpen} className="More w-6  ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
{isOpen && (
<div className="MoreOptions bg-gray-200 absolute top-16 left-64 rounded w-20 h-16 pt-1 text-center ">
 <Link to='/signin'><button>Log In</button></Link> 
  <Link to='/signup'><button>Register</button></Link>
</div>
)}
        <Link to='/signin' className='ml-auto '><button className='LogInbtn rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-20 bg-white ml-auto mr-6 mt-3.5'>Log In</button></Link>
        <Link to='/signup' className='mr-8'><button className='RegisterBtn rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-20 bg-white items-end mr-8 mt-3.5'>Register</button></Link>
        <Link to='/userprofile' style={{"margin":'auto 0'}}><svg class="w-6 h-6 my-auto mr-8 cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 19">
        <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
      </svg></Link>
        </div>
  )
}
