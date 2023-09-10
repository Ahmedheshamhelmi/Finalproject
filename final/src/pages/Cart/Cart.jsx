import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../utilities/ScrollToTop'
import './cart.css'
import CartCard from '../../components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import emptyCart from '../../../public/assets/images2/emptyCart.png'

export default function Cart() {
  const tax = 5
  const Shipping = 15
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = cartItems.reduce((accumulator, product) => {
    const productPrice = product.productPriceonSale * product.quantity;
    return accumulator + productPrice;
  }, 0);
  const grandTotal = ((totalPrice * ( tax / 100) ) + Shipping + totalPrice).toFixed(2)
  

  return (
    <>
      <Header/>
      <section className='cart-section'>
        <div className="container pt-3 pb-5">
          {cartItems.length != 0 ?
          <div className="row">
            <div className="col-12 p-0">
              <div className="shopping-cart">
                <div className="column-labels d-none d-lg-flex">
                  <h5 className="product-image text-transparent">Image</h5>
                  <h5 className="product-info">Product</h5>
                  <h5 className="product-price2 ms-4">Price</h5>
                  <h5 className="product-quantity">Quantity</h5>
                  <h5 className="product-line-price">Total</h5>
                </div>
                {cartItems.map((product) => {
                  return <CartCard key={product.id} product={product} />
                })}
              </div>
            </div>
            <div className="shipping col-12 col-md-6 p-0">
                  <h3 className='maincolor mb-3 mt-2'>Shipping Details</h3>
                  <label htmlFor="fname" className="form-label">Full Name</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input type="text" className="form-control" name='fname' placeholder="John M. Doe" required/>
                  </div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-envelope-at-fill"></i>
                    </span>
                    <input type="email" className="form-control" name='email' placeholder="john@gmail.com"/>
                  </div>
                  <label htmlFor="address" className="form-label">Shipping Address</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input type="text" className="form-control" name='address' placeholder="542 W. 15th Street"/>
                  </div>
                  <label htmlFor="city" className="form-label">City</label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-buildings-fill"></i>
                    </span>
                    <input type="text" className="form-control" name='city' placeholder="Cairo"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="district" className="form-label">District</label>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" name='district' placeholder="NasrCity"/>
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="postalcode" className="form-label">Postal Code</label>
                      <div className="input-group mb-3">
                        <input id='postalcode' type="number" className="form-control" name='postalcode' placeholder="11765"/>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="total-section mt-3 mt-md-0 col-12 col-md-6 p-0 d-flex flex-column justify-content-end align-items-end">
              <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">{totalPrice}</div>
              </div>
              <div className="totals-item">
                <label>Tax ({tax}%)</label>
                <div className="totals-value" id="cart-tax">{(totalPrice * ( tax / 100) ).toFixed(2)}</div>
              </div>
              <div className="totals-item">
                <label>Shipping</label>
                <div className="totals-value" id="cart-shipping">15.00</div>
              </div>
              <div className="totals-item totals-item-total">
                <label>Grand Total</label>
                <div className="totals-value" id="cart-total">{grandTotal}</div>
              </div>
              <button className="checkout">Checkout</button>
            </div>
          </div>
          
          :<div className="row">
              <div className="col-12 empty-cart text-center">
                <img src={emptyCart} alt="Empty Cart" />
              </div>
            </div>}
        </div>
      </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
