import React from 'react'
import Logo from '../../../public/bH-black.png'

export default function Footer() {
  return (
    <section className="border relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-wrap items-center justify-evenly">
          <div className="w-auto">
            <a href="/">
              <div className="inline-flex items-center">
               <img src={Logo} alt="logo" className='h-20'/>
              </div>
            </a>
          </div>
          
              
            </div>
          </div>
       
      
    </section>
  )
}
