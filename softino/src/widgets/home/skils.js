import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

class Skils extends Component {
    render() {
        return (
            <section className="p-0 text-center wow fadeInUp" data-wow-duration="2s">
                <div className="container-fluid">
                    <div className="row custom-mt-10 z-index-1 md-mt-0">
                        <div className="col-md-12">
                            <OwlCarousel
                                items={4}
                                className="owl-theme"
                                dots={false}
                                autoplay={true}
                                loop
                            >
                                <div className="item">
                                    <div className="featured-item style-2">
                                        <div className="featured-icon">
                                            <i className="flaticon-data" />
                                            <span className="rotateme" />
                                        </div>
                                        <div className="featured-title">
                                            <h5>Professional tools</h5>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="featured-item style-2">
                                        <div className="featured-icon">
                                            <i className="flaticon-collaboration" />
                                            <span className="rotateme" />
                                        </div>
                                        <div className="featured-title">
                                            <h5>Fully Customizable</h5>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="featured-item style-2">
                                        <div className="featured-icon">
                                            <i className="flaticon-market" />
                                            <span className="rotateme" />
                                        </div>
                                        <div className="featured-title">
                                            <h5>Marketing</h5>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="featured-item style-2">
                                        <div className="featured-icon">
                                            <i className="flaticon-objective" />
                                            <span className="rotateme" />
                                        </div>
                                        <div className="featured-title">
                                            <h5>App integration</h5>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="featured-item style-2">
                                        <div className="featured-icon">
                                            <i className="flaticon-analytics" />
                                            <span className="rotateme" />
                                        </div>
                                        <div className="featured-title">
                                            <h5>Easily To Use</h5>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skils;