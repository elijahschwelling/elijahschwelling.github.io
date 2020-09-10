import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ScrollableAnchor from 'react-scrollable-anchor';

const Experience = () => {
    return (
        <ScrollableAnchor id={'experience'}>
        <motion.div animate={{opacity: [0, 1]}} transition={{duration: 0.2}}>
            <Jumbotron className="page-title">
                <h1>EXPERIENCE</h1>
                <h4>EXTRA-CURRICULAR WORK EXPERIENCE</h4>
            </Jumbotron>
            <div>
                <Card>
                    <Card.Header as="h5">
                        Undergraduate Research Assistant
                    </Card.Header>
                    <Card.Body>
                        
                        <Card.Subtitle>
                            University of Maryland Graphics Visualization and Informatics Lab
                        </Card.Subtitle>
                        <Card.Text>
                            Software engineering on application built in Unity3D used as a practical tool for visualizing
                            meteorological data in 3D space. Wrote code to ingest binary NetCDF-4 data and use it to
                            render 3D iso-surface efficiently on GPU with compute shader (HLSL), and built 3D user interface
                            to interact with data in Unity3D (C#), as well as code and UI for serializing application state in
                            frames to allow for recording and playback of data interaction.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5">
                            Instructor for Full-stack Web Development with JavaScript and Node.js
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            University of Maryland College of Computer, Mathematical, and Natural Sciences
                        </Card.Subtitle>
                        <Card.Text>
                            Instructed class of roughly thirty students in the fundamentals of full-stack web development
                            using technologies including Node, Express, MongoDB, JavaScript, and HTML/CSS.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5">
                        First-Year Innovation and Research Experience Summer Fellow
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle>
                            University of Maryland College of Computer, Mathematical, and Natural Sciences
                        </Card.Subtitle>
                        <Card.Text>
                            Developed augmented reality mobile application using Vuforia image recognition library and REST API  in Unity (C#)
                            for automatically generating 3D renderings of artwork in a museum setting. Application allows client to scan a 
                            painting using cloud recognition technology and generates 3D mesh from painting efficiently at runtime.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </motion.div>
        </ScrollableAnchor>
    );
};

export default Experience;