import React from 'react';
import './main.scss';
import {Container} from 'react-bootstrap';
import About from '../pages/About';
import Home from '../pages/Home';
import {Switch, Route} from "react-router-dom";

function Main() {
  return (
    <Container>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Container>
  );
}

export default Main;
