import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Publications from './Publications.js';

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/resume">
                    <Resume></Resume>
                </Route>
                <Route exact path="/projects">
                    <Projects></Projects>
                </Route>
                <Route exact path="/experience">
                    <Experience></Experience>
                </Route>
                <Route exact path="/publications">
                    <Publications></Publications>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Main;