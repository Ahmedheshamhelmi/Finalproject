import React, { useState } from 'react'
import './contactus.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../utilities/ScrollToTop'
import { useDispatch } from 'react-redux'
import { contactFormData } from '../../store/slices/contactUsSlice'
import {  useNavigate } from 'react-router-dom'

export default function ContactUs() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const changeHandler = (e) => {
    setInputValues({...inputValues, [e.target.name] : e.target.value},)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactFormData(inputValues))
    setTimeout(() => {
      navigate('/')
    }, 500);
  };


  return (
    <>
    <Header/>
    <div className='contact-us'>
      <div className="container-sm container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 mr-auto">
            <div className="mb-5">
              <h1 className="text-white mb-4">Contact Info</h1>
              <p className="text-white">What can we help you with?</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-white mb-3">Cairo</h3>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex text-white mb-2">
                    <span className="mr-3">75 El-Nasr Rd, Al Manteqah Al Oula, Nasr City, Cairo Governorate 4450232</span> 
                  </li>
                  <li className="d-flex text-white mb-2">
                    <span className="w-75">
                      Saturday	9AM : 12AM
                      Sunday	9AM : 12AM
                      Monday	9AM : 12AM
                      Tuesday	9AM : 12AM
                      Wednesday	9AM : 12AM
                      Thursday	9AM : 12 AM
                      Friday	9AM : 12AM
                    </span>
                  </li>
                  <li className="d-flex text-white">
                    <span className="mr-3">
                    Contact Us : <strong>+800-73232</strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
              <h3 className="text-white mb-3">Alexandria</h3>
                <ul className="list-unstyled mb-5">
                  <li className="d-flex text-white mb-2">
                    <span className="mr-3">Alex City Center, Qetaa at Tarik as Sahrawi, Amreya 1, Alexandria Governorate 5258730</span> 
                  </li>
                  <li className="d-flex text-white mb-2">
                    <span className="w-75">
                      Saturday	10AM : 12AM
                      Sunday	10AM : 12AM
                      Monday	10AM : 12AM
                      Tuesday	10AM : 12AM
                      Wednesday	10AM : 12AM
                      Thursday	10AM : 12 AM
                      Friday	10AM : 12AM
                    </span>
                  </li>
                  <li className="d-flex text-white">
                    <span className="mr-3">
                    Contact Us : <strong>+800-73232</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box">
              <h3 className="heading maincolor">Send us a message</h3>
              <form onSubmit={submitHandler} className="mb-5" id="contactForm" name="contactForm">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="fullname" className="col-form-label maincolor fw-bold">Full Name</label>
                    <input required onChange={changeHandler} value={inputValues.fullname} type="text" className="form-control " name="fullname" id="name"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="email" className="col-form-label maincolor fw-bold">Email</label>
                    <input required onChange={changeHandler} value={inputValues.email} type="text" className="form-control " name="email" id="email"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message" className="col-form-label maincolor fw-bold">Message</label>
                    <textarea required onChange={changeHandler} value={inputValues.message} className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input type="submit" value="Send Message" className="submit-btn fw-bold btn btn-block btn-primary py-2 px-4"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

