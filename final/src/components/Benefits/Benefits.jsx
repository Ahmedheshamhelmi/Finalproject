import React from 'react'
import './benefits.css'
import benefit1 from '../../../public/assets/images2/b1.png'
import benefit2 from '../../../public/assets/images2/b2.png'
import benefit3 from '../../../public/assets/images2/b3.png'
import benefit4 from '../../../public/assets/images2/b4.png'
import benefit5 from '../../../public/assets/images2/b5.png'


export default function Benefits() {
    return (
        <section className='benefits-section py-5 my-3'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="benefits flex-column flex-lg-row d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <img src={benefit1} alt="Services" />
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p>For all orders over 200 EGP</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                                <img src={benefit2} alt="Services" />
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p>Save up to 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                                <img src={benefit3} alt="Services" />
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p>Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                                <img src={benefit4} alt="Services" />
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p>Get Factory direct price</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                                <img src={benefit5} alt="Services" />
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p>100% Protected Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
