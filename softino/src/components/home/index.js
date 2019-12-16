import React, { Component } from 'react';
import Herosection from '../mainSection/herosection';
import Skils from '../../widgets/home/skils';

class Home extends Component {
    render() {
        return (
            <div>
                <Herosection />
                <div className="page-content">
                    {/*feature start*/}
                    <Skils />
                    {/*feature end*/}
                    {/*about start*/}
                    <section className="pos-r bg-contain bg-pos-l py-10" data-bg-img="images/bg/02.png">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12 image-column p-0 pr-lg-5">
                                    <div className="img-box box-shadow">
                                        <div className="box-loader">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <img className="img-center" src="images/banner/03.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-5 ml-auto col-md-12 md-mt-5">
                                    <div className="section-title mb-4">
                                        <div className="title-effect">
                                            <div className="bar bar-top" />
                                            <div className="bar bar-right" />
                                            <div className="bar bar-bottom" />
                                            <div className="bar bar-left" />
                                        </div>
                                        <h6>About Us</h6>
                                        <h2>We're Building Modern And High Software</h2>
                                    </div>
                                    <ul className="list-unstyled list-icon mb-4">
                                        <li className="mb-3"><i className="la la-check" /> Deos et accusamus et iusto odio</li>
                                        <li className="mb-3"><i className="la la-check" /> Distinctively brand adaptive innovation</li>
                                        <li><i className="la la-check" /> Molestias a orci facilisis rutrum</li>
                                    </ul>
                                    <a className="btn btn-border btn-circle" href="#" data-text="See About"> <span>S</span><span>e</span><span>e</span><span> </span>
                                        <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span>
                                    </a>
                                    <a className="btn btn-theme btn-circle" href="#" data-text="Learn More"> <span>L</span><span>e</span><span>a</span><span>r</span><span>n</span>
                                        <span> </span><span>M</span><span>o</span><span>r</span><span>e</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*about end*/}
                    {/*feature start*/}
                    <section className="service pos-r bg-effect o-hidden">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 order-lg-12 image-column right">
                                    <div className="blink-img">
                                        <img className="img-fluid blinkblink" src="images/pattern/04.png" alt="" />
                                    </div>
                                    <img className="img-fluid z-index-1 w-100" src="images/svg/01.svg" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-12 md-mt-5 order-lg-1">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="featured-item style-3">
                                                <div className="featured-icon">
                                                    <i className="la la-diamond" />
                                                </div>
                                                <div className="featured-title">
                                                    <h5>Design</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-4">
                                            <div className="featured-item style-3">
                                                <div className="featured-icon">
                                                    <i className="la la-credit-card" />
                                                </div>
                                                <div className="featured-title">
                                                    <h5>Drag And Drop</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 sm-mt-3">
                                            <div className="featured-item style-3">
                                                <div className="featured-icon">
                                                    <i className="la la-desktop" />
                                                </div>
                                                <div className="featured-title">
                                                    <h5>High Resolution</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-4">
                                            <div className="featured-item style-3">
                                                <div className="featured-icon">
                                                    <i className="la la-headphones" />
                                                </div>
                                                <div className="featured-title">
                                                    <h5>Helping Support</h5>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*feature end*/}
                    {/*step start*/}
                    <section className="text-center pos-r">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                    <div className="section-title">
                                        <div className="title-effect">
                                            <div className="bar bar-top" />
                                            <div className="bar bar-right" />
                                            <div className="bar bar-bottom" />
                                            <div className="bar bar-left" />
                                        </div>
                                        <h6>How It Work</h6>
                                        <h2 className="title">Three Simple Step To Started Working Process</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div id="svg-container">
                                    <svg id="svgC" width="100%" height="100%" viewBox="0 0 620 120" preserveAspectRatio="xMidYMid meet" />
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="work-process">
                                        <div className="box-loader"> <span />
                                            <span />
                                            <span />
                                        </div>
                                        <div className="step-num-box">
                                            <div className="step-icon"><span><i className="la la-lightbulb-o" /></span>
                                            </div>
                                            <div className="step-num">01</div>
                                        </div>
                                        <div className="step-desc">
                                            <h4>Research Project</h4>
                                            <p className="mb-0">Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece adipising elit, sed doeo eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 md-mt-5">
                                    <div className="work-process">
                                        <div className="box-loader"> <span />
                                            <span />
                                            <span />
                                        </div>
                                        <div className="step-num-box">
                                            <div className="step-icon"><span><i className="la la-rocket" /></span>
                                            </div>
                                            <div className="step-num">02</div>
                                        </div>
                                        <div className="step-desc">
                                            <h4>Targeting</h4>
                                            <p className="mb-0">Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece adipising elit, sed doeo eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 md-mt-5">
                                    <div className="work-process">
                                        <div className="step-num-box">
                                            <div className="step-icon"><span><i className="la la-check-square" /></span>
                                            </div>
                                            <div className="step-num">03</div>
                                        </div>
                                        <div className="step-desc">
                                            <h4>Result</h4>
                                            <p className="mb-0">Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece adipising elit, sed doeo eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*step end*/}
                    {/*team start*/}
                    <section className="bg-effect right pos-r o-hidden">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="section-title">
                                        <div className="title-effect">
                                            <div className="bar bar-top" />
                                            <div className="bar bar-right" />
                                            <div className="bar bar-bottom" />
                                            <div className="bar bar-left" />
                                        </div>
                                        <h6>Creative Team</h6>
                                        <h2 className="title">Meet Our Expert team member will ready for your service</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-xl-10 col-lg-11 col-md-10 ml-auto">
                                    <div className="owl-carousel owl-theme" data-dots="false" data-items={3} data-md-items={2} data-sm-items={1} data-autoplay="true">
                                        <div className="item">
                                            <div className="team-member style-1">
                                                <div className="team-images">
                                                    <img className="img-fluid radius box-shadow" src="images/team/01.jpg" alt="" />
                                                    <div className="social-icons social-colored circle team-social-icon">
                                                        <ul>
                                                            <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f" /></a>
                                                            </li>
                                                            <li className="social-twitter"><a href="#"><i className="fab fa-twitter" /></a>
                                                            </li>
                                                            <li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g" /></a>
                                                            </li>
                                                            <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in" /></a>
                                                            </li>
                                                        </ul>
                                                    </div> <a className="team-link" href="team-single.html"><i className="la la-external-link" /></a>
                                                </div>
                                                <div className="team-description"> <span>Manager</span>
                                                    <h5>Jemy Lusto</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="team-member style-1">
                                                <div className="team-images">
                                                    <img className="img-fluid radius box-shadow" src="images/team/02.jpg" alt="" />
                                                    <div className="social-icons social-colored circle team-social-icon">
                                                        <ul>
                                                            <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f" /></a>
                                                            </li>
                                                            <li className="social-twitter"><a href="#"><i className="fab fa-twitter" /></a>
                                                            </li>
                                                            <li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g" /></a>
                                                            </li>
                                                            <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in" /></a>
                                                            </li>
                                                        </ul>
                                                    </div> <a className="team-link" href="team-single.html"><i className="la la-external-link" /></a>
                                                </div>
                                                <div className="team-description"> <span>Manager</span>
                                                    <h5>Tom Roadse</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="team-member style-1">
                                                <div className="team-images">
                                                    <img className="img-fluid radius box-shadow" src="images/team/03.jpg" alt="" />
                                                    <div className="social-icons social-colored circle team-social-icon">
                                                        <ul>
                                                            <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f" /></a>
                                                            </li>
                                                            <li className="social-twitter"><a href="#"><i className="fab fa-twitter" /></a>
                                                            </li>
                                                            <li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g" /></a>
                                                            </li>
                                                            <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in" /></a>
                                                            </li>
                                                        </ul>
                                                    </div> <a className="team-link" href="team-single.html"><i className="la la-external-link" /></a>
                                                </div>
                                                <div className="team-description"> <span>Manager</span>
                                                    <h5>Lana Dior</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="team-member style-1">
                                                <div className="team-images">
                                                    <img className="img-fluid radius box-shadow" src="images/team/04.jpg" alt="" />
                                                    <div className="social-icons social-colored circle team-social-icon">
                                                        <ul>
                                                            <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f" /></a>
                                                            </li>
                                                            <li className="social-twitter"><a href="#"><i className="fab fa-twitter" /></a>
                                                            </li>
                                                            <li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g" /></a>
                                                            </li>
                                                            <li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in" /></a>
                                                            </li>
                                                        </ul>
                                                    </div> <a className="team-link" href="team-single.html"><i className="la la-external-link" /></a>
                                                </div>
                                                <div className="team-description"> <span>Manager</span>
                                                    <h5>James Lynn</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="clients-logo">
                                        <img className="img-center" src="images/client/07.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 sm-mt-3">
                                    <div className="clients-logo">
                                        <img className="img-center" src="images/client/08.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 md-mt-3">
                                    <div className="clients-logo">
                                        <img className="img-center" src="images/client/09.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 md-mt-3">
                                    <div className="clients-logo">
                                        <img className="img-center" src="images/client/10.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*team end*/}
                    {/*pricing start*/}
                    <section className="pos-r">
                        <canvas id="canvas" />
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                                    <div className="section-title">
                                        <div className="title-effect">
                                            <div className="bar bar-top" />
                                            <div className="bar bar-right" />
                                            <div className="bar bar-bottom" />
                                            <div className="bar bar-left" />
                                        </div>
                                        <h6>Pricing Plan</h6>
                                        <h2 className="title">Choose affordable prices</h2>
                                        <p>Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-12">
                                    <div className="price-table">
                                        <div className="price-inside">Starter</div>
                                        <div className="price-header">
                                            <div className="price-value">
                                                <h2><span>$</span>33</h2>
                                                <span>Monthly Package</span>
                                            </div>
                                            <h3 className="price-title">Starter</h3>
                                        </div>
                                        <a className="btn btn-theme btn-circle my-4" href="#" data-text="Purchase Now"> <span>P</span><span>u</span><span>r</span><span>c</span><span>h</span><span>a</span><span>s</span><span>e</span>
                                            <span> </span><span>N</span><span>o</span><span>w</span>
                                        </a>
                                        <div className="price-list">
                                            <ul className="list-unstyled">
                                                <li>15 Analytics Compaign</li>
                                                <li>Unlimited Site licenses</li>
                                                <li>1 Database</li>
                                                <li>10 Free Optimization</li>
                                                <li>Html5 + Css3</li>
                                                <li>24/7 Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 md-mt-5">
                                    <div className="price-table active">
                                        <div className="price-inside">Premium</div>
                                        <div className="price-header">
                                            <div className="price-value">
                                                <h2><span>$</span>55</h2>
                                                <span>Monthly Package</span>
                                            </div>
                                            <h3 className="price-title">Premium</h3>
                                        </div>
                                        <a className="btn btn-theme btn-circle my-4" href="#" data-text="Purchase Now"> <span>P</span><span>u</span><span>r</span><span>c</span><span>h</span><span>a</span><span>s</span><span>e</span>
                                            <span> </span><span>N</span><span>o</span><span>w</span>
                                        </a>
                                        <div className="price-list">
                                            <ul className="list-unstyled">
                                                <li>15 Analytics Compaign</li>
                                                <li>Unlimited Site licenses</li>
                                                <li>1 Database</li>
                                                <li>10 Free Optimization</li>
                                                <li>Html5 + Css3</li>
                                                <li>24/7 Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 md-mt-5">
                                    <div className="price-table">
                                        <div className="price-inside">Professional</div>
                                        <div className="price-header">
                                            <div className="price-value">
                                                <h2><span>$</span>99</h2>
                                                <span>Monthly Package</span>
                                            </div>
                                            <h3 className="price-title">Professional</h3>
                                        </div>
                                        <a className="btn btn-theme btn-circle my-4" href="#" data-text="Purchase Now"> <span>P</span><span>u</span><span>r</span><span>c</span><span>h</span><span>a</span><span>s</span><span>e</span>
                                            <span> </span><span>N</span><span>o</span><span>w</span>
                                        </a>
                                        <div className="price-list">
                                            <ul className="list-unstyled">
                                                <li>15 Analytics Compaign</li>
                                                <li>Unlimited Site licenses</li>
                                                <li>1 Database</li>
                                                <li>10 Free Optimization</li>
                                                <li>Html5 + Css3</li>
                                                <li>24/7 Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*pricing end*/}
                    {/*testimonial start*/}
                    <section className="grey-bg pos-r o-hidden" data-bg-img="images/pattern/01.png">
                        <div className="wave-shape">
                            <img className="img-fluid" src="images/bg/03.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                                    <div className="section-title">
                                        <div className="title-effect">
                                            <div className="bar bar-top" />
                                            <div className="bar bar-right" />
                                            <div className="bar bar-bottom" />
                                            <div className="bar bar-left" />
                                        </div>
                                        <h6>Testimonial</h6>
                                        <h2 className="title">You Can See our clients feedback What You Say?</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div id="testimonial-1" className="testimonial-carousel carousel slide" data-ride="carousel" data-interval={2500}>
                                        {/* Wrapper for slides */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-md-12">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="testimonial style-1">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-quote"><i className="la la-quote-left" />
                                                                </div>
                                                                <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt Praesent sed nisi eleifend, Consectetur adipisicing elit</p>
                                                                <div className="testimonial-caption">
                                                                    <h5>Lana Roadse</h5>
                                                                    <label>CEO of Softino</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="testimonial style-1">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-quote"><i className="la la-quote-left" />
                                                                </div>
                                                                <p>Recommended Professional and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt Praesent sed nisi eleifend, Consectetur adipisicing elit,</p>
                                                                <div className="testimonial-caption">
                                                                    <h5>Lana Roadse</h5>
                                                                    <label>CEO of Softino</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="testimonial style-1">
                                                            <div className="testimonial-content">
                                                                <div className="testimonial-quote"><i className="la la-quote-left" />
                                                                </div>
                                                                <p>Consectetur Recommended Professional and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, adipisicing elit, sed do eiusmodas temporo incididunt Praesent sed nisi eleifend, Consectetur adipisicing elit,</p>
                                                                <div className="testimonial-caption">
                                                                    <h5>Lana Roadse</h5>
                                                                    <label>CEO of Softino</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Item */}
                                                </div>
                                                {/* End Carousel Inner */}
                                            </div>
                                            <div className="col-lg-5 col-md-12 md-mt-5">
                                                <div className="controls">
                                                    <div className="anti-01-holder">
                                                        <div className="anti-01" />
                                                    </div>
                                                    <div className="anti-02-holder">
                                                        <div className="anti-02" />
                                                    </div>
                                                    <div className="anti-03-holder">
                                                        <div className="anti-03" />
                                                    </div>
                                                    <ul className="nav">
                                                        <li data-target="#testimonial-1" data-slide-to={0} className="active">
                                                            <a href="#">
                                                                <img className="img-fluid" src="images/testimonial/01.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li data-target="#testimonial-1" data-slide-to={1}>
                                                            <a href="#">
                                                                <img className="img-fluid" src="images/testimonial/02.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li data-target="#testimonial-1" data-slide-to={2}>
                                                            <a href="#">
                                                                <img className="img-fluid" src="images/testimonial/03.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Carousel */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*testimonial end*/}
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                                    <div className="section-title">
                                        <div className="title-effect">
                                            <div className="bar bar-top" />
                                            <div className="bar bar-right" />
                                            <div className="bar bar-bottom" />
                                            <div className="bar bar-left" />
                                        </div>
                                        <h6>Blog Post</h6>
                                        <h2 className="title">Our Latest News</h2>
                                        <p>Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="post">
                                        <div className="post-image">
                                            <img className="img-fluid h-100 w-100" src="images/blog/01.jpg" alt="" /> <a className="post-categories" href="#">Photo</a>
                                        </div>
                                        <div className="post-desc">
                                            <div className="post-meta">
                                                <ul className="list-inline">
                                                    <li><i className="la la-calendar mr-1" /> 23 Jan, 2019</li>
                                                    <li><i className="la la-user mr-1" /> By ThemeHt</li>
                                                </ul>
                                            </div>
                                            <div className="post-title">
                                                <h4><a href="blog-single.html">Softino Performance Based Software</a></h4>
                                            </div>
                                            <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                            <a className="icon-btn mt-4" href="blog-single.html"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 md-mt-5">
                                    <div className="post">
                                        <div className="post-image">
                                            <img className="img-fluid h-100 w-100" src="images/blog/02.jpg" alt="" /> <a className="post-categories" href="#">Photo</a>
                                        </div>
                                        <div className="post-desc">
                                            <div className="post-meta">
                                                <ul className="list-inline">
                                                    <li><i className="la la-calendar mr-1" /> 23 Jan, 2019</li>
                                                    <li><i className="la la-user mr-1" /> By ThemeHt</li>
                                                </ul>
                                            </div>
                                            <div className="post-title">
                                                <h4><a href="blog-single.html">latest Software design in features</a></h4>
                                            </div>
                                            <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                            <a className="icon-btn mt-4" href="blog-single.html"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 md-mt-5">
                                    <div className="post">
                                        <div className="post-image">
                                            <img className="img-fluid h-100 w-100" src="images/blog/03.jpg" alt="" /> <a className="post-categories" href="#">Photo</a>
                                        </div>
                                        <div className="post-desc">
                                            <div className="post-meta">
                                                <ul className="list-inline">
                                                    <li><i className="la la-calendar mr-1" /> 23 Jan, 2019</li>
                                                    <li><i className="la la-user mr-1" /> By ThemeHt</li>
                                                </ul>
                                            </div>
                                            <div className="post-title">
                                                <h4><a href="blog-single.html">All Powerful Design feature In Softino</a></h4>
                                            </div>
                                            <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                            <a className="icon-btn mt-4" href="blog-single.html"> <i className="la la-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
            </div>
        );
    }
}

export default Home;