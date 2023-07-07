import './App.css'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import {Routes, Route} from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {

  return (
    <>
     {/* <Flowbite> */}
     {/* <DarkThemeToggle /> */}
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
     </Routes>
      
      {/* </Flowbite> */}
    </>
  )
}

export default App
