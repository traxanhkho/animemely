import React, { Component } from 'react';
import Header from "./components/header" ; 
import Slide from './components/slide';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slide />
      </React.Fragment>
    );
  }
}

export default App;

