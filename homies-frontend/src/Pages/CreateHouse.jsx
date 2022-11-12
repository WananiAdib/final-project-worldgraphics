import axios from 'axios';
import {useState} from 'react';
function CreateHouse() {
    const [houseName, setHouseName] = useState("");
    const [users, setHouseUsers] = useState("");

    const handleSubmit = () => {
        axios.post("/api/create-house", {
            name: houseName,
            users: users
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
         <>
         <h1>Create House</h1>
         <form onSubmit={handleSubmit}>
            <div>
                <label>Name of the house</label>
                <input type="text" value={houseName} onChange={(e) => {setHouseName(e.target.value)}} />
            </div>
            <div>
                <label>Add users</label>
                <input type="text" value={users} onChange={(e) => {setHouseUsers(e.target.value)}} />
            </div>
            <input type="submit" value="Login" />
         </form>
         </> 
        );
}

export default CreateHouse;