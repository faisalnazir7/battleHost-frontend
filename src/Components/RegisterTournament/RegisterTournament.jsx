import React from 'react'
import Popup from './Popup'

function RegisterTournament() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="RegisterTournament">
    <button className='rounded-md px-4 py-4 bg-teal-400 text-white text-xl' onClick={()=>setOpen(true)}>RegisterTournament</button>
    <Popup open={open} setOpen={setOpen}/>
    </div>
    
  )
}

export default RegisterTournament