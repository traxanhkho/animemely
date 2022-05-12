import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimeProvider } from "./context/AnimeContext";
import MovieContext from "./context/movieContext";
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
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {

  render() {
    return (
      <AnimeProvider>
          <div className="container">
            <ToastContainer />
            <Header />
            <Routes>
              <Route path="/info-movie/:movieId" element={<InfoMovie />} />
              <Route
                path="/watching-movie/:movieId/:episodeId"
                element={<WatchingMovie />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/home" element={<Home />} />
              <Route path="/follow" element={<Follow />} />
              <Route path="/history" element={<History />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
            <Footer />
          </div>
      </AnimeProvider>
    );
  }
}

export default App;
