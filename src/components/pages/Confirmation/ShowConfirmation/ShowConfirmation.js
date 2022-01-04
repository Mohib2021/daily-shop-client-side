import React from "react";
import { Col, Row } from "react-bootstrap";

function ShowConfirmation({ data }) {
	const { img, title, description, price } = data;

	return (
		<Col md={8}>
			<Row className="g-4 my-2 ">
				<Col md={12}>
					<div
						style={{
							boxShadow: "0px 0px 10px gray",
							borderRadius: "10px",
							padding: "10px",
						}}
					>
						<img src={img} alt="order" className="img-fluid" />
						<h4>{title}</h4>
						<p>{description}</p>
						<h5>${price}</h5>
						<button className="btn-danger">Cancel</button>
					</div>
				</Col>
			</Row>
		</Col>
	);
}

export default ShowConfirmation;
