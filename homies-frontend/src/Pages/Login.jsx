import {redirect} from 'react-router-dom';

function Login() {
    const handleSubmit = () => {
        redirect('/home')
    }
    return (
        <>
            <h1> Homies</h1>
            <h1>Login</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input></input>
                </div>
                <div>
                    <label>Password</label>
                    <input></input>
                </div>
                <button onClick={handleSubmit}>Login</button>
                <button>Signup</button>   
            </form>
        </>
    );
}

export default Login;