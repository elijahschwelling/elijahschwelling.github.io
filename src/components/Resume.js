import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

import resume from './Resume.png'

const Resume = () => {
    return (
        <motion.div animate={{opacity: [0, 1]}} transition={{duration: 0.2}}>
            <Jumbotron className="page-title">
                <h1>RESUME</h1>
                <h4>SUMMARY OF WORK AND EXPERIENCES SO FAR</h4>
            </Jumbotron>
            <Card>
                <Card.Img variant="bottom" src={resume} />
            </Card>
        </motion.div>
    );
};

export default Resume;