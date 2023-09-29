import React,{useState,useEffect} from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom";
import Animation from '../../assets/animation3.json'
import Lottie from 'lottie-react';
import Logo from "../../../public/bH-black.png";
import toast from 'react-hot-toast';

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Host");
  const[error,setError]=useState("");
  const navigator=useNavigate();
  const SignUp = async() => {
    const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/register`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify({
        name:userName,
        email:email,
        password:password,
        role:role
      })
    })
    const data=await response.json();
    if(!data.message){
      localStorage.setItem('user_data', JSON.stringify(data));
      navigator("/");
      document.cookie = `token=${data.token}; path=/;`;
      toast.success("User registered successfully!")
    }else{
      setError(data.message)
    }

  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="h-full w-full">
          <Lottie
            animationData={Animation}
            loop={true}
            autoplay
            style={{width:'100%',height:'100%',marginLeft:'auto',marginRight:'7rem'}}
          />
          </div>
          
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex items-center mb-3">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-12" />
            </Link>
          </div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <Link to="/signin"
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <p className="text-red-400 font-semibold text-center mt-3">{error}</p>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Username{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Username"
                      id="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="role" className="text-base font-medium text-gray-900">
                      {' '}
                      Your Role{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                  <select
          name="role"
          id="role"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          // ref={roleRef}
          onChange={(e)=>setRole(e.target.value)}
        >
          <option value="host">Host</option>
          <option value="participant">Participant</option>
        </select>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={()=>
                      SignUp()}>
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
