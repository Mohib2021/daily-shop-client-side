import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ShowConfirmation from "./ShowConfirmation/ShowConfirmation";
import useAuth from "../../CustomHooks/Context/useAuth";
const Confirmation = () => {
	const { user } = useAuth();
	const cartProduct = useSelector((state) => state.userSlice.cart);
	const phoneRef = useRef();
	const addressRef = useRef();

	const handleBuying = (e) => {
		e.preventDefault();
		const buyingInfo = {
			userInfo: {
				userName: user.displayName,
				email: user.email,
				phone: phoneRef.current.value,
				address: addressRef.current.value,
			},
			productInfo: {
				cartProduct,
			},
			status: "Pending",
		};
		fetch("https://fierce-plains-01652.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(buyingInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				e.target.reset();
			});
	};

	return (
		<div className="container-fluid my-5">
			<Row>
				{cartProduct.map((product) => (
					<ShowConfirmation key={product._id} data={product} />
				))}
				<Col md={4}>
					<div
						className="bg-dark text-white p-2 rounded"
						style={{ position: "fixed", top: "20%", width: "30%" }}
					>
						<form onSubmit={handleBuying}>
							<h3 className="text-center  mb-3">Confirmation</h3>
							<input
								placeholder="Name"
								value={user.displayName}
								type="text"
								className="form-control mb-3"
								required
							/>
							<input
								placeholder="Email"
								value={user.email}
								type="email"
								className="form-control mb-3"
								required
							/>
							<input
								ref={phoneRef}
								type="number"
								placeholder="Phone"
								className="form-control mb-3"
								required
							/>
							<textarea
								ref={addressRef}
								placeholder="Address"
								className="form-control mb-3"
								required
								cols="30"
								rows="7"
							></textarea>
							<input
								type="submit"
								className="btn btn-secondary"
								value="Confirm"
							/>
						</form>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Confirmation;
