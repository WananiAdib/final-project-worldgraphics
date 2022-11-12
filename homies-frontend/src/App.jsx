import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from "./Pages/Login";
import CreateHouse from './Pages/CreateHouse';
import JoinHouse from './Pages/JoinHouse';
import Home from './Pages/Home';
import House from './Pages/House';

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
        </Routes>
      </BrowserRouter>
  )
}

export default App
