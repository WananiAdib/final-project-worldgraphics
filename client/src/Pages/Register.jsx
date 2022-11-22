import {useNavigate} from 'react-router-dom';
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
       console.log(formData)
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
                    <input type="text" name="email" required onChange={handleChange}/>
                </div>
                <div className='inputDiv'>
                    <label>Link to photo (optional)</label>
                    <input type="text" name="photo"  onChange={handleChange}/>
                </div>             
                <div className='signuplogin'>
                    <button >SIGN UP</button>   
                </div>
 
            </form>
        </div>
    );
}

export default Login;