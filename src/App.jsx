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
import LiveTournaments from './Pages/LiveTournaments/LiveTournaments';
import AccessDenied from './Pages/AccessDenied/AccessDenied';
import HostDashboard from './Pages/HostDashboard/HostDashboard';
import TournamentManage from './Pages/TournamentManage/TournamentManage';
import ParticipantsManage from './Pages/ParticipantsManage/ParticipantsManage';
import TournamentManageUpdate from './Pages/TournamentManageUpdate/TournamentManageUpdate';
import ManageResult from './Pages/ManageResult/ManageResult';
import ToasterContainer from './Components/Toaster/ToasterContainer';

function App() {

  return (
    <>
    <ToasterContainer/>
     <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/profile/edit" element={<UserProfile/>}></Route>   
        <Route exact path="/tournaments/details/:tournamentId" element={<TournamentDescription/>}></Route>   
        <Route exact path="/tournaments/details/:tournamentId/result" element={<Result/>}></Route>   
        <Route exact path="/tournaments/create" element={<OrganiserTournamentForm/>}></Route>   
        <Route exact path="/tournaments/live" element={<LiveTournaments/>}></Route>   
        <Route exact path="/accessdenied" element={<AccessDenied/>}></Route>   
        <Route exact path="/hostdashboard" element={<HostDashboard/>}></Route>
        <Route exact path="/hostdashboard/manage/:tournamentId/general" element={<TournamentManage/>}></Route>
        <Route exact path="/hostdashboard/manage/:tournamentId/participants" element={<ParticipantsManage/>}></Route>
        <Route exact path="/hostdashboard/manage/:tournamentId/update" element={<TournamentManageUpdate/>}></Route>
        <Route exact path="/hostdashboard/manage/:tournamentId/result" element={<ManageResult/>}></Route>
     </Routes>
    </>
  )
}

export default App
