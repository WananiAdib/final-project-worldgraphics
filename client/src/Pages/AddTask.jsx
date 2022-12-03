import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useReducer } from "react";
function AddTask() {
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
			.post("/api/register", formData)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
				navigate("/home");
			});
	};
	// Check if expenses add or Chore expesnse
	const location = useLocation();
	const isExpense = location.pathname.split("/")[1] == "expenses";
	return (
		<div className="login">
			<h1>Add {isExpense ? "expense" : "chore"}</h1>
			<form onSubmit={handleSubmit}>
				<div className="inputDiv">
					<label>Name</label>
					<input
						type="text"
						name="Name"
						required
						onChange={handleChange}
					/>
				</div>
				<div className="inputDiv">
					<label>Category</label>
					<input
						type="text"
						name="Category"
						required
						onChange={handleChange}
					/>
				</div>
				<div className="inputDiv">
					<label>Assignees</label>
					<input
						type="text"
						name="Assignees"
						required
						onChange={handleChange}
					/>
				</div>
				<div className="inputDiv">
					<label>Date</label>
					<input
						type="text"
						name="Date"
						required
						onChange={handleChange}
					/>
				</div>
				<div className="inputDiv">
					<label>Status</label>
					<input
						type="text"
						name="Status"
						required
						onChange={handleChange}
					/>
				</div>
				{isExpense && (
					<div className="inputDiv">
						<label>Value</label>
						<input
							type="number"
							name="Value"
							required
							onChange={handleChange}
						/>
					</div>
				)}
				<div className="signuplogin">
					<input type="submit" />
				</div>
			</form>
		</div>
	);
}
export default AddTask;
