import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
    const navigate = useNavigate();
    const handleLogout = () => {
        axios.post('/api/logout')
        .then((res)=> {
            console.log(res.data.message);
            props.onLogout(false);
            navigate('/login');
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='header'>
            <h1>Homies</h1>
            <span>
            logged in as: @{props.user}
            </span>
            <button onClick={handleLogout}>Logout</button>
        </div>
      );
}

export default NavBar;