import { useLocation, useParams } from "react-router-dom";

function Task() {
	const { id } = useParams();
	const location = useLocation();
	const mockData = {
		Name: "Clean th plates",
		Category: "Clean",
		Assignees: "Hada, hadak, hadik",
		Date: "Today",
		Status: "In progress",
		Approved: "NO",
	};
	return (
		<div>
			<h1>{mockData.Name}</h1>
			<h2>{mockData.Date}</h2>
			<h3>{mockData.Assignees}</h3>
			<h3>{mockData.Status}</h3>
			<h3>{mockData.Approved}</h3>
			{/* <button>Modify</button> */}
		</div>
	);
}

export default Task;
