import React from "react";
import { Col } from "react-bootstrap";
import { RiShoppingBag3Fill } from 'react-icons/ri';

const Product = (props) => {
  const { title, price, img } = props.product;
  return (
    <Col>
      <div className="shadow p-2 text-center">
      <div>
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <h4 className="">{title.split('-')[0]} {title.split('-')[1]} {title.split('-')[2]}</h4>
        <div className="price_shop d-flex justify-content-between">
          <h3>${price}</h3>
          <div><h3 className="text-success"><RiShoppingBag3Fill/></h3></div>
        </div>
      </div>
      </div>
    </Col>
  );
};

export default Product;
