import { Link} from 'react-router-dom';
import "./Home.css";

function Home() {
    return ( 
    <div className='home'>
        <h1>Home</h1>
        <div className='links-wrapper'>
            <Link className='page-link' to={"/house"}>My House</Link>
            <div className='inner-links-wrapper'>
                <Link className='page-link' to={"/create-house"}>Create House</Link>
                <Link className='page-link' to={"/join-house"}>Join House</Link>
            </div>
        </div>
    </div> 
    );
}

export default Home;