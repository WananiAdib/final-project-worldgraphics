import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, { useReducer, useState } from 'react';
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const formReducer = (state, event) => {
        return {
          ...state,
          [event.name]: event.value
        }
    }
       
    const [formData, setFormData] = useReducer(formReducer, {});
    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }
    const handleSubmit = () => {
       navigate('/home');
       axios.post('/api/login', formData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <div className='login'> 
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>First Name</label>
                    <input type="text" name="givenName" required onChange={handleChange}/>
                </div>
                 <div className='inputDiv'>
                    <label>Last Name</label>
                    <input type="text" name="lastName" required onChange={handleChange}/>
                </div>
                <div className='inputDiv'>
                    <label>Username</label>
                    <input type="text" name="username" required onChange={handleChange}/>
                </div>
                <div className='inputDiv'>
                    <label>Password</label>
                    <input type="password" name="password" required onChange={handleChange}/>
                </div>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input type="email" name="email" required onChange={handleChange}/>
                </div>
                <div className='inputDiv'>
                    <label>Link to photo (optional)</label>
                    <input type="text" name="photo"  onChange={handleChange}/>
                </div>             
                <div className='signuplogin'>
                    <input type="submit"  /> 
                </div>
 
            </form>
        </div>
    );
}

export default Login;