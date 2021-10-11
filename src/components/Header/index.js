import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="search-area">
                <div className="search-area-inner d-flex align-items-center justify-content-center">
                    <div className="close-btn"><i className="icon-close"></i></div>
                    <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <form action="#">
                        <div className="form-group">
                            <input type="search" name="search" id="search" placeholder="What are you looking for?" />
                            <button type="submit" className="submit"><i className="icon-search-1"></i></button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="navbar-header d-flex align-items-center justify-content-between">
                    <NavLink to="index.html" className="navbar-brand">Bootstrap Blog</NavLink>
                    
                    <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
                </div>
                
                <div id="navbarcollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to="/" className="nav-link">TRANG CHỦ</NavLink>
                        </li>
                        <li className="nav-item"><NavLink to="/post" className="nav-link">SINGLE POST</NavLink>
                        </li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
