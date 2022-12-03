import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Styles/Task.css"
function Task() {
	const { id } = useParams();
	const location = useLocation();
	const [data, setData] = useState([]);
	const isExpense = location.pathname.split("/")[1] == "expenses";
	useEffect(() => {
		axios
			.get(`/api/${isExpense ? "expenses" : "chores"}/${id}`)
			.then((res) => {
				console.log(res);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="task">
			<h1>{data.name}</h1>
			<h2>{new Date(data.date).toDateString()}</h2>
			<h3>{data.assignee}</h3>
			<h3>{data.status ? "Done" : "In progress"}</h3>
			<h3>{data.approved ? "Yes" : "Not yet"}</h3>
			{/* <button>Modify</button> */}
		</div>
	);
}

export default Task;
