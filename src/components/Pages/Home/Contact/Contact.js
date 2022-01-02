import React from 'react';

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'

// import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_15gdn8j",
                "template_rc1p5xq",
                formRef.current,
                "user_TjniMWIKumeFN1W85gZqS"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        //   setDone(false);

    };

    return (
        <div className="container my-5">
            {/* contact address section */}
            <Roll left>
            <h2 className="text-center fw-bold text-warning fw-2 mt-4">Contact With Me</h2></Roll>
            <div className="row mt-5">
                <div className=" text-start col-lg-5 col-md-5">
                <Bounce right>
                    <h2 className="text-warning">Get In Touch: </h2></Bounce>
                    <Slide top cascade>

                    <div className="right-footer-container  text-white fs-4">

                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="all-icon text-warning">
                                <i className="fas fa-phone-volume fs-4 me-2"></i>
                            </div>
                            <div>
                                <h5>+8801776145227 </h5>
                            </div>
                        </div>
                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="all-icon text-warning">
                                <i className="far fa-envelope me-2"></i>
                            </div>
                            <div className="fs-4">
                                <h6>dailyShop@gmail.com </h6>
                            </div>
                        </div>
                      
                    </div>
                    </Slide>
                </div>
               

                {/* Contact Form */}
                <div className="container col-md-7 col-lg-7 border form text-white fw-bolder p-2">
                    <form ref={formRef} onSubmit={handleSubmit} className="row g-3">

                        <div className="col-12 ">

                            <input type="text" className="form-control bg-dark text-white " id="inputEmail4" name="user_name" placeholder="Enter Your Full-Name" />
                        </div>
                        <div className="col-12">

                            <input type="email" className="form-control bg-dark text-white" id="inputPassword4" name="user_email" placeholder="Enter Your Email" />
                        </div>
                        <div className="col-12">

                            <textarea type="text" className="form-control bg-dark text-white" id="inputAddress" name="message" placeholder="Enter Your Message" />
                        </div>







                        {/*  
  <button type="submit" className="btn btn-primary ">Submit</button>
            {done && "Thank you..."} */}
                        <div className="col-12">
                            <button type="submit" className="btn btn-outline-warning">Submit</button>
                            <div>
                                {done && "Thank you..."
                                }
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>



    );
};

export default Contact;



