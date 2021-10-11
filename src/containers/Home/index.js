import React from 'react';
import Hero from '../../components/Hero';

import './style.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <section class="featured-posts no-padding-top">
                <div class="container">
                    <div class="row d-flex align-items-stretch">
                        <h1>Home</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
