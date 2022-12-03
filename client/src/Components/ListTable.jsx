import { useNavigate } from "react-router-dom";
import "../Styles/ListTable.css";
function ListTable(props) {
	const navigate = useNavigate();
	const handleClick = (e) => {
		navigate(
			`/${
				props.isExpense ? "expenses" : "chores"
			}/${e.currentTarget.getAttribute("value")}`
		);
		console.log(e.currentTarget.getAttribute("value"));
	};
	const rows = props.data.map((e, i) => {
		return (
			<tr key={i} value={e._id} onClick={(e) => handleClick(e)}>
				<td>{e.name}</td>
				<td>{e.category}</td>
				<td>{e.assignee}</td>
				<td>{new Date(e.date).toDateString()}</td>
				<td>{e.status ? "Done" : "In progress"}</td>
				<td>{e.approved? "Yes": "Not yet"}</td>
				{props.isExpense && <td>{e.value}</td>}
			</tr>
		);
	});
	return (
		<div className="ltables">
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Assignees</th>
						<th>Date</th>
						<th>Status</th>
						<th>Approved</th>
						{props.isExpense && <th>Value</th>}
					</tr>
					{rows}
				</tbody>
			</table>
		</div>
	);
}

export default ListTable;
