import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fierce-plains-01652.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container fluid className="products-area">
        <Row>
          <Col></Col>
          <Col md={5}>
            <div className="my-5">
            <h3>Popular Products for Daily Shopping</h3>
            <p>
              See all our popular products in this week. You can choose your
              daily needs products from this list and get some special offer
              with free shipping.
            </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <div className="products">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
