import React from 'react'
import './notFound.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import img1 from '../../../public/assets/images2/notfound.jpg'
import { NavLink } from 'react-router-dom'

export default function NotFound() {

return (
    
    <>
    <Header/>
    <section className='notfound-section'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1>Page Not Found</h1>
                        <NavLink to='/' className='btn mt-2 backtohome'>Back to Home</NavLink>
                        <img src={img1} alt="404 Page Not Found" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
)
}
