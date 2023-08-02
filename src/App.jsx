import './App.css'
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Dasboard from './Components/Dasboard/Dasboard';
import Profile from './Components/Profile/Profile';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {

  return (
    <>
     {/* <Flowbite> */}
     {/* <DarkThemeToggle /> */}
     <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/dashboard" element={<Dasboard/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/profile/edit" element={<UserProfile/>}></Route>
     </Routes>
      
      {/* </Flowbite> */}
    </>
  )
}

export default App
