import React, { Component } from 'react';

class Herosection extends Component {
    render() {
        return (
            <section className="fullscreen-banner banner p-0 bg-contain bg-pos-r" data-bg-img="images/bg/01.png">
                <div className="spinner-eff">
                    <div className="spinner-circle circle-1" />
                    <div className="spinner-circle circle-2" />
                </div>
                <div className="align-center pt-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 order-lg-1">
                                <img className="img-center wow jackInTheBox" data-wow-duration="3s" src="images/banner/01.png" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 order-lg-1 md-mt-5">
                                <h1 className="mb-4 wow fadeInUp" data-wow-duration="1.5s">Thinking The High Quality Software</h1>
                                <p className="lead mb-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">Softino is an all-new stylish Software For device that can show you things. awareness, drive traffic, connect with customers.</p>
                                <a className="btn btn-theme wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s" href="#" data-text="Start A Today"> <span>S</span><span>t</span><span>a</span><span>r</span><span>t</span>
                                    <span> </span><span>A</span>  <span> </span><span>T</span><span>o</span><span>d</span><span>a</span><span>y</span>
                                </a>
                                <a className="btn btn-dark wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s" href="#" data-text="Learn More"> <span>L</span><span>e</span><span>a</span><span>r</span><span>n</span>
                                    <span> </span><span>M</span><span>o</span><span>r</span><span>e</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Herosection;