import React from 'react'
import './categories.css'
import {laptop,largeapp,tv,mobile} from '../../../public/assets/images2'
import { NavLink } from 'react-router-dom'

export default function Categories2() {
    return (
        <div>
            <section className='categories-section py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='mb-4'>
                                Electronic Zone
                            </h2>
                            <div className='category gap-2  d-flex justify-content-around align-items-center'>
                                <NavLink to="/products/category/SmartphonesTabletsWearables" className='position-relative'>
                                    <img src={mobile} alt="category" />
                                    <h3 className='position-absolute'>
                                        SmartPhones & More
                                    </h3>
                                </NavLink>
                                <NavLink to="/products/category/ElectronicsAppliances" className='position-relative'>
                                    <img src={largeapp} alt="category" />
                                    <h3 className='position-absolute'>
                                        Large Appliances
                                    </h3>
                                </NavLink>
                                <NavLink to="/products/category/ElectronicsAppliances" className='position-relative'>
                                    <img src={tv} alt="category" />
                                    <h3 className='position-absolute'>
                                        TVs
                                    </h3>
                                </NavLink>
                                <NavLink to="/products/category/SmartphonesTabletsWearables" className='position-relative'>
                                    <img src={laptop} alt="category" />
                                    <h3 className='position-absolute'>
                                        Laptop
                                    </h3>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
