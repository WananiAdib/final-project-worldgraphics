import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { IconContext } from "react-icons";
import { MdLogout } from "react-icons/md";

function NavBar(props) {
	const navigate = useNavigate();
	const handleLogout = () => {
		axios
			.post("/api/logout")
			.then((res) => {
				console.log(res.data.message);
				props.onLogout(false);
				navigate("/login");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="header">
			<h1>Homies</h1>
			{props.user && (
				<div className="userinfo">
					<span>@{props.user}</span>
					<MdLogout onClick={handleLogout} size={50} />
				</div>
			)}
		</div>
	);
}

export default NavBar;
