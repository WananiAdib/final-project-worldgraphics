import BothTable from "../Components/BothTable";

function Expenses() {
	const expensesData = [
		{
			Name: "Clean th plates",
			Category: "Clean",
			Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
			Value: "400",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
			Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
			Value: "400",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
			Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
			Value: "400",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
			Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
			Value: "400",
		},
		{
			Name: "Clean th plates",
			Category: "Clean",
			Assignees: "Hada, hadak, hadik",
			Date: "Today",
			Status: "In progress",
			Approved: "NO",
			Value: "400",
		},
	];
	return <BothTable data={expensesData} isExpense={true} />;
}

export default Expenses;
