import React from 'react'
import { ads1,ads2,ads3,ads4 } from '../../../public/assets/images'
import './adscarousel.css'

export default function AdsCarousel() {
    return (
        <section className='ads-section py-2'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center" data-bs-interval="2200">
                                    <img src={ads1} className="d-block" alt="ads-1"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2200">
                                    <img src={ads2} className="d-block" alt="ads-2"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2200">
                                    <img src={ads3}  className="d-block" alt="ads-3"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2200">
                                    <img src={ads4}  className="d-block" alt="ads-4"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
