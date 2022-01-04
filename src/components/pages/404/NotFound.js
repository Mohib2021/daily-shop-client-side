import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Container>
			<Row>
				<div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
					<div className="error-container">
						<img
							src="https://raw.githubusercontent.com/babulakterfsd/imgsrc/main/404.png"
							alt="404"
							className="img-fluid notfoundimg"
						/>
						<h6 className="text-light-green">Sorry shopper,</h6>
						<h1 className="text-danger m-0">404! Page Not Found !!</h1>
						<Link to="/">
							<Button className="btn-light-green p-3 fw-semi-bold mb-5 mt-3 text-white shadow-none">
								Go Back to Home
							</Button>
						</Link>
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default NotFound;
