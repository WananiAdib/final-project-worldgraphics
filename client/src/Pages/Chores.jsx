import {
	BsFillFilterSquareFill,
	BsPlusSquareFill,
	BsSortDownAlt,
} from "react-icons/bs";
import ListTable from "../Components/ListTable";
import BothTable from "../Components/BothTable";
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

	return <BothTable data={mockChores} isExpense={false} />;
}

export default Chores;
