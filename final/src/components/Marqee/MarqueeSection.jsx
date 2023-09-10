import React from 'react'
import Marquee from 'react-fast-marquee'
import './marqee.css'
import { brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8 } from '../../../public/assets/images2'


export default function MarqueeSection() {
    return (
        <div className="marquee-section pt-5">
            <div className="container-fluid p-0">
                <div className="d-flex flex-row">
                    <div className="col-12">
                        <div className='marquee-container bg-white'>
                            <Marquee>
                                <div className='w-25 mx-4'>
                                    <img src={brand1} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand2} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand3} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand4} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand5} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand6} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand7} alt="Brand" />
                                </div>
                                <div className='w-25 mx-4'>
                                    <img src={brand8} alt="Brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
