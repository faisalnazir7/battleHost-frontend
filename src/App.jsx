import './App.css'
import Home from './Pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import UserProfile from './Pages/UserProfile/UserProfile';
import TournamentDescription from './Pages/TournamentDescription/TournamentDescription';
import Result from './Pages/Result/Result';
import OrganiserTournamentForm from './Pages/OrganiserTournamentForm/OrganiserTournamentForm';
function App() {

  return (
    <>
     {/* <Flowbite> */}
     {/* <DarkThemeToggle /> */}
     <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/profile/edit" element={<UserProfile/>}></Route>   
        <Route exact path="/tournaments/details" element={<TournamentDescription/>}></Route>   
        <Route exact path="/result" element={<Result/>}></Route>   
        <Route exact path="/tournaments/create" element={<OrganiserTournamentForm/>}></Route>   
     </Routes>
      
      {/* </Flowbite> */}
    </>
  )
}

export default App
