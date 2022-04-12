import React from 'react';
import Heading from '../common/Heading';

const Slide = () => {
    return (
        <React.Fragment>
            <Heading name="anime noi bat :"/>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3421.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3416.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3421.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3421.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3421.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3471.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3474.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3346.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3470.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3470.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3421.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3476.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3421.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3476.jpg" alt="" />
                            </div>
                            <div className="col-md-2dot4">
                                <img src="https://animehay.club//upload/poster/3476.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Slide;