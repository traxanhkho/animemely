import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import History from "./components/history/History";
import Follow from "./components/follow/Follow";
import Footer from "./components/Footer";
import Login from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import InfoMovie from "./components/info-movie/InfoMovie";
import WatchingMovie from "./components/watching-movie/WatchingMovie";
import NotFound from "./components/NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path="/info-movie" component={InfoMovie} />
          <Route path="/watching-movie" component={WatchingMovie} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow} />
          <Route path="/history" component={History} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
