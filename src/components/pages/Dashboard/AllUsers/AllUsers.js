import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowAllUsers from "./ShowAllUsers/ShowAllUsers";

function AllUsers() {
	const [allUsers, setAllUsers] = useState([]);
	// update user role
	const updateUserRole = (role, _id) => {
		let newRole = "";
		if (role === "user") {
			newRole = "admin";
		} else {
			newRole = "user";
		}
		const update = {
			role: newRole,
		};

		fetch(`https://murmuring-lowlands-26250.herokuapp.com/users/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(update),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	useEffect(() => {
		fetch("https://murmuring-lowlands-26250.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setAllUsers(data));
	}, [updateUserRole]);

	return (
		<div className="my-5">
			<Container>
				<div className="text-center mb-5">
					<h6>Show</h6>
					<h3>All of the Users</h3>
				</div>
				<Row className="g-4">
					{allUsers.map((user) => (
						<ShowAllUsers
							updateRole={updateUserRole}
							key={user._id}
							data={user}
						/>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default AllUsers;
