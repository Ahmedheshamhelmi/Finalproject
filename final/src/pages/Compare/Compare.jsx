import React from 'react'
import './compare.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import product from '../../../public/assets/productimages/fresh/lamar.jpg'
import ReactStars from "react-rating-stars-component";
import ScrollToTop from '../../utilities/ScrollToTop'
import { NavLink } from 'react-router-dom';

export default function Compare() {



  return (
    <>
    <Header/>
    <section className='compare-products '>
      <div className="container py-3">
        <div className="row">
          <div className="col-3">
            <div className="compare-card position-relative">
              <div className="compare-product-image">
              {/* <i onClick={handleRemoveProduct} className="bi bi-x close position-absolute"></i> */}
                <NavLink to={`/Product/${product.id}`}>
                  <img className='img-fluid' src={product.productImage} alt="Product Image" />
                </NavLink>
              </div>
              <div className="compare-product-details pt-2">
                <NavLink to={`/Product/${product.id}`}>
                  <h5 className="title pb-2">
                    {product.productName}
                  </h5>
                </NavLink>
                <h6 className="price pb-2">
                  <strong>{product.productPrice}</strong>  EGP
                </h6>
                <div className='brand py-2'>
                  <h5>Brand :</h5>
                  <p className='mb-0'>{product.productBrand}</p>
                </div>
                <div className='brand py-2'>
                  <h5>Availability :</h5>
                  <p className='mb-0'>{product.isAvailable}</p>
                </div>
                <div className='brand py-2'>
                  <h5>Rating :</h5>
                  <div className='mb-0'>
                    <ReactStars
                    count={5}
                    size={24}
                    value={product.productRating}
                    edit={false}
                    activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

