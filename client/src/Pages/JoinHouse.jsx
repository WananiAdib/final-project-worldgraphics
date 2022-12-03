import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
function JoinHouse() {
	const navigate = useNavigate();
	const formReducer = (state, event) => {
		return {
			...state,
			[event.name]: event.value,
		};
	};

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
			.post("/api/create-house", formData)
			.then(function (response) {
				console.log(response.data.user);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className="login">
			<h1>Join House</h1>
			<form onSubmit={handleSubmit}>
				<div className="inputDiv">
					<label>House Name</label>
					<input
						type="text"
						name="houseName"
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
