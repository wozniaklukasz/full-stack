import React from 'react';
import {Container} from 'react-bootstrap';
import {Switch, Route} from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import Card from './Card/Card';
import CardsList from './CardsList/CardsList';

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path="/cards/:cardId" component={Card} />
        <Route path="/cards" component={CardsList} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Container>
  );
};

export default Main;
