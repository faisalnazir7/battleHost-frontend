import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='Navbar h-20 bg-sky-800'>
        <div className="Search">
            <input type="text" placeholder='Search...' />
        </div>
        <button className='rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-20 bg-white ml-auto'>Log In</button>
        <button className='rounded-2xl border border-slate-300 hover:border-slate-400 h-12 w-20 bg-white items-end mr-5'>Register</button>
    </div>
  )
}
