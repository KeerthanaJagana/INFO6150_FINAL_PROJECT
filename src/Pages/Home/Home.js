import React from 'react'
import CounterSection from '../../Components/Counter'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        // Retrieve form data and perform any necessary processing
        // For now, let's assume you want to redirect to the All Trips page
        navigate('/all-trips');
    };
    return (
        <div>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <div className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="intro-wrap">
                                <h1 className="mb-5">
                                    <span className="d-block">Let's Enjoy Your</span> Trip
                                    <span className=""> By Booking here</span>
                                </h1>

                                <div className="row">
                                    <div className="col-12">
                                        <form className="form" id="search-form" onSubmit={handleSearch}>
                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                                                    <select
                                                        name=""
                                                        id=""
                                                        className="form-control custom-select"
                                                    >
                                                        <option value="">Destination</option>
                                                        <option value="">Peru</option>
                                                        <option value="">Japan</option>
                                                        <option value="">Thailand</option>
                                                        <option value="">Brazil</option>
                                                        <option value="">United States</option>
                                                        <option value="">Israel</option>
                                                        <option value="">China</option>
                                                        <option value="">Russia</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-5">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="daterange"
                                                        placeholder="Select a Date"
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="# of People"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4 text-start">
                                                    <button
                                                        className="btn btn-primary btn-block"

                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                                <div className="col-lg-8 text-start">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"

                                                        >
                                                            Save this Search
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-5">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                    ></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src="images/hero-slider-1.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="images/hero-slider-2.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="images/hero-slider-3.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
           <div className="untree_co-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2 className="section-title text-center mb-3">Our Services</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-lg-4 order-lg-1">
                            <div className="h-100">
                                <div className="frame h-100">
                                    <div
                                        className="feature-img-bg h-100"
                                        style={{ backgroundImage: "url('images/hero-slider-1.jpg')" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
              <div
                            className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1"
                        >
                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="flaticon-house display-4 text-primary"></span>
                                    <h3>Beautiful Condo</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-1">
                                <div className="align-self-center">
                                    <span className="flaticon-restaurant display-4 text-primary"></span>
                                    <h3>Restaurants & Cafe</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3"
                        >
                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="flaticon-mail display-4 text-primary"></span>
                                    <h3>Easy to Connect</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="flaticon-phone-call display-4 text-primary"></span>
                                    <h3>24/7 Support</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

 )

}