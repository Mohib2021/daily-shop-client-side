import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";
function Card({ data, deleteService, btnTxt }) {
	const { img, title, price, _id } = data;
	const navigate = useNavigate();

	return (
		<Col md={4} sm={12}>
			<div className={style.card}>
				<img
					src={img.length < 300 ? img : "data:image/jpeg;base64," + img}
					className="img-fluid rounded"
					alt="service"
				/>
				<h5 className="my-3">{title}</h5>

				<h5>${price}</h5>
				<button
					onClick={() =>
						btnTxt === "Booking"
							? navigate(`/booking/${_id}`)
							: deleteService(_id)
					}
					className="btn btn-outline-dark"
				>
					{btnTxt}
				</button>
			</div>
		</Col>
	);
}

export default Card;
