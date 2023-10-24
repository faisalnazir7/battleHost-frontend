import React,{useEffect} from 'react';
import Navbar from '../../Components/Navbar/Navbar'; 
import { Link } from 'react-router-dom';
import SampleUser from '../../assets/sampleuser.png'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigator=useNavigate()
    useEffect(()=>{
  if(!document.cookie.split('=')[1]){
  navigator('/signin')
  }
    },[])
  return (
    <>
    <Navbar/>
    <div className='UserProfile block md:flex'>
    <div className="userprofileLeft text-center">
    <div className="mt-20 ml-16 mr-8 md:mb-5 md:ml-40">
    <img className="md:w-72 w-40 inline-block md:ml-6 shadow-lg rounded-full cursor-pointer" src={JSON.parse(localStorage.getItem('user_data'))?.photo ? JSON.parse(localStorage.getItem('user_data'))?.photo : SampleUser} alt="" style={{ maxHeight: '50%' , maxWidth:'80%'}}/>


    <div className="font-medium dark:text-white text-xl md:text-3xl mt-12 text-center ">
        <div>{JSON.parse(localStorage.getItem('user_data'))?.name}</div>
    </div>
</div>
    </div>
    <div className="profile_body mb-10px px-10 py-2 border-2 rounded-md shadow-md m-auto md:mr-[10rem] mt-8 md:w-[45rem] w-11/12" >
    <div className="profile_header" >
    <h1 className='md:text-3xl text-2xl text-center'>Profile Settings</h1>
    </div>
    <div className='mb-5'>
<form className='mt-8'>



<div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={JSON.parse(localStorage.getItem('user_data'))?.name} disabled/>
    </div>
    <div >
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={JSON.parse(localStorage.getItem('user_data'))?.email} disabled/>
</div> 

    <div>
        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={JSON.parse(localStorage.getItem('user_data'))?.phone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" disabled/>
    </div>
  

</div>

<div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" disabled/>
</div> 
<Link to='/profile/edit'><button type="button" className="text-white bg-sky-800 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit-content sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-800 dark:focus:ring-blue-800">Edit Profile</button></Link>

</form>
</div> 
    </div>
    </div>
    </>
  );
};

export default Profile;
