import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fierce-plains-01652.herokuapp.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<Container fluid className="products-area my-5">
				<Row>
					<Col className="text-center">
						<div className="my-5">
							<h3>Popular Products for Daily Shopping</h3>
							<p>
								See all our popular products in this week. You can choose your
								daily needs products from this list and get some special offer
								with free shipping.
							</p>
						</div>
					</Col>
				</Row>
				<Container>
					<Row xs={1} md={2} lg={3} className="g-4">
						{products.map((product) => (
							<Product key={product._id} product={product}></Product>
						))}
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default Products;
