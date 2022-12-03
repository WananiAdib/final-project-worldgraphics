import { useEffect, useState } from "react";
import "./Styles/App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import Login from "./Pages/Login";
import CreateHouse from "./Pages/CreateHouse";
import JoinHouse from "./Pages/JoinHouse";
import Home from "./Pages/Home";
import House from "./Pages/House";
import Register from "./Pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Chores from "./Pages/Chores";
import Expenses from "./Pages/Expenses";
import Task from "./Pages/Task";
import AddTask from "./Pages/AddTask";

function App() {
	const [auth, setAuth] = useState(false);
	const [user, setUser] = useState("");
	useEffect(() => {
		console.log("auth changed");
	}, [auth]);
	useEffect(() => {
		axios
			.get("/api/auth")
			.then((res) => {
				if (res.status == 200) {
					console.log("checking auth");
					setUser(res.data.user?.username);
					setAuth(res.data.success);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [auth]);
	return (
		<BrowserRouter>
			<NavBar user={user} onLogout={setAuth} />
			<Routes>
				<Route
					path="login"
					element={
						user ? (
							<Navigate to="/" />
						) : (
							<Login handleAuth={setAuth} />
						)
					}
				/>
				<Route element={<ProtectedRoute user={user} />}>
					<Route path="create-house" element={<CreateHouse />} />
					<Route path="chores" element={<Chores />} />
					<Route path="expenses" element={<Expenses />} />
					<Route path="join-house" element={<JoinHouse />} />
					<Route path="/" element={<Home />} />
					<Route path="house" element={<House />} />
					<Route path="chores/:id" element={<Task />} />
					<Route path="expenses/:id" element={<Task />} />
					<Route path="chores/add" element={<AddTask />} />
					<Route path="expenses/add" element={<AddTask />} />
				</Route>
				<Route path="register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
