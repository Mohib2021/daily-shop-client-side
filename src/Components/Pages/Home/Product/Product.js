import React from "react";
import { RiShoppingBag3Fill } from 'react-icons/ri';
const Product = (props) => {
  const { title, price, img } = props.product;
  return (
    <div className="product-card m-2 py-1 px-3">
      <div className="img">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <p className="text-start">{title.split('-')[0]} {title.split('-')[1]} {title.split('-')[2]}</p>
        <div className="price_shop">
          <h3>${price}</h3>
          <div><h3><RiShoppingBag3Fill/></h3></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
