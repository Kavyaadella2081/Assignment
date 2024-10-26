// src/components/Home.js
import React from 'react';
import './Home.css'; // Optional: Include styles

const Home = () => {
    return (
        <div className="container home">
            <h1>Welcome to the App!</h1>
            <p>This is a simple app to demonstrate users and posts.</p>
            <img src="/images/img.png" alt="Welcome" className="home-image" />

        </div>
    );
};

export default Home;
