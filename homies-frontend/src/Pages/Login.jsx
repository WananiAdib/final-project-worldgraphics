import {useNavigate} from 'react-router-dom';
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    }
    return (
        <div className='login'> 
            <h1>Login</h1>
            <form actions="/login" method="POST">
                <div className='inputDiv'>
                    <label>Username</label>
                    <input type="text" name="username" required />
                </div>
                <div className='inputDiv'>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='signuplogin'>
                    <button onClick={handleSubmit}>LOG IN</button>
                    <button>SIGN UP</button>   
                </div>
            </form>
        </div>
    );
}

export default Login;