import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');
  const navigator=useNavigate()
  const SignIn = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            credentials: 'include', // Send cookies with the request
        });

        const data = await response.json();

        if (!data.message) {
            localStorage.setItem('user_data', JSON.stringify(data));
            navigator("/");

            // Set cookie manually using document.cookie
            document.cookie = `token=${data.token}; path=/;`;
            
            // Replace this with your navigation logic
            // For example: window.location.href = '/';
        } else {
            setError(data.message);
        }
    } catch (error) {
        setError(error.message || 'An error occurred');
    }
};

  return (
    <div className='SignIn w-96 h-[26rem] bg-slate-200 m-auto mt-20 md:w-[19rem] '>
        <h1 className='text-center text-2xl pt-4'>Sign in</h1>
        <p className='text-center pt-4'>Welcome back! Please enter your details</p>
      <p className="text-red-400 font-semibold text-center mt-3">{error}</p>
        <div className="SignInForm ml-12  pt-6 md:ml-[0.5rem]">
        <h2>Your Email</h2>
        <input type="email" className='pl-4 pr-4 w-72 h-10 rounded-2xl outline-none' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <h2 className='pt-4'>Your Password</h2>
        <input type="password" className='pl-4 pr-4 w-72 h-10 rounded-2xl outline-none'  required value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className='bg-sky-800 text-white w-80 h-12 mt-8 ml-8  rounded-full md:ml-4 md:w-[17rem]' onClick={()=>SignIn()}>Sign In</button>
        <p className='pt-4 text-center'>New User? <Link to='/signup' className='text-blue-600 underline'>Register</Link> </p>
    </div>
  )
}
