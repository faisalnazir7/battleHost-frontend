import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className="Search">
            <input type="text" placeholder='Search...' />
        </div>
        <button>Log In</button>
        <button>Register</button>
    </div>
  )
}
