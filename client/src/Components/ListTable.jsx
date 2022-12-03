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
			<tr key={i} value={i} onClick={(e) => handleClick(e)}>
				<td>{e.Name}</td>
				<td>{e.Category}</td>
				<td>{e.Assignees}</td>
				<td>{e.Date}</td>
				<td>{e.Status}</td>
				<td>{e.Approved}</td>
				{props.isExpense && <td>{e.Value}</td>}
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
