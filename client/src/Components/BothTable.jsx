import {
	BsFillFilterSquareFill,
	BsPlusSquareFill,
	BsSortDownAlt,
} from "react-icons/bs";
import ListTable from "./ListTable";
import '../Styles/BothTable.css';
import { useNavigate } from "react-router-dom";
function BothTable({isExpense, data}) {
    const navigate = useNavigate();
    return ( 
        <div className="table-wrapper">
			<div className="set-wrapper">
				<BsPlusSquareFill size={80} onClick={() => navigate('add')}/>
				<BsFillFilterSquareFill size={80} />
			</div>
			<ListTable isExpense={isExpense} data={data} />
		</div>
     );
}

export default BothTable;