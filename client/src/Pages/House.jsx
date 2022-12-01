import { Link } from "react-router-dom";
import { GiBroom } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import "../Styles/House.css";
function House() {
	const mockDue = [
		{ title: "Clean the plates", date: "Tomorrow" },
		{ title: "Throw the trash", date: "Tomorrow" },
	];
    const mockHomies = [
        {firstName: "Adib", lastName: "El Ounani"},
        {firstName: "Claudio", lastName: "Bravo"},
        {firstName: "Problem", lastName: "Achiri"}
    ]
    const dueSnippet = mockDue.map((e) => {
        return (<tr>
            <td>{e.title}</td>
            <td>{e.date}</td>
        </tr>)
    })
    const homiesSnippet = mockHomies.map((e) => {
        return (<li>{e.firstName} {e.lastName}</li>)
    })
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
                            <col  />
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
                    <ul>
                        {homiesSnippet}
                    </ul>
                </div>
			</div>
		</div>
	);
}

export default House;
