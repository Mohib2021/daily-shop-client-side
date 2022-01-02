import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="container">
      <div className="bg-secondary p-3 text-white">
        <div className="py-5 d-lg-flex justify-content-around">
          <div>
            <img style={{ width: "50px", marginLeft: "5px" }} src="" alt="" />
            <h3>
              Daily-Shop </h3>
            <p className="mb-0">
              "We Provide best Products <br /> to make you happy"
            </p>
          </div>




          <div className="text-start">
            <h4>Connect With Us</h4>

            <p className="fw-bold">Information</p>
            <p>
              <i className="text-color fas fa-phone-alt"></i> (+0099345000)
            </p>
            <p>
              <i className="text-color fas fa-mobile-alt"></i> (+8801776145227)
            </p>
            <p>
              <i className="text-color far fa-envelope"></i>{" "}
              <a className="text-white" href="hasibulhasan294@gmail.com">dailyShop@gmail.com</a>
            </p>
          </div>
          <div className="text-start">
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>Views All Products</p>
            <p>Stay With Us </p>
          </div>
        </div>
        <p>Follow Us</p>
        <p className="d-md-flex justify-content-center">
          <GoogleIcon sx={{ mr: 2 }}></GoogleIcon>
          <FacebookIcon sx={{ mr: 2 }}></FacebookIcon>
          <TwitterIcon sx={{ mr: 2 }}></TwitterIcon>
          <InstagramIcon sx={{ mr: 2 }}></InstagramIcon>
        </p>
      </div>
      <p className="mb-0 p-3 text-center text-white bg-info">
        Copyright<i className="far fa-copyright"></i> 2022 HandyVai All right
        reserved.
      </p>
    </div>
  );
};

export default Footer;
