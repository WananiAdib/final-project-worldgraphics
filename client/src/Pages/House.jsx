import { Link } from "react-router-dom";
import { GiBroom } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import "../Styles/House.css";
import { useEffect, useState } from "react";
import axios from "axios";
function House() {
	const [homies, setHomies] = useState([]);
	const [latest, setLatest] = useState([]);
	useEffect(() => {
		axios
			.get("/api/house/roommates")
			.then((res) => {
				console.log(res);
				setHomies(res.data.info);
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get("/api/chores")
			.then((res) => {
				setLatest(res.data.slice(0, 5));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const dueSnippet = latest.map((e) => {
		return (
			<tr>
				<td>{e.name}</td>
				<td>{new Date(e.date).toLocaleDateString()}</td>
			</tr>
		);
	});
	const homiesSnippet = homies.map((e) => {
		return (
			<li>
				{e.firstName} {e.lastName}
			</li>
		);
	});
	return (
		<div className="house">
			<div className="inner-links-wrapper">
				<Link className="page-link" to={"/chores"}>
					<GiBroom
						style={{
							fill: "black",
							backgroundColor: "transparent",
						}}
						size={80}
					/>
				</Link>
				<Link className="page-link" to={"/expenses"}>
					<GrMoney
						style={{
							fill: "black",
							backgroundColor: "transparent",
						}}
						size={80}
					/>
				</Link>
			</div>
			<div className="todo-homies-wrapper">
				<div className="todo-table">
					<table>
						<colgroup>
							<col id="due" />
							<col />
						</colgroup>
						<tbody>
							<tr>
								<th>TODO</th>
								<th>Date</th>
							</tr>
							{dueSnippet}
						</tbody>
					</table>
				</div>
				<div className="homies">
					<h3>Roommates</h3>
					<ul>{homiesSnippet}</ul>
				</div>
			</div>
		</div>
	);
}

export default House;
