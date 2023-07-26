import './App.css'
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Dasboard from './Components/Dasboard/Dasboard';

function App() {

  return (
    <>
     {/* <Flowbite> */}
     {/* <DarkThemeToggle /> */}
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/dashboard" element={<Dasboard/>}></Route>
     </Routes>
      
      {/* </Flowbite> */}
    </>
  )
}

export default App
