import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import { getComments } from "./services/fakeCommentService";
import MovieContext from "./context/movieContext";
import { getCurrentUser } from "./services/fakeUserService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    movies: [],
    slide: [],
    currentUser: "",
    comments: [],
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
    this.setState({ slide: getSlide() });
    this.setState({ currentUser: getCurrentUser() });
    this.setState({ comments: getComments() });
    window.scrollTo(0, 0, "smooth");
  }

  render() {
    return (
      <MovieContext.Provider value={this.state}>
        <div className="container">
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/info-movie/:id" element={<InfoMovie />} />
            <Route
              path="/watching-movie/:movieId/:episodeId"
              element={<WatchingMovie />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/follow" element={<Follow />} /> */}
            {/* <Route path="/history" element={<History />} /> */}
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
