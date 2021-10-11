import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => {
    return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <h6 className="text-white">Bootstrap Blog</h6>
            </div>
            <div className="contact-details">
              <p>53 Broadway, Broklyn, NY 11249</p>
              <p>Phone: (020) 123 456 789</p>
              <p>Email: <Link to="mailto:info@company.com">Info@Company.com</Link></p>
              <ul className="social-menu">
                <li className="list-inline-item"><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                <li className="list-inline-item"><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                <li className="list-inline-item"><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                <li className="list-inline-item"><Link to="#"><i className="fa fa-behance"></i></Link></li>
                <li className="list-inline-item"><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="menus d-flex">
              <ul className="list-unstyled">
                <li> <Link to="#">My Account</Link></li>
                <li> <Link to="#">Add Listing</Link></li>
                <li> <Link to="#">Pricing</Link></li>
                <li> <Link to="#">Privacy &amp; Policy</Link></li>
              </ul>
              <ul className="list-unstyled">
                <li> <Link to="#">Our Partners</Link></li>
                <li> <Link to="#">FAQ</Link></li>
                <li> <Link to="#">How It Works</Link></li>
                <li> <Link to="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="latest-posts"><Link to="#">
                <div className="post d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-1.jpg" alt="..." className="img-fluid"/></div>
                  <div className="title"><strong>Hotels for all budgets</strong><span className="date last-meta">October 26, 2016</span></div>
                </div></Link><Link to="#">
                <div className="post d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-2.jpg" alt="..." className="img-fluid"/></div>
                  <div className="title"><strong>Great street atrs in London</strong><span className="date last-meta">October 26, 2016</span></div>
                </div></Link><Link to="#">
                <div className="post d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-3.jpg" alt="..." className="img-fluid"/></div>
                  <div className="title"><strong>Best coffee shops in Sydney</strong><span className="date last-meta">October 26, 2016</span></div>
                </div></Link></div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2017. All rights reserved. Your great site.</p>
            </div>
            <div className="col-md-6 text-right">
              <p>Template By <Link to="https://bootstrapious.com/p/bootstrap-carousel" className="text-white">Bootstrapious</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
