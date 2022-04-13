import React, { Component } from 'react';
import Header from "./components/Header" ; 
import Home from './components/home/Home';
import History from './components/history/History';
import Follow from "./components/follow/Follow" ; 
import Footer from './components/Footer';
import Login from './components/user/LoginForm';
import './App.css';
import RegisterForm from './components/user/RegisterForm';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <RegisterForm />
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <History /> */}
        {/* <Follow /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

