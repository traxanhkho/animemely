import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header-section'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Anime-Mely</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Topics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">History</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">bookmark</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;