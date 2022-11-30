import { useState } from 'react'
import './Styles/App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from "./Pages/Login";
import CreateHouse from './Pages/CreateHouse';
import JoinHouse from './Pages/JoinHouse';
import Home from './Pages/Home';
import House from './Pages/House';
import Register from './Pages/Register';

function App() {
  return (
      <BrowserRouter>
      <div className='header'>
        <h1>Homies</h1>
      </div>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/login"} />} />
          <Route path="login" element={<Login />} />
          <Route path="create-house" element={<CreateHouse />} />
          <Route path="join-house" element={<JoinHouse />} />
          <Route path="home" element={<Home />} />
          <Route path="house" element={<House />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
