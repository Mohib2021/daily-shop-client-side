import React from "react";
import { Col, Row } from "react-bootstrap";

import style from "./ShowAllUsers.module.css";
function ShowAllUsers({ data, updateRole }) {
	const { displayName, email, photo, role, _id } = data;

	return (
		<Col md={12}>
			<div className={style.userInfo}>
				<Row className=" g-4 justify-content-center">
					<Col md={1} sm={6}>
						<div className="text-center">
							<h6>Photo</h6>
							<img
								src={
									photo.length < 400 ? photo : "data:image/jpeg;base64," + photo
								}
								alt="user"
								className="img-fluid rounded-circle"
							/>
						</div>
					</Col>
					<Col md={4} sm={6}>
						<div className="text-center">
							<h6>Name</h6>
							<p>{displayName}</p>
						</div>
					</Col>
					<Col md={4} sm={5}>
						<div className="text-center">
							<h6>Email</h6>
							<p className="small">{email}</p>
						</div>
					</Col>
					<Col md={1} sm={2}>
						<div className="text-center">
							<h6>Role</h6>
							<p className="bg-success text-white rounded small">{role}</p>
						</div>
					</Col>
					<Col md={2} sm={5}>
						<div className="text-center">
							<h6>Action</h6>
							{role === "user" ? (
								<button
									onClick={() => updateRole(role, _id)}
									className="btn btn-outline-success"
								>
									Make Admin
								</button>
							) : (
								<button
									onClick={() => updateRole(role, _id)}
									className="btn btn-outline-danger"
								>
									Make User
								</button>
							)}
						</div>
					</Col>
				</Row>
			</div>
		</Col>
	);
}

export default ShowAllUsers;
