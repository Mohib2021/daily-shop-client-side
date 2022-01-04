import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../CustomHooks/Context/useAuth";
import AlertBox from "../../AlertBox/AlertBox";
import style from "./AddService.module.css";
function AddService() {
	const { setShow } = useAuth();
	const nameRef = useRef();
	const priceRef = useRef();
	const descRef = useRef();
	const imgRef = useRef();
	const handleAddService = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const price = priceRef.current.value;
		const description = descRef.current.value;
		const photo = imgRef.current.files[0];
		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", price);
		formData.append("description", description);
		formData.append("photo", photo);

		fetch("https://fierce-plains-01652.herokuapp.com/products", {
			method: "POST",
			body: formData,
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
		<div className="my-5">
			<Container>
				<AlertBox
					heading="Yes Boss !!!!!!!!!!"
					message="Your new service is added Successfully. "
				/>
				<Row className="justify-content-center align-items-center">
					<Col md={6} sm={12}>
						<form className={style.form} onSubmit={handleAddService}>
							<div className="text-center mb-4">
								<h3>Add a Service here</h3>
							</div>
							<input
								ref={nameRef}
								placeholder="Service name"
								type="text"
								className="form-control mb-3"
								required
							/>
							<input
								ref={priceRef}
								placeholder="Price"
								type="number"
								className="form-control mb-3"
								required
							/>
							<input
								required
								ref={imgRef}
								type="file"
								className="form-control mb-3"
							/>
							<textarea
								ref={descRef}
								cols="30"
								rows="7"
								placeholder="Description"
								className="mb-3 form-control"
								required
							></textarea>
							<input
								type="submit"
								value="Add Service"
								className="btn btn-secondary"
							/>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AddService;
