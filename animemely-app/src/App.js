import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
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
import { getMovies, getSlide } from "./services/fakeMovieService";
import MovieContext from "./context/movieContext";
import "./App.css";

class App extends Component {
  state = {
    movies: getMovies(),
    slide : getSlide() ,
  };

  render() {
    return (
      <MovieContext.Provider value={this.state}>
        <div className="container">
          <Header />
          <Routes>
            {/* <Route path="/info-movie" element={<InfoMovie />} />
            <Route path="/watching-movie" element={<WatchingMovie />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/follow" element={<Follow />} /> */}
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
          <Footer />
        </div>
      </MovieContext.Provider>
    );
  }
}

export default App;
