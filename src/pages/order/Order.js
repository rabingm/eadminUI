import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import DefaultLayout from "../../components/layout/DefaultLayout";
import OrderTable from "../../components/order-table/OrderTable";

const Order = () => {
	return (
		<DefaultLayout>
			<div className="orderList">
				<div className="orderList-lists">
					<OrderTable />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Order;
