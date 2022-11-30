import {useNavigate} from 'react-router-dom';
import "../Styles/Login.css";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    }
    return (
        <div className='login'> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Username</label>
                    <input type="text" name="username" required />
                </div>
                <div className='inputDiv'>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='signuplogin'>
                    <input type="submit" value="LOGIN" />
                    <button onClick={() => {navigate('/register')}} >REGISTER</button>  
                </div>
            </form>
        </div>
    );
}

export default Login;