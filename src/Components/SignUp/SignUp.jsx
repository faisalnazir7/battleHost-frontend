import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='SignUp w-96 h-[30rem] bg-slate-200 m-auto mt-20'>
        <h1 className='text-center text-2xl pt-4'>Sign Up</h1>
        <p className='text-center pt-4'>Get started by signing up!</p>
        <div className="SignUpForm ml-12  pt-6">
            <h2>Your UserName</h2>
            <input type="text" className='pl-4 pr-4 w-72 h-10 rounded-2xl outline-none' />
            <h2 className='pt-4'>Your Email</h2>
            <input type="text" className='pl-4 pr-4 w-72 h-10 rounded-2xl outline-none' />
            <h2 className='pt-4'>Your Password</h2>
            <input type="text" className='pl-4 pr-4 w-72 h-10 rounded-2xl outline-none' />
        </div>
        <button className='bg-sky-800 text-white w-80 h-12 mt-8 ml-8  rounded-full'>Sign Up</button>
        <p className='pt-4 text-center'>Already Registered? <Link to='/signin' className='text-blue-600 underline'>Log In</Link> </p>
    </div>
  )
}
