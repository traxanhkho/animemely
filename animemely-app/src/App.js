import React, { Component } from 'react';
import Header from "./components/Header" ; 
import Home from './components/home/Home';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

