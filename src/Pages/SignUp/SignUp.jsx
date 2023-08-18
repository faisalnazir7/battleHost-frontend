import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Host");
  const[error,setError]=useState("");
  const navigator=useNavigate();
  const SignUp = async() => {
    const response=await fetch('http://localhost:5000/api/users/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:userName,
        email:email,
        password:password,
        role:role
      })
    })
    const data=await response.json();
    if(!data.message){
      localStorage.setItem('user_data',JSON.stringify(data))
      localStorage.setItem('web_token',JSON.stringify(data.token))
      navigator('/')
    }else{
      setError(data.message)
    }

  };
  return (
    <div className="SignUp w-96 h-[35rem] bg-slate-200 m-auto mt-20 md:w-[19rem] md:mt-12">
      <h1 className="text-center text-2xl pt-4">Sign Up</h1>
      <p className="text-center pt-4">Get started by signing up!</p>
      <p className="text-red-400 font-semibold text-center mt-3">{error}</p>
      <div className="SignUpForm ml-12  pt-6 md:ml-[0.5rem]">
        <h2>Your UserName</h2>
        <input
          type="text"
          className="pl-4 pr-4 w-72 h-10 rounded-2xl outline-none"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <h2 className="pt-4">Your Email</h2>
        <input
          type="email"
          className="pl-4 pr-4 w-72 h-10 rounded-2xl outline-none"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <h2 className="pt-4">Your Password</h2>
        <input
          type="password"
          className="pl-4 pr-4 w-72 h-10 rounded-2xl outline-none"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <h2 className="pt-4">Your Role</h2>
        <select
          name="role"
          id="role"
          className="pl-4 pr-4 w-72 h-10 rounded-2xl outline-none"
          // ref={roleRef}
          onChange={(e)=>setRole(e.target.value)}
        >
          <option value="host">Host</option>
          <option value="participant">Participant</option>
        </select>
      </div>
      <button className="bg-sky-800 text-white w-80 h-12 mt-8 ml-8  rounded-full md:ml-4 md:w-[17rem]" onClick={()=>
        SignUp()}>
        Sign Up
      </button>
      <p className="pt-4 text-center">
        Already Registered?{" "}
        <Link to="/signin" className="text-blue-600 underline">
          Log In
        </Link>{" "}
      </p>
    </div>
  );
}
