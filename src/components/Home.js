import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { motion } from 'framer-motion';
import ScrollableAnchor from 'react-scrollable-anchor';

const Home = () => {
    return (
        <ScrollableAnchor id={"home"}>
        <motion.div animate={{opacity: [0, 1]}} transition={{duration: 0.2}}>
            <Jumbotron className="page-title homepage-title">
                <h1>ELIJAH SCHWELLING</h1>
                <h4>
                    Computer Science student at the University of Maryland interested in graphics, blended reality, web development, data visualization, 
                    design, and music.
                </h4>
            </Jumbotron>
            <div id="homepage-skill-list">
                <h6>Skills and technologies include:</h6>
                <ul>
                    <li><h6>Languages:</h6></li>
                        <ul>
                            <li><h6>Java, C, JavaScript, Ruby, Rust, Racket, OCaml, Swift, HTML, CSS, GLSL, HLSL, Python, C#</h6></li>
                        </ul>
                    <li><h6>Libraries, Frameworks, and APIs:</h6></li>
                        <ul>
                            <li><h6>React, JQuery, D3.js, Node.js, Express.js, OpenGL, Bootstrap, MongoDB, ARKit</h6></li>
                        </ul>
                    <li><h6>Development Tools:</h6></li>
                        <ul>
                            <li><h6>Git, Unix, Unity, XCode, Processing, Tableau, MATLAB</h6></li>
                        </ul>
                </ul>
            </div>
        </motion.div>
        </ScrollableAnchor>
    );
};

export default Home;