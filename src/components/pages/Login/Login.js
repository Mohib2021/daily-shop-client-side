import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/Context/useAuth";

import style from "./Login.module.css";
function Login() {
	const location = useLocation();

	const redirectURL = location?.state?.from || "/home";
	console.log(redirectURL);
	const {
		error,
		getUserEmail,
		getUserPassword,
		loginWithGoogle,
		loginWithEmailAndPassword,
		setIsLoading,
		setError,
	} = useAuth();
	const navigate = useNavigate();
	// form submitting
	const handleLogin = (e) => {
		e.preventDefault();
		loginWithEmailAndPassword()
			.then(() => {
				setError("");
				e.target.reset();
				navigate(redirectURL);
			})
			.catch((err) => setError(err.message))
			.finally(setIsLoading(false));
	};
	return (
		<div>
			<Container>
				<Row className=" my-5 form-container align-items-center justify-content-center">
					<Col md={5}>
						<Form
							onSubmit={handleLogin}
							data-aos="fade-down"
							className={`p-3 ${style.formShadow}`}
						>
							<div className="text-center">
								<img
									className={style.logoImg}
									src="https://i.ibb.co/sHw3Sfr/daily-shop-logo.png"
									alt="logo-img"
								/>
							</div>
							<div className="text-center my-4">
								<h3 className="fw-bold">Login</h3>
							</div>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									onChange={getUserEmail}
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={getUserPassword}
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Button className="w-100" variant="dark" type="submit">
								Login
							</Button>
							<p className="mt-2">
								Don't have any account? <Link to="/signup">Sign up</Link>
							</p>
							{error && <p className="text-danger"> {error} </p>}
							<div
								className={`d-flex justify-content-center ${style.loginImgIcon}`}
							>
								<img
									onClick={() => loginWithGoogle(redirectURL)}
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
	);
}

export default Login;
