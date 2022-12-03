import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useState } from "react";
function JoinHouse() {
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
		event.preventDefault();
		axios
			.post("/api/house/join", formData)
			.then(function (response) {
				console.log(response.data.user);
				navigate('/house');
			})
			.catch(function (error) {
				console.log(error);
				setErr(error.response.data.err);
			});
	};
	return (
		<div className="login">
			<h1>Join House</h1>
			{err && <span style={{color: 'red'}}>{err}</span>}
			<form onSubmit={handleSubmit}>
				<div className="inputDiv">
					<label>House Code</label>
					<input
						type="text"
						name="houseCode"
						required
						onChange={handleChange}
					/>
				</div>
				<div className="signuplogin">
					<input type="submit" />
				</div>
			</form>
		</div>
	);
}

export default JoinHouse;
