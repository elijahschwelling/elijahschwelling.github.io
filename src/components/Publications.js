import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

import CHI20 from './CHI20.PNG';
import VRST19 from './VRST19.PNG';
import VRST18 from './VRST18.PNG';

const Publications = () => {
    return (
        <motion.div animate={{opacity: [0, 1]}} transition={{duration: 0.2}}>
            <Jumbotron className="page-title">
                <h1>PUBLICATIONS</h1>
                <h4>PUBLISHED WORK AND PAPERS</h4>
            </Jumbotron>
            <div>
                <Card>
                    <Card.Img variant="top" src={CHI20} />
                    <Card.Header as="h5">
                            MeteoVis: Visualizing Meteorological Events in Virtual Reality
                    </Card.Header>
                    <Card.Body>
                        
                        <Card.Subtitle>
                            Proceedings of the Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems, 2020
                        </Card.Subtitle>
                        <Card.Text>
                            Software engineering on application built in Unity3D used as a practical tool for visualizing
                            meteorological data in 3D space. Wrote code to ingest binary NetCDF-4 data and use it to
                            render 3D iso-surface efficiently on GPU with compute shader (HLSL), and built 3D user interface
                            to interact with data in Unity3D (C#), as well as code and UI for serializing application state in
                            frames to allow for recording and playback of data interaction. Authors are David Li, Eric Lee, 
                            Elijah Schwelling, Mason Quick, Patrick Meyers, Ruofei Du, and Amitabh Varshney.
                        </Card.Text>
                        <Card.Link href="https://dl.acm.org/doi/10.1145/3334480.3382921">Read Paper</Card.Link>
                        <Card.Link href="https://www.youtube.com/watch?v=pdkXhkTtimY">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={VRST19} />
                    <Card.Header as="h5">
                        Spatially Accurate Generative Music with AR Drawing
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            Proceedings of the 25th ACM Symposium on Virtual Reality Software and Technology, 2019
                        </Card.Subtitle>
                        <Card.Text>
                            Built generative music application for iOS allowing users to draw shapes in augmented reality
                            world space that act as audio sequencers. Built custom virtual synthesizer for generating custom
                            sounds in the application using the AudioKit open-source library for Swift. Authors are Kyungjin
                            Yoo and Elijah Schwelling.
                        </Card.Text>
                        <Card.Link href="https://dl.acm.org/doi/10.1145/3359996.3365048">Read Paper</Card.Link>
                        <Card.Link href="https://www.youtube.com/watch?v=kKqnSsb4sR4">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={VRST18} />
                    <Card.Header as="h5">
                        Automatic 3D Modeling of Artwork and Visualizing Audio in an Augmented Reality Environment
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            Proceedings of the 24th ACM Symposium on Virtual Reality Software and Technology, 2018
                        </Card.Subtitle>
                        <Card.Text>
                            Developed augmented reality mobile application using Vuforia library and Unity3D (C#) for automatically
                            generating 3D renderings of artwork in a museum setting. Application allows client to scan a
                            painting using cloud recognition technology and generates 3D mesh from painting efficiently at
                            runtime. Authors are Elijah Schwelling and Kyungjin Yoo.
                        </Card.Text>
                        <Card.Link href="https://dl.acm.org/doi/10.1145/3281505.3281617">Read Paper</Card.Link>
                        <Card.Link href="https://www.youtube.com/watch?v=vVRU9urHgsg">Video Demo</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </motion.div>
    );
};

export default Publications;