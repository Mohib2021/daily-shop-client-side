import React from "react";
import { Col } from "react-bootstrap";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Product = (props) => {
	const { title, price, img } = props.product;
	return (
		<Col>
			<div className="shadow p-2 text-center">
				<div>
					<img className="img-fluid" src={img} alt="" />
				</div>
				<div>
					<h4 className="">
						{title.split("-")[0]} {title.split("-")[1]} {title.split("-")[2]}
					</h4>
					<div className="price_shop d-flex mt-4 justify-content-between">
						<h3>${price}</h3>
						<div>
							<div className="btn btn-success">
								<ShoppingBasketIcon /> Add to cart
							</div>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default Product;
