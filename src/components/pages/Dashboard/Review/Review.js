import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../CustomHooks/Context/useAuth";
import AlertBox from "../../AlertBox/AlertBox";
import style from "../AddService/AddService.module.css";
import HandleService from "../HandleService/HandleService";
function Review() {
	const reviewRef = useRef();
	const [rating, setRating] = useState(3);
	const ratingChanged = (newRating) => {
		setRating(newRating);
	};
	const { singleUser, setShow } = useAuth();
	const handleReviewSubmit = (e) => {
		e.preventDefault();
		const review = {
			name: singleUser.displayName,
			photo: singleUser.photo,
			message: reviewRef.current.value,
			rating: rating,
		};
		fetch("https://murmuring-lowlands-26250.herokuapp.com/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				e.target.reset();
				if (data.insertedId) {
					setShow(true);
				}
			});
	};
	return (
		<div className="mt-4 mb-5">
			<Container>
				<AlertBox
					heading="Thank you so much"
					message="Your review is successfully added. We appreciate your review."
				/>
				{singleUser.role !== "admin" ? (
					<div>
						<div className="text-center mb-4">
							<h6>Please</h6>
							<h3>Give us a review</h3>
						</div>
						<Row className=" g-4 align-items-center">
							<Col md={6} sm={12}>
								<div>
									<img
										src="https://i.ibb.co/m4qp95C/2456038-1.png"
										alt="review"
										className="img-fluid"
									/>
								</div>
							</Col>
							<Col md={6} sm={12}>
								<div>
									<form className={style.form} onSubmit={handleReviewSubmit}>
										<div className="text-center mb-3">
											<h4>Your Review</h4>
										</div>
										<textarea
											ref={reviewRef}
											className="form-control"
											cols="30"
											rows="7"
											placeholder="Your honest opinion"
											required
										></textarea>
										<ReactStars
											count={5}
											onChange={ratingChanged}
											size={35}
											activeColor="#ffd700"
											isHalf={true}
											value={rating}
										/>
										<input
											type="submit"
											value="Submit"
											className="btn btn-secondary"
										/>
									</form>
								</div>
							</Col>
						</Row>
					</div>
				) : (
					<div>
						<HandleService />
					</div>
				)}
			</Container>
		</div>
	);
}

export default Review;
