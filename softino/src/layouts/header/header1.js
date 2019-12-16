import React, { Component } from 'react';

class Header1 extends Component {
    render() {
        return (
            <div>
                {/* preloader start */}
                {/* <div id="ht-preloader">
                    <div className="loader clear-loader">
                        <div className="loader-box" />
                        <div className="loader-box" />
                        <div className="loader-box" />
                        <div className="loader-box" />
                        <div className="loader-wrap-text">
                            <div className="text"><span>S</span><span>O</span><span>F</span><span>T</span><span>I</span><span>N</span><span>O</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* preloader end */}
                {/*header start*/}
                <header id="site-header" className="header header-1">
                    <div className="container-fluid">
                        <div id="header-wrap" className="box-shadow">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Navbar */}
                                    <nav className="navbar navbar-expand-lg">
                                        <a className="navbar-brand logo" href="index.html">
                                            <img id="logo-img" className="img-center" src="images/logo.png" alt="" />
                                        </a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span />
                                            <span />
                                            <span />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                            {/* Left nav */}
                                            <ul id="main-menu" className="nav navbar-nav ml-auto mr-auto">
                                                <li className="nav-item"> <a className="nav-link active" href="#">Home</a>
                                                    <ul>
                                                        <li><a href="index.html">Home 1</a>
                                                        </li>
                                                        <li><a href="index-2.html">Home 2</a>
                                                        </li>
                                                        <li><a href="index-3.html">Home 3</a>
                                                        </li>
                                                        <li><a href="index-4.html">Home 4</a>
                                                        </li>
                                                        <li><a href="index-5.html">Home 5</a>
                                                        </li>
                                                        <li><a href="index-6.html">Home 6</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"> <a className="nav-link" href="#">Pages</a>
                                                    <ul>
                                                        <li><a href="team.html">Team</a>
                                                        </li>
                                                        <li><a href="team-single.html">Team Single</a>
                                                        </li>
                                                        <li><a href="faq.html">Faq</a>
                                                        </li>
                                                        <li><a href="#">Element</a>
                                                            <ul>
                                                                <li><a href="shortcode-accordions.html">Accordion</a>
                                                                </li>
                                                                <li><a href="shortcode-blog-post.html">Blog Post</a>
                                                                </li>
                                                                <li><a href="shortcode-counter.html">Counter</a>
                                                                </li>
                                                                <li><a href="shortcode-feature-box.html">Featured Box</a>
                                                                </li>
                                                                <li><a href="shortcode-pricing.html">Pricing Table</a>
                                                                </li>
                                                                <li><a href="shortcode-team.html">Team</a>
                                                                </li>
                                                                <li><a href="shortcode-testimonial.html">Testimonials</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="coming-soon.html">Coming Soon</a>
                                                        </li>
                                                        <li><a href="error-404.html">Error 404</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="#">About Us</a>
                                                    <ul>
                                                        <li><a href="about-us.html">About Us 1</a>
                                                        </li>
                                                        <li><a href="about-us-2.html">About Us 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"> <a className="nav-link" href="#">Services</a>
                                                    <ul>
                                                        <li><a href="services.html">Service 1</a>
                                                        </li>
                                                        <li><a href="services-2.html">Service 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"> <a className="nav-link" href="#">Blogs</a>
                                                    <ul>
                                                        <li><a href="blog-grid-2.html">Blog Grid 2</a>
                                                        </li>
                                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                                        </li>
                                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                                        </li>
                                                        <li><a href="blog-single.html">Blog Single</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item"> <a className="nav-link" href="#">Contact Us</a>
                                                    <ul>
                                                        <li><a href="contact.html">Contact 1</a>
                                                        </li>
                                                        <li><a href="contact-2.html">Contact 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-theme btn-sm" href="login.html" data-text="Login"> <span>L</span><span>o</span><span>g</span><span>i</span><span>n</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*header end*/}
            </div>
        );
    }
}

export default Header1;