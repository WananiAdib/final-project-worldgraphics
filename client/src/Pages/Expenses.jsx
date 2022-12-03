import BothTable from "../Components/BothTable";
import axios from "axios";
import {useEffect, useState} from 'react'

function Expenses() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('/api/expenses/')
		.then((res) => {
			console.log(res);
			setData(res.data);
		}).catch((err) => {
			console.log(err);
		})
	}, [])
	
	return <BothTable data={data} isExpense={true} />;
}

export default Expenses;
