import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import AdsCarousel from '../AdsCarousel/AdsCarousel'
import SmartBanner from '../SmartBanner/SmartBanner'
import Benefits from '../Benefits/Benefits'
import Categories from '../Categories/Categories'
import Categories2 from '../Categories/Categories2'
import MarqueeSection from '../Marqee/MarqueeSection'
import ProductSection from '../ProductSection/ProductSection'
import ScrollToTop from '../../utilities/ScrollToTop'



export default function Layout() {

    return (
        <>
        
            <Header/>
            <SmartBanner/>
            <ProductSection title="Hot Sales" carouselSpeed="3000"/>
            <AdsCarousel/>
            <Categories/>
            <Benefits/> 
            <Categories2/>
            <ProductSection title="Best Sellers" carouselSpeed="3000"/>
            <ProductSection title="Trending Products" carouselSpeed="4000"/>
            <MarqueeSection/>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}
