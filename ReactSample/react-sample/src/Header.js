import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink, Route, Redirect } from 'react-router-dom';

const Header = (props) => {
  return (<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="main-nav">
              <ul className="nav-container">
                <li><NavLink className="nav-item" exact to="/">Home</NavLink></li>
                <li><NavLink className="nav-item" exact to="/about">About</NavLink></li>
                <li><NavLink className="nav-item" exact to="/teachers">Teachers</NavLink></li>

              </ul>
            </div>
          </header>);
}

export default Header;
