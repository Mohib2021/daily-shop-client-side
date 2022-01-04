import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ShowOrderList from "../OrderList/ShowOrderList";
import style from "../OrderList/OrderList.module.css";
function ManageOrder() {
	const [orderList, seTOrderList] = useState([]);
	const handleDeleteOrder = (_id) => {
		const confirmation = window.confirm(
			"Are you sure that you want to delete?"
		);
		if (confirmation) {
			fetch(`https://fierce-plains-01652.herokuapp.com/orders/${_id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};
	// update Order status
	const updateOrderStatus = (_id) => {
		const update = {
			status: "Shipped",
		};
		fetch(`https://fierce-plains-01652.herokuapp.com/orders/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(update),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	useEffect(() => {
		fetch("https://fierce-plains-01652.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => seTOrderList(data));
	}, [handleDeleteOrder, updateOrderStatus]);
	const buttonAndAction = [
		"Delete",
		"Confirm",
		handleDeleteOrder,
		updateOrderStatus,
	];
	return (
		<div className="my-5 ">
			<Container>
				<div className="text-center mb-4">
					<h6>Your</h6>
					<h3>Order list</h3>
				</div>
				{orderList.length ? (
					<Row className="g-4">
						{orderList.map((list) => (
							<ShowOrderList
								key={list._id}
								buttonAndAction={buttonAndAction}
								data={list}
							/>
						))}
					</Row>
				) : (
					<div className={style.noOrder}>
						<h2>There has not any order to show!</h2>
					</div>
				)}
			</Container>
		</div>
	);
}

export default ManageOrder;
