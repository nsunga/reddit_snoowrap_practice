import React, { Component } from 'react';
import './App.css';
import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
        </Router>
        <Home />
      </div>
    );
  }
}

export default App;
