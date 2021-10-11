import React from 'react';
import './style.css';

import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';


const Post = () => {
    return (
        <div className="container">
            <div className="row">
                <BlogPost />
                <SideBar />
            </div>
        </div>
    )
}

export default Post
