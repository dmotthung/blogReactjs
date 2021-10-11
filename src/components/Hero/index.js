import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                <div className="col-lg-7">
                    <h1>Bootstrap 4 Blog - A free template by Bootstrap Temple</h1><Link to="#" className="hero-link">Discover More</Link>
                </div>
                </div><Link to=".intro" className="continue link-scroll"><i className="fa fa-long-arrow-down"></i> Scroll Down</Link>
            </div>
        </section>
    )
}

export default Hero
