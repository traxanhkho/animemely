import React, { Component } from 'react';
import Header from "./components/Header" ; 
import Home from './components/home/Home';
import History from './components/history/History';
import Follow from "./components/follow/Follow" ; 
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Home />
        {/* <History /> */}
        {/* <Follow /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

