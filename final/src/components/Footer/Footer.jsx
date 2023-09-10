import React, { useState } from 'react'
import './footer.css'
import logo from '../../../public/assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import {dw1,dw2,dw3} from '../../../public/assets/images'
import { useDispatch, useSelector } from 'react-redux'
import {  subscribeFormData } from '../../store/slices/subscribeSlice'

export default function Footer() {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [subscribeEmail, setsubscribeEmail] = useState({
    email: '',
  });

  const changeHandler = (e) => {
    setsubscribeEmail({...subscribeEmail, [e.target.name] : e.target.value},)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(subscribeFormData(subscribeEmail))
    setTimeout(() => {
      navigate('/')
    }, 500);
  };


  return (
    <footer className="footer">
        <div className="container">     
          <div className="row">
            <div className="first-section col-12 col-lg-5 text-light fs-5">
              <p className='fw-bold'>
                Welcome to Atom,
              </p>
              <p>
                <strong>Atom HyperMarket</strong> offers you a wide range of products that suit your needs Everywhere. Skip traffic hours to the supermarket with online shopping on the Atom Hypermarket website. Explore all products and enjoy exclusive discounts and online offers.
              </p>
              <div className='d-flex flex-row align-items-center dw mt-4'>
                <p className='mb-0'>Download Our App :</p>
                <a href="#"><img src={dw1} alt="Google Play" /></a>
                <a href="#"><img src={dw2} alt="App Gallery" /></a>
                <a href="#"><img src={dw3} alt="App Store" /></a>
              </div>
            </div>
            <div className="second-section mt-lg-0 mt-4 col-12 col-md-6 col-lg-3 text-light ps-10">
              <h4>
                PAGE LINKS
              </h4>
              <hr className='w-50'/>
              <ul className='Links text-start p-0'>
                <li className='link'>
                  <NavLink to='/' className='nav-link'>Home</NavLink>
                </li>
                <li className='link'>
                  <NavLink to='/Products' className='nav-link'>All Categories</NavLink>
                </li>
                <li className='link'>
                  <NavLink to='/ContactUs' className='nav-link'>Contact Us</NavLink>
                </li>
                <li className='link'>
                  <NavLink to='/Login&register' className='nav-link'>Login & Register</NavLink>
                </li>
                <li className='link'>
                  <NavLink to={isAuth?'/Cart':'/Login&register'} className='nav-link'>Products Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className="third-section mt-lg-0 mt-3 col-12 col-md-6 col-lg-4">
              <div className='d-flex flex-column justify-content-center align-start'>
                <div className='d-flex align-items-center'>
                  <img className='logo' src={logo} alt="Logo" />
                  <span className='mx-3 fs-1 fw-bold text-light'>Atom</span>
                </div>
                <p className='mt-3'>Sign Up to Our NewsLetter</p>
                <form onSubmit={submitHandler}>
                  <input required onChange={changeHandler} value={subscribeEmail.email}  className='form-control w-75' placeholder='Enter Your E-mail' type="email" name='email' />
                  <button type="submit"  className='subscribe btn mt-4 w-50 m-auto'>Subscribe</button>
                </form>
                <div className='social-links mt-4'>
                  <div className='social-container'>
                    <a href="https://www.facebook.com/carrefouruae/" target="_blank">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                  <div className='social-container'>
                    <a href="https://twitter.com/carrefouruae/" target="_blank">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                  <div className='social-container'>
                    <a href="https://www.instagram.com/carrefouruae/" target="_blank">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <div className='social-container'>
                    <a href="https://www.youtube.com/c/CarrefourUAE" target="_blank">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
