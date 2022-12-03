import {
	BsFillFilterSquareFill,
	BsPlusSquareFill,
	BsSortDownAlt,
} from "react-icons/bs";
import ListTable from "../Components/ListTable";
import BothTable from "../Components/BothTable";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Chores() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('/api/chores/')
		.then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		})
	})
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
