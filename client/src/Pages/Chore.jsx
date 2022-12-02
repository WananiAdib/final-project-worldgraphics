import { useParams } from "react-router-dom";

function Chore() {
    const {id} = useParams();
    return ( 
    <h1>
        {id}
    </h1> );
}

export default Chore;