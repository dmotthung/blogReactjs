import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className="col-lg-4">
          <div className="widget search">
            <header>
              <h3 className="h6">Search the blog</h3>
            </header>
            <form action="#" className="search-form">
              <div className="form-group">
                <input type="search" placeholder="What are you looking for?"/>
                <button type="submit" className="submit"><i className="icon-search"></i></button>
              </div>
            </form>
          </div>

          <div className="widget latest-posts">
            <header>
              <h3 className="h6">Latest Posts</h3>
            </header>
            <div className="blog-posts"><Link to="#">
                <div className="item d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-1.jpg" alt="..." className="img-fluid"/></div>
                  <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                    <div className="d-flex align-items-center">
                      <div className="views"><i className="icon-eye"></i> 500</div>
                      <div className="comments"><i className="icon-comment"></i>12</div>
                    </div>
                  </div>
                </div></Link><Link to="#">
                <div className="item d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-2.jpg" alt="..." className="img-fluid"/></div>
                  <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                    <div className="d-flex align-items-center">
                      <div className="views"><i className="icon-eye"></i> 500</div>
                      <div className="comments"><i className="icon-comment"></i>12</div>
                    </div>
                  </div>
                </div></Link><Link to="#">
                <div className="item d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-3.jpg" alt="..." className="img-fluid"/></div>
                  <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                    <div className="d-flex align-items-center">
                      <div className="views"><i className="icon-eye"></i> 500</div>
                      <div className="comments"><i className="icon-comment"></i>12</div>
                    </div>
                  </div>
                </div></Link></div>
          </div>
          
          <div className="widget categories">
            <header>
              <h3 className="h6">Categories</h3>
            </header>
            <div className="item d-flex justify-content-between"><Link to="#">Growth</Link><span>12</span></div>
            <div className="item d-flex justify-content-between"><Link to="#">Local</Link><span>25</span></div>
            <div className="item d-flex justify-content-between"><Link to="#">Sales</Link><span>8</span></div>
            <div className="item d-flex justify-content-between"><Link to="#">Tips</Link><span>17</span></div>
            <div className="item d-flex justify-content-between"><Link to="#">Local</Link><span>25</span></div>
          </div>
          
          <div className="widget tags">       
            <header>
              <h3 className="h6">Tags</h3>
            </header>
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="#" className="tag">#Business</Link></li>
              <li className="list-inline-item"><Link to="#" className="tag">#Technology</Link></li>
              <li className="list-inline-item"><Link to="#" className="tag">#Fashion</Link></li>
              <li className="list-inline-item"><Link to="#" className="tag">#Sports</Link></li>
              <li className="list-inline-item"><Link to="#" className="tag">#Economy</Link></li>
            </ul>
          </div>
        </aside>
    )
}

export default SideBar
