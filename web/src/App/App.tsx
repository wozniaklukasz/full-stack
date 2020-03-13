import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
