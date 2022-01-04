import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
	"pk_test_51K8Mj3KGdK20KSsSVeC8zj1b84OSFX8FF1irxt3luuT5IkQSZRJ2ghN4tAT8mlVVSGLGPjR10VtyFZVbwAV4c1SQ00BXPc8WEJ"
);

function Pay() {
	const { payId } = useParams();
	const [pay, setPay] = useState({});
	useEffect(() => {
		fetch(`https://murmuring-lowlands-26250.herokuapp.com/orders/${payId}`)
			.then((res) => res.json())
			.then((data) => setPay(data));
	}, [payId]);
	const { userName, email, productName, productPhoto, productPrice, _id } = pay;
	return (
		<div className="my-5">
			<Container>
				<div className="text-center mb-4">
					<h6>Pay</h6>
					<h3>The Price</h3>
				</div>
				<Row>
					<Col>
						<div>
							<img
								src={
									productPhoto?.length < 400
										? productPhoto
										: "data:image/jpeg;base64," + productPhoto
								}
								alt="product"
								className="img-fluid"
							/>
							<h4 className="mt-2">{productName}</h4>
							<p className="mb-1">Ordered By : {userName}</p>
							<p className="mb-1">Email : {email}</p>
							<h5>${productPrice}</h5>
						</div>
					</Col>
					<Col>
						<div>
							{productPrice && (
								<Elements stripe={stripePromise}>
									<CheckOut
										price={productPrice}
										name={userName}
										email={email}
										id={_id}
									/>
								</Elements>
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Pay;
