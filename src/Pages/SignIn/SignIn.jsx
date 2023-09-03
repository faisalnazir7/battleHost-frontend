import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Animation from '../../assets/animation2.json'
import Lottie from 'lottie-react';

export default function SignIn() {
        const[email,setEmail]=useState('');
        const[password,setPassword]=useState('');
        const[error,setError]=useState('');
        const navigator=useNavigate()
        const SignIn = async () => {
          try {
              const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/login`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      email: email,
                      password: password,
                  }),
                  credentials: 'include', 
              });
              const data = await response.json();

              if (!data.message) {
                  localStorage.setItem('user_data', JSON.stringify(data));
                  navigator("/");
                  document.cookie = `token=${data.token}; path=/;`;
              } else {
                  setError(data.message);
              }
          } catch (error) {
              setError(error.message || 'An error occurred');
          }
      };
      
  return (
    <section className='mt-6'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>

            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link to='/signup'
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <p className="text-red-400 font-semibold text-center mt-3">{error}</p>
            
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      required value={email}
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      required value={password} onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" 
                    onClick={()=>SignIn()}
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
          </div>
        </div>
        <div className="h-full w-full">
        <Lottie
            animationData={Animation}
            loop={false}
            autoplay
            style={{width:'100%',height:'100%',marginLeft:'auto',marginRight:'7rem'}}
          />
        </div>
      </div>
    </section>
  )
}
