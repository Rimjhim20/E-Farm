import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary text-center fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Welcome to our E-farm website! We connect users with farmers to provide fresh and high-quality agricultural products. Our platform enables you to browse a wide range of farmer products and make purchases according to your preferences. We strive to support local farmers and promote sustainable agriculture practices.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary mb-4 px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="/assets/images/about.png" alt="About Us" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
