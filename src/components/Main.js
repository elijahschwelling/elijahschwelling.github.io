import React from 'react';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Publications from './Publications.js';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <Publications></Publications>
            <Experience></Experience>
            <Resume></Resume>
        </div>
    );
};

export default Main;