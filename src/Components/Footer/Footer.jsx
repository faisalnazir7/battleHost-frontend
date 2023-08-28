import React from 'react'
import Logo from '../../../public/bH-black.png'

export default function FooterThree() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-evenly">
          <div className="w-auto p-8">
            <a href="/">
              <div className="inline-flex items-center">
               <img src={Logo} alt="logo" className='h-20'/>
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  About Us
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
              
            </div>
          </div>
       
      
    </section>
  )
}
