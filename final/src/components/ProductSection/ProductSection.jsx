import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './productsection.css'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../store/slices/productsSlice'

export default function ProductSection({title,carouselSpeed}) {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
        },
        tablet: {
        breakpoint: { max: 1024, min: 767 },
        items: 3
        },
        mobile: {
        breakpoint: { max: 767, min: 576 },
        items: 2
        },
        smallmobile: {breakpoint: { max: 576, min: 0 },
        items: 2
        }
    };

    return (
        <section className='product-section  py-3 '>
            <div className="container">
                <div className="row rounded-3">
                    <h3 className='section-head col-12 mb-3'>
                        {title}
                    </h3>
                    <Carousel responsive={responsive} infinite={true} draggable={true} autoPlay={true} autoPlaySpeed={carouselSpeed}>
                        {title === "Hot Sales" ? (
                        products
                            .filter((product) => product.isOnSale === true)
                            .map((product) => (
                            <div className="mb-3 p-0" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                            ))
                        ) : title === "Best Sellers" ? (
                        products
                            .filter((product) => product.isBestSeller === true)
                            .map((product) => (
                            <div className="mb-3 p-0" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                            ))
                        ) : (
                        products
                            .filter((product) => product.isTrending === true)
                            .map((product) => (
                            <div className="mb-3 p-0" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                            ))
                        )}
                    </Carousel>;
                </div>
            </div>
        </section>
    )
}

// {products.map((product) => (
//     <div key={product.id}>
//         <ProductCard product={product}/>
//     </div>
// ))}

// {title == "Featured Products"? products.filter((product) => product.isFeatured === true).map((product) => (
//     <div className="col-3 mb-3 p-0" key={product.id}>
//     <ProductCard product={product} />
//     </div>
// ))
// :title == "Best Sellers"? products.filter((product) => product.isBestSeller === true).map((product) => (
//     <div className="col-3 mb-3 p-0" key={product.id}>
//     <ProductCard product={product} />
//     </div>
// ))
// :products.filter((product) => product.isTrending === true).map((product) => (
//     <div className="col-3 mb-3 p-0" key={product.id}>
//     <ProductCard product={product} />
//     </div>
// ))
// }