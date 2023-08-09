import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown'

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
        <Link to='/dashboard' className='mr-8'><button className='Dashboardbtn rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-32 bg-white items-end mr-8 mt-3.5'>My Dashboard</button></Link>
      <Dropdown/>
        </div>
  )
}
