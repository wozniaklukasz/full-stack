import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import {store} from '../store/store';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header/>
          <Main/>
          <Footer/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
