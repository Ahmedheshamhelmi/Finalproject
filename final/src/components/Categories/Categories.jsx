import React from 'react'
import './categories.css'
import {freshfruit,freshfish,freshmeat,freshdairy} from '../../../public/assets/images2'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    return (
        <div>
            <section className='categories-section py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='mb-4'>
                                Fresh from the farm
                            </h2>
                            <div className='category gap-2 d-flex flex-row justify-content-around align-items-center'>
                                <NavLink to="/products/category/FruitsVegetables" className='position-relative col-3'>
                                    <img src={freshfruit} alt="category" />
                                    <h3 className='position-absolute'>
                                        Fruits
                                    </h3>
                                </NavLink>
                                <NavLink to="/products/category/FreshFood" className='position-relative col-3'>
                                    <img src={freshdairy} alt="category" />
                                    <h3 className='position-absolute'>
                                        Dairy & Eggs
                                    </h3>
                                </NavLink>
                                <NavLink to="/products/category/FreshFood" className='position-relative col-3'>
                                    <img src={freshmeat} alt="category" />
                                    <h3 className='position-absolute'>
                                        Meat & Poultry
                                    </h3>
                                </NavLink>
                                <NavLink to="/products/category/FreshFood" className='position-relative col-3'>
                                    <img src={freshfish} alt="category" />
                                    <h3 className='position-absolute'>
                                        Fish & Seafood
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
