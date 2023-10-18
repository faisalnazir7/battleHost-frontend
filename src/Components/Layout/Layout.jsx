import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
export default function Layout({children}) {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <div className='ml-[5rem] w-full'>
    {children}
    </div>
    </div>
    </>
    
  )
}
