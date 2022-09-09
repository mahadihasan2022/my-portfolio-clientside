import React, { useEffect } from 'react';
import About from '../About/About';
import HomeHeader from '../HomeHeader/HomeHeader'
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        axios('http://localhost:5000//projects')
        .then()
    },[])
    return (
        <div className="container">
            <HomeHeader/>
            <About/>
            <Skills/>
            <Education/>
        </div>
    );
};

export default Home;