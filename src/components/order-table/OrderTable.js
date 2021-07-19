import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Button, Image, Spinner, Table } from "react-bootstrap";
import {
	fetchOrders
} from "../../pages/order/orderAction"

const OrderTable = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading, status, orderList } = useSelector(
		state => state.order
	);

	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch]);

	// const handleOnDelete = _id => {
	// 	dispatch(deleteProduct(_id));
	// };

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						{/* <th>Status</th> */}
						<th>Customer Name</th>
						<th>Item</th>
						<th>Price</th>
						<th> Quantity </th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody>
					{orderList.length &&
						orderList.map((row, i) => (
							<tr key={row._id}>
								<td>{i + 1}</td>
								{/* <td>
									{row.status ? (
										<i class="fas fa-check-circle text-success"></i>
									) : (
										<i class="fas fa-times-circle text-danger"></i>
									)}
								</td> */}
								<td>{row.Cutomer_Name}</td>
								<td>
									{row.Item_Name}
								</td>
								<td>{row.Item_Price}</td>
								<td>{row.Item_Quantity}</td>
								<td>{row.Total_Price}</td>
								<td>
									<Button
										variant="primary"
										// onClick={() => handleOnDelete(row._id)}
									>
										Process
									</Button>{" "}
								</td>
								<td>
									<Button
										variant="danger"
										// onClick={() => handleOnDelete(row._id)}
									>
										Delete
									</Button>{" "}
								</td>
								
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	);
};

export default OrderTable;
