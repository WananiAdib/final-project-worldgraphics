import axios from "axios";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateHouse() {
	const navigate = useNavigate();
	const [houseCode, setHouseCode] = useState("");
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
			.post("/api/house/create", formData)
			.then(function (response) {
				console.log(response);
				setHouseCode(response.data.id);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className="login">
			<h1>Create House</h1>
			{!houseCode ? (
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
			) : (
				<div className="success">
					<h1>New House code</h1>
					<p>Send it to your roommates so they can join your house</p>
					<h2>{houseCode}</h2>
				</div>
			)}
		</div>
	);
}

export default CreateHouse;
