import React from 'react'
import {mbanner1, mbanner2, sbanner1, sbanner2, sbanner3,sbanner4} from '../../../public/assets/images'
import { NavLink } from 'react-router-dom'
import './smartbanner.css'

export default function SmartsBanner() {
    return (
        <section className='smart-section pb-4'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-0 mt-md-3 mt-lg-0">
                        <div className="main-banner position-relative">
                            <div id="banner-carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item rounded active" data-bs-interval="3000">
                                        <img className='banner-img' src={mbanner2} alt="Main banner" />
                                        <div className='main-banner-content position-absolute'>
                                            <h6>SUPERCHARGED FOR PROS.</h6>
                                            <h5>iPad S13+ Pro</h5>
                                            <p>Best Prices You will Find Anywhere</p>
                                            <NavLink to="/products/category/SmartphonesTabletsWearables">Buy Now</NavLink>
                                        </div>
                                    </div>
                                    <div className="carousel-item rounded" data-bs-interval="3000">
                                        <img className='banner-img' src={mbanner1} alt="Main banner" />
                                        <div className='main-banner-content position-absolute'>
                                            <h6>SUPERCHARGED FOR PROS.</h6>
                                            <h5 className='mb-3'>Special Sale</h5>
                                            <p>Get Yours Now</p>
                                            <NavLink>Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-lg-6 col-md-12 mt-2 mt-lg-0">
                        <div className="container p-0 h-100">
                            <div className="d-flex flex-row justify-content-between flex-wrap h-100">
                                <div className="col-6 pe-1 pb-1 small-banner position-relative">
                                        <img className='rounded banner-img' src={sbanner1} alt="Small banner" />
                                        <div className='small-banner-content position-absolute'>
                                            <h6>BEST SALE</h6>
                                            <h5>Laptops Max</h5>
                                            <p>Get a fresh perspective</p>
                                        </div>
                                </div>
                                <div className="col-6 ps-1 pb-1 small-banner position-relative">
                                        <img className='rounded banner-img' src={sbanner3} alt="Small banner" />
                                        <div className='small-banner-content position-absolute'>
                                            <h6>NEW ARRIVAL</h6>
                                            <h5>Buy iPad Air</h5>
                                            <p>Best Performance</p>
                                        </div>
                                </div>
                                <div className="col-6 pe-1 pt-1 small-banner position-relative">
                                        <img className='rounded banner-img' src={sbanner2} alt="Small banner" />
                                        <div className='small-banner-content position-absolute'>
                                            <h6>15% OFF</h6>
                                            <h5>SmartWatch 7</h5>
                                            <p className='w-60'>Shop the latest band styles and colors</p>
                                        </div>
                                </div>
                                <div className="col-6 ps-1 pt-1 small-banner position-relative">
                                        <img className='rounded banner-img' src={sbanner4} alt="Small banner" />
                                        <div className='small-banner-content position-absolute'>
                                            <h6>MULTIPLE STYLES</h6>
                                            <h5>AirPods Max</h5>
                                            <p className='w-60'>High-fidelity playback & ultra-low distortion</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
