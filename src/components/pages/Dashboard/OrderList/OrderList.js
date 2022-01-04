import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../CustomHooks/Context/useAuth";
import ShowOrderList from "./ShowOrderList";
import style from "./OrderList.module.css";
import { useNavigate } from "react-router-dom";
function OrderList() {
	const { user } = useAuth();

	const [orderList, seTOrderList] = useState([]);
	const navigate = useNavigate();

	const handleCancelOrder = (_id) => {
		const confirmation = window.confirm("are you sure that you wan to cancel?");
		if (confirmation) {
			fetch(`https://fierce-plains-01652.herokuapp.com/orders/${_id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		}
	};

	useEffect(() => {
		fetch("https://fierce-plains-01652.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => seTOrderList(data));
	}, [handleCancelOrder]);
	const yourOrderList = orderList.filter((order) => order.email === user.email);
	const buttonAndAction = ["Cancel", handleCancelOrder];
	const yourPlacedOrder = yourOrderList.length ? (
		<Row className="g-4 ">
			{yourOrderList.map((list) => (
				<ShowOrderList
					key={list._id}
					buttonAndAction={buttonAndAction}
					data={list}
				/>
			))}
		</Row>
	) : (
		<div className={style.noOrder}>
			<div className="text-center">
				<h2>Sorry! Your don't have any order.</h2>
				<button onClick={() => navigate("/explore")} className="btn btn-dark">
					Give an Order
				</button>
			</div>
		</div>
	);
	return (
		<div className="my-5 ">
			<Container>
				<div className="text-center mb-4">
					<h6>Your</h6>
					<h3>Order list</h3>
				</div>
				{yourPlacedOrder}
			</Container>
		</div>
	);
}

export default OrderList;
