import React, { useState } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import style from "./MenuBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
	const [isActive, setIsActive] = useState(false);
	const element = <FontAwesomeIcon icon={faCoffee} />;

	return (
		<div className={style.position}>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/home">
						<div className="d-flex align-items-center">
							<img
								className={style.logoImg}
								src="https://i.ibb.co/sHw3Sfr/daily-shop-logo.png"
								alt="service-logo"
							/>
							<h3 className="ms-2">Daily Shop</h3>
						</div>
					</Navbar.Brand>
					<div
						className={`ms-auto ${style.navigationLink} ${
							isActive && style.animation
						} `}
					>
						<Nav.Link className="active" as={Link} to="/home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/explore">
							Explore
						</Nav.Link>
						<Nav.Link as={Link} to="/dashboard">
							Dashboard
						</Nav.Link>

						<Nav.Link>
							<button className="btn fw-bold btn-outline-danger">LogOut</button>
						</Nav.Link>

						<Nav.Link as={Link} to="/login">
							<button className="btn fw-bold btn-outline-primary">Login</button>
						</Nav.Link>

						<Nav.Link as={Link} to="/signUp">
							<button className="btn fw-bold btn-outline-primary">
								SignUp
							</button>
						</Nav.Link>
						<Nav.Link as={Link} to="/signUp">
							<span className="fs-3">{element} </span>
							<Badge bg="danger">0</Badge>
						</Nav.Link>
					</div>
					<div
						onClick={() => setIsActive(!isActive)}
						className={`${style.burger} ${isActive && style.toggle}`}
					>
						<div className={style.line1}></div>
						<div className={style.line2}></div>
						<div className={style.line3}></div>
						<div className={style.line4}></div>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}

export default MenuBar;
