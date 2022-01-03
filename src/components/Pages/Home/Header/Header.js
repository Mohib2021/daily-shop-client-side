import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<Carousel interval={2000}>
				<Carousel.Item className=" item-1">
					<img
						className="carousal-image"
						src="https://images.pexels.com/photos/7674854/pexels-photo-7674854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="First slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="carousal-image"
						src="https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Second slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="carousal-image"
						src="https://images.pexels.com/photos/7317033/pexels-photo-7317033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Header;
