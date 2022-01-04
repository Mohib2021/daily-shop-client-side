import React from 'react';
import pic from '../../../../image/vegetables.jpg'

import './About.css'

//  About section : 
const About = () => {
    return (
        <div className="row my-5 container mx-auto ">

            <div  className="col-md-5 imagee">
           
                <img className="img-fluid" src={pic} alt="" />
                
            </div>
            <div className="col-md-7 text-white text-start">
         

                <p className="mt-5 fs-4 fw-bold text-center text-primary">About Us</p>
               
                
                <small className="mt-3 fs-6">
                Daily Shop started their journey almost 10years ago.Their products collection  are extremely popular across the market and have earned a multitude of  awards throughout the past decade. They provide best services and products and offer huge sale in different time,You will get Different products In One House.User Frienly environment here..
                </small>
               
                <div>
                </div>
            </div>
        </div>

    );
};

export default About;


