import React from 'react';
import './app.scss';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import {store} from '../store/store';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
