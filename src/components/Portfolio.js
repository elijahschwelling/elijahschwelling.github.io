import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import Avatar from './Avatar.png';
import Main from './Main.js';

import './Portfolio.css';

const Portfolio = () => {
    return (
        <Container fluid>
            <div className="main-background"></div>
            <Col className="sidebar">
                <Image className="sidebar-avatar" src={Avatar} rounded />
            <h2 className="sidebar-name">Elijah Schwelling</h2>
            <Nav defaultActiveKey="/Home" className="flex-column">
            <Nav.Link className="sidebar-link" href="#home">HOME</Nav.Link>
            <Nav.Link className="sidebar-link" href="#projects">PROJECTS</Nav.Link>
            <Nav.Link className="sidebar-link" href="#publications">PUBLICATIONS</Nav.Link>
            <Nav.Link className="sidebar-link" href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link className="sidebar-link" href="#resume">RESUME</Nav.Link>
            </Nav>
            </Col>
            <Col className="main">
                <Main></Main>
            </Col>
        </Container>
    );
};

export default Portfolio;