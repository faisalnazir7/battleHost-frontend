import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SampleUser from "../../assets/sampleuser.png";
import { useNavigate } from "react-router-dom";
function UserProfile() {
  const image = useRef();
  const navigator = useNavigate();
  useEffect(() => {
    if (!document.cookie.split("=")[1]) {
      navigator("/signin");
    }
  }, []);
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("user_data"))?.name
  );
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem("user_data"))?.phone
  );
  const [img,setImg]=useState(JSON.parse(localStorage.getItem("user_data"))?.photo)
  const updateUser=async()=>{
    const response=await fetch('http://localhost:5000/api/users/updateuser',{
        method:'PATCH',
        body:JSON.stringify({
            name:name,
            phone:phone,
            photo:img
        }),
    credentials:'include'
    })
    const data=await response.json()
    console.log(data)
    localStorage.setItem('user_data',JSON.stringify(data))
  }
  return (
    <>
      <Navbar />
      <div className="UserProfile flex">
        <div className="userprofileLeft">
          <div className="mt-20 ml-40 mb-5 ">
            <img
              className="w-72  shadow-lg rounded-full cursor-pointer"
              src={JSON.parse(localStorage.getItem('user_data'))?.photo?JSON.parse(localStorage.getItem('user_data'))?.photo:SampleUser}
              alt=""
              onClick={() => image.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={image}
            />

            <div className="font-medium dark:text-white text-3xl mt-12 text-center">
              <div>{JSON.parse(localStorage.getItem("user_data"))?.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </div>
        </div>
        <div className="profile_body  mb-10px px-10 py-2 border-2 rounded-md shadow-md m-auto mr-[10rem] mt-8 w-[45rem]">
          <div className="profile_header">
            <h1 className="text-3xl">Profile Settings</h1>
          </div>
          <div className="mb-5">
            <form className="mt-8" onSubmit={(e)=>{
                e.preventDefault()
                updateUser()
            }}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="John"
                    required
                    onChange={(e)=>{setName(e.target.value)
                    // console.log(name)
                    }}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={JSON.parse(localStorage.getItem('user_data'))?.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="john.doe@company.com"
                    required
                    disabled
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="123-45-678"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    onChange={(e)=>setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                  disabled
                />
              </div>
              <div className="flex items-start mb-6">
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  The updated changes will take effect immediately on clicking
                  the button below.
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-sky-800 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit-content sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-800 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
