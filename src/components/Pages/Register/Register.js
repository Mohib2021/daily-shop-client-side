import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Register.module.css";
function Register() {
	return (
		<>
			<div className="my-5">
				<Container>
					<Row className=" form-container align-items-center justify-content-center">
						<Col md={6}>
							<Form data-aos="fade-down" className={`p-3 ${style.formShadow}`}>
								<div className="text-center">
									<img
										className={style.logoImg}
										src="https://i.ibb.co/sHw3Sfr/daily-shop-logo.png"
										alt="logo-img"
									/>
								</div>
								<div className="text-center my-4">
									<h3 className="fw-bold">Sign Up</h3>
								</div>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Full Name</Form.Label>
									<Form.Control type="name" placeholder="Name" required />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email Address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										required
									/>
								</Form.Group>
								<Form.Group
									className="mb-3"
									controlId="formBasicConfirmPassword"
								>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Re-enter Password"
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicConfirmImg">
									<Form.Label>Your Image</Form.Label>
									<Form.Control type="file" required />
								</Form.Group>
								<Button className="w-100" variant="dark" type="submit">
									Sign up
								</Button>
								<p className="mt-2">
									Already have an account? <Link to="/login">Login</Link>
								</p>
								{/* {error && <p> {error} </p>} */}
								<div className="d-flex justify-content-center">
									<img
										style={{ width: "70px", cursor: "pointer" }}
										className="me-3"
										src="https://i.ibb.co/GR8QvhF/google.png"
										alt="google icon"
									/>
								</div>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Register;
