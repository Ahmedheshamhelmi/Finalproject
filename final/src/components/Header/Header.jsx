import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../public/assets/images/logo.png'
import category from '../../../public/assets/images/categories.png'
import './header.css'
import ScrolltoTopBtn from '../../utilities/ScrolltoTopBtn'
import useVisible from '../../hooks/useVisible'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/authSlice'


export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const [visible] = useVisible();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout()),
    navigate('/')
  }

return (

  <header className='top-header w-100 position-fixed z-5' style={{ top: visible ? '0' : '-132px' }}>
        <ScrolltoTopBtn/>
        <div className="container-fluid">
          <div className="row maincolor">
            <div className="col-sm-12  pt-3 pb-2">
              <div className="container-fluid">
                <div className="row align-item-center">
                  <NavLink to='/' className="col-lg-2 col-md-2 col-12 justify-content-center logo d-flex align-items-center mt-2 mt-sm-0">
                    <img src={logo} alt="Logo" />
                    <span className='ms-3 fs-2 fw-bold maincolor'>Atom</span>
                  </NavLink>
                  <div className="col-lg-5 d-none d-md-none d-lg-block search">
                    <div className="input-group h-100">
                      <input type="text" className="form-control h-100" placeholder="Search for Products..." aria-label="Search for Products..." aria-describedby="basic-addon2"/>
                      <span className="input-group-text" id="basic-addon2">
                        <i className="bi bi-search-heart maincolor"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-10 mt-2 mt-sm-0 col-12 login">
                    <div className='d-flex pe-lg-5 me-lg-4 flex-md-fill flex-row align-item-center justify-content-lg-between justify-content-sm-start h-100'>
                        {/* <NavLink to='/Compare' className='link-item nav-link'>
                          <i className="bi bi-back me-2"></i>
                          <span className='fw-bold'>Compare</span>
                        </NavLink> */}
                        <NavLink to='/ContactUs' className='link-item nav-link'>
                          <i className="bi bi-phone-fill me-1"></i>
                          <span className='fw-bold'>Contact Us</span>
                        </NavLink>
                        {/** Login Authentication **/}
                        {isAuth?<div className='link-item nav-link position-relative'>
                          <i className="bi bi-person-badge me-2"></i>
                          <span className='fw-bold'>My Profile</span>
                          <ul className="dropdown-content">
                            <NavLink to='/' className='nav-link' onClick={handleLogOut} >
                              Log Out
                            </NavLink>
                          </ul>
                        </div>:<NavLink to='/Login&register' className='link-item nav-link w-50'>
                          <i className="bi bi-person-badge me-2"></i>
                          <span className='fw-bold'>Log in & Register</span>
                        </NavLink>}
                        <NavLink to={isAuth?'/Cart':'/Login&register'} className='link-item nav-link'>
                          <i className="bi bi-cart-dash-fill me-2"></i>
                          <span className='fw-bold me-2'>Cart</span>
                          <div className='d-flex cart justify-content-center align-items-center'>
                            <p className='mb-0 fw-bold quantity'>{totalQuantity}</p>
                          </div>
                        </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 d-block d-md-none'></div>
            <div className="col-sm-12 d-none d-md-block">
              <ul className='header-links   mb-0'>
                <li className='item-link'>
                  <img className='categoriy-icon' src={category} alt="Categories" />
                </li>
                <li className='item-link'>
                  <NavLink to={`/Products`}>All Categories</NavLink>
                </li>
                <li className='item-link'>
                  <NavLink to="/products/category/FreshFood">Fresh Food</NavLink>
                </li>
                <li className='item-link'>
                  <NavLink to="/products/category/FruitsVegetables">Fruits & Vegetables</NavLink>
                </li>
                <li className='item-link'>
                  <NavLink to="/products/category/BeveragesDrinks">Beverages & Drinks</NavLink>
                </li>
                <li className='item-link'>
                  <NavLink to="/products/category/HealthFitness">Health & Fitness</NavLink>
                </li>
                <li className='item-link'>
                  <NavLink to="/products/category/SmartphonesTabletsWearables">Smartphones, Tablets & Wearables</NavLink>
                </li>
                <li className='item-link'>
                  <NavLink to="/products/category/ElectronicsAppliances">Electronics & Appliances</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
  </header>
    )
}
