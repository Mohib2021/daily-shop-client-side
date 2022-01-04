import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import style from "./ShowOrderList.module.css";

function ShowOrderList({ buttonAndAction, data }) {
	const navigate = useNavigate();
	const {
		address,
		email,
		phone,
		userName,
		userPicture,
		productName,
		productPhoto,
		productPrice,
		status,
		payment,
		_id,
	} = data;
	const handleBtnDisable = (recentStatus) => {
		if (recentStatus === "Shipped") {
			return true;
		} else return false;
	};

	return (
		<>
			<Col md={12}>
				<div className={style.card}>
					<Row className="  g-3">
						<Col className="text-center" md={1} xs={12}>
							<img
								src={
									userPicture?.length < 400
										? userPicture
										: "data:image/jpeg;base64," + userPicture
								}
								alt="user"
								className="img-fluid rounded-circle"
							/>
						</Col>
						<Col className="text-center" md={3} xs={12}>
							<h6>Ordered By</h6>
							<div>
								<b>{userName}</b> <br />
								<span className="small">{email}</span>
							</div>
						</Col>
						<Col className="text-center" md={2} xs={5}>
							<img
								src={
									productPhoto?.length < 400
										? productPhoto
										: "data:image/jpeg;base64," + productPhoto
								}
								className="img-fluid rounded"
								alt="product"
							/>
						</Col>
						<Col className="text-center" md={2} xs={7}>
							<h6>Product Info</h6>
							<div>
								<b>{productName}</b> <br />
								<span>${productPrice}</span> <br />
								<span className="bg-success text-white small p-1 rounded">
									{status}
								</span>
							</div>
						</Col>
						<Col className="text-center" md={2} xs={6}>
							<h6>Shipping Address</h6>
							<div className="fst-italic">
								<span>{phone}</span> <br />
								<span>{address}</span>
							</div>
						</Col>
						<Col className="text-center" md={2} xs={6}>
							<h6>Actions</h6>
							{buttonAndAction.length > 2 ? (
								<div>
									<div>
										<button
											onClick={() => buttonAndAction[2](_id)}
											className="btn px-2 me-1 btn-outline-danger"
										>
											{buttonAndAction[0]}
										</button>{" "}
										<br />
										<button
											disabled={handleBtnDisable(status)}
											onClick={() => buttonAndAction[3](_id)}
											className="btn mt-2 btn-outline-success"
										>
											{buttonAndAction[1]}
										</button>
									</div>
									{payment ? (
										<button className="btn btn-success mt-2">Paid</button>
									) : (
										<button className="btn btn-danger mt-2">Unpaid</button>
									)}
								</div>
							) : (
								<div>
									<button
										disabled={handleBtnDisable(status)}
										onClick={() => buttonAndAction[1](_id)}
										className="btn me-1 btn-outline-danger mt-0 mt-sm-2"
									>
										{buttonAndAction[0]}
									</button>
									{payment ? (
										<button
											className="btn btn-outline-success mt-0 mt-sm-2"
											disabled={true}
										>
											Paid
										</button>
									) : (
										<button
											className="btn btn-success mt-0 mt-sm-2"
											onClick={() => navigate(`/dashboard/pay/${_id}`)}
										>
											Pay{" "}
										</button>
									)}
								</div>
							)}
						</Col>
					</Row>
				</div>
			</Col>
		</>
	);
}

export default ShowOrderList;
