import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

import BrowserPokedex from './BrowserPokedex.PNG';
import SpotifyDataTool from './SpotifyDataTool.PNG'
import VRST19 from './VRST19.PNG';
import Breakout from './Breakout.PNG';
import Portfolio from './Portfolio.png';

const Projects = () => {
    return (
        <motion.div animate={{opacity: [0, 1]}} transition={{duration: 0.2}}>
            <Jumbotron className="page-title">
                <h1>PROJECTS</h1>
                <h4>PROJECTS IN PROGRAMMING AND DESIGN</h4>
            </Jumbotron>
            <div id="test">
                <Card>
                    <Card.Img variant="top" src={VRST19} />
                    <Card.Header as="h5">
                        Paint Sound
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Generative music application for iOS allowing users to draw shapes in augmented reality
                            world space that act as audio sequencers. Built custom virtual synthesizer and interface for 
                            generating hundreds of unique sounds in the application. Built using Swift, AudioKit, 
                            ARKit, and XCode.
                        </Card.Text>
                        <Card.Link href="https://www.youtube.com/watch?v=kKqnSsb4sR4">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={BrowserPokedex} />
                    <Card.Header as="h5">
                            Browser Pokedex
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            An interactive Pokedex for viewing the first 7 generations of Pokemon in browser, 
                            built using D3.js, jQuery, HTML, and CSS.
                        </Card.Text>
                        <Card.Link href="https://www.youtube.com/watch?v=i2gwXXyDpU8">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Breakout} />
                    <Card.Header as="h5">
                        Breakout
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            An interactive implementation of Atari Breakout, built using Java and Processing.
                        </Card.Text>
                        <Card.Link href="https://www.youtube.com/watch?v=KEIdbovGPdg">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={SpotifyDataTool} />
                    <Card.Header as="h5">
                            Spotify Data Tool
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            An interactive tool for looking at your top tracks on Spotify by album cover and
                            track title/artist, built using the Spotify API, Express, D3.js, jQuery, HTML, CSS.
                        </Card.Text>
                        <Card.Link href="https://www.youtube.com/watch?v=HE3-jG0UbdM">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Portfolio} />
                    <Card.Header as="h5">
                            Online Portfolio
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            A personal online portfolio (the one you're on right now!) for showcasing projects and 
                            experience, built from the ground up using React and Bootstrap.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </motion.div>
    );
};

export default Projects;