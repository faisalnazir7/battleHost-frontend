import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='Navbar h-20 bg-sky-800'>
        <div className="Search self-center">
            <input type="text" placeholder='Search...'  className='SearchField ml-96 w-96 h-12 rounded-3xl outline-none pl-8 pr-14'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3 -ml-10 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            
        </div>
        <button className='rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-20 bg-white ml-auto mr-6 mt-3.5'>Log In</button>
        <button className='rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-20 bg-white items-end mr-8 mt-3.5'>Register</button>
    </div>
  )
}
