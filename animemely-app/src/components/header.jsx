import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header-section'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Anime-Mely</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">bookmark</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;