import {
	BsFillFilterSquareFill,
	BsPlusSquareFill,
	BsSortDownAlt,
} from "react-icons/bs";
import ListTable from "../Components/ListTable";
import "../Styles/Chores.css";
function Chores() {
	const mockChores = [
		{
			Name: "Clean th plates",
			Category: "Clean",
            Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
            Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
            Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
            Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
            Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
		},
	];

	return (
		<div className="table-wrapper">
			<div className="set-wrapper">
				<BsPlusSquareFill size={80} />
				<BsFillFilterSquareFill size={80} />
			</div>
			<ListTable data={mockChores}/>
		</div>
	);
}

export default Chores;
