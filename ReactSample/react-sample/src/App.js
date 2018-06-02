import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home/container/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="main-container">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Home />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
