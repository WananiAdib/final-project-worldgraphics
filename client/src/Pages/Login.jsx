import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import axios from "axios";
import { useReducer, useState } from "react";

function Login(props) {
	const navigate = useNavigate();
	const formReducer = (state, event) => {
		return {
			...state,
			[event.name]: event.value,
		};
	};
	const [err, setErr] = useState();
	const [formData, setFormData] = useReducer(formReducer, {});
	const handleChange = (event) => {
		setFormData({
			name: event.target.name,
			value: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		// TODO: Check if logged in otherwise showcase error message
		event.preventDefault();
		axios
			.post("/api/auth/login", {
				username: formData.username,
				password: formData.password,
			})
			.then(function (response) {
				console.log(response);
				props.handleAuth(true);
				navigate("/");
			})
			.catch(function (error) {
				console.log(error);
				setErr("Wrong username or password");
			});
	};
	return (
		<div className="login">
			<h1>Login</h1>
			{err && <span style={{color: 'red'}}>{err}</span>}
			<form onSubmit={handleSubmit}>
				<div className="inputDiv">
					<label>Username</label>
					<input
						type="text"
						name="username"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="inputDiv">
					<label>Password</label>
					<input
						type="password"
						name="password"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="signuplogin">
					<input type="submit" value="LOGIN" />
					<button
						onClick={() => {
							navigate("/register");
						}}
					>
						REGISTER
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
