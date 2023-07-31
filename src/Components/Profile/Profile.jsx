
import React from 'react';
import Navbar from '../Navbar/Navbar';


const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="Profile flex">
        
        
        <div className="LeftProfile mt-24 ml-24">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="w-72 mx-16 mt-16 rounded-full shadow-lg"
            alt="Avatar"

          />
          <button className="editbtn mx-14 mt-10 rounded-full rounded-2xl bg-sky-500 shadow-2xl bg-cover w-80 h-16 shadow-gray-400 hover:bg-sky-400 font-sans font-semibold text-white text-xl">Edit Profile</button>
        </div>
        <div className="RightProfile m-auto mr-[10rem]">
        <h1 className="text-3xl mt-4 ml-8 hover:subpixel-antialiased font-sans font-semibold ">Profile</h1>
          <div className="PersonalProfile shadow-md w-[45rem] mt-4 h-[39rem] rounded-lg grid gap-6 mb-6 md:grid-cols-2 bg-grey-200 ">
            <div className="mb-8 ml-12 mt-12">
            <h1 className="font-sans font-semibold text-xl">Name</h1>
            <h1 className="bg-white w-[39rem] mt-2 rounded-md pl-2 text-lg p-1.5 text-gray-400">John</h1>
            </div>
            <div className="mb-8 ml-12">
            <h1 className="font-sans font-semibold text-xl ">Email</h1>
            <h1 className="bg-white w-[39rem] mt-2 rounded-md pl-2 text-lg p-1.5 text-gray-400">abc@gmail.com</h1>
            </div>
            <div className="mb-8 ml-12">
            <h3 className="font-sans font-semibold text-xl">Phone Number</h3>
            <h1 className="bg-white w-[39rem] mt-2 rounded-md pl-2 text-lg p-1.5 text-gray-400">+91 1234567890</h1>
            </div>
            <div className="mb-8 ml-12">
            <h3 className="font-sans font-semibold text-xl">Password</h3>
            <h1 className="bg-white w-[39rem] mt-2 rounded-md pl-2 text-lg p-1.5 text-gray-400">abc@123*</h1>
            </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Profile;
