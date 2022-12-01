import { useEffect, useState } from 'react'
import './Styles/App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from "./Pages/Login";
import CreateHouse from './Pages/CreateHouse';
import JoinHouse from './Pages/JoinHouse';
import Home from './Pages/Home';
import House from './Pages/House';
import Register from './Pages/Register';
import ProtectedRoute from './Components/ProtectedRoute';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get("/api/login/success")
    .then((res) => {
      if (res.status == 200) {
        setUser(res.data.user);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
      <BrowserRouter>
      <div className='header'>
        <h1>Homies</h1>
        <span>
          logged in as: @{user}
        </span>
        <button>Logout</button>
      </div>
        <Routes>
          <Route path="login" element={user ?  <Navigate to="/" /> : <Login />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="create-house" element={<CreateHouse />} />
            <Route path="join-house" element={<JoinHouse />} />
            <Route path="/" element={<Home />} />
            <Route path="house" element={<House />} />
          </Route>
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
