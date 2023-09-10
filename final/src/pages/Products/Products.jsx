import React, { useEffect, useState } from 'react'
import './products.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../utilities/ScrollToTop'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../store/slices/productsSlice'
import { useLocation, useParams } from 'react-router-dom'

export default function Products() {
    const location = useLocation();
    const { category } = useParams();
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState('');
    const [brandProduct, setBrandProduct] = useState('');
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(getProducts())
        setCurrentCategory(category || '');
    }, [dispatch, category])
    const handleClick = (elementValue) => {
        setCurrentCategory(elementValue);
    };
    const handleClickBrand = (elementValue) => {
        setBrandProduct(elementValue);
    };
    return (
        <>
            <Header/>
            <div className="store-products">
                <div className="container py-3">
                    <div className="row">
                        <aside className="col-12 col-sm-3">
                            <div className='filter-card bg-white mb-3'>
                                <h3 className="filter-title mb-3">
                                    Shop by Categories
                                </h3>
                                <hr className='textcolor' />
                                <div className='categories-container'>
                                    <ul className='categories-list'>
                                        <li onClick={() => handleClick('FreshFood')} className='category-item'>Fresh Food</li>
                                        <li onClick={() => handleClick('FruitsVegetables')} className='category-item'>Fruits & Vegetables</li>
                                        <li onClick={() => handleClick('BeveragesDrinks')} className='category-item'>Beverages & Drinks</li>
                                        <li onClick={() => handleClick('HealthFitness')} className='category-item'>Health & Fitness</li>
                                        <li onClick={() => handleClick('SmartphonesTabletsWearables')} className='category-item'>Smartphones, Tablets & Wearables</li>
                                        <li onClick={() => handleClick('ElectronicsAppliances')} className='category-item'>Electronics & Appliances</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card bg-white mb-3'>
                                <h3 className="filter-title">
                                    Filter by Brand
                                </h3>
                                <hr className='textcolor' />
                                <div>
                                
                                </div>
                                <div className='categories-container'>
                                    <ul className='categories-list'>
                                        {Array.from(new Set(products.map((product) => product.productBrand))).map((brand) => (
                                        <li onClick={() => handleClickBrand(brand)} className='category-item' key={brand}>{brand}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card bg-white mb-3'>
                                <h3 className="filter-title">
                                    Shop by Availability
                                </h3>
                                <hr className='textcolor' />
                                <div className='categories-container'>
                                    <ul className='categories-list'>
                                        <li className='category-item'>
                                            <div className="form-check">
                                                <input className="form-check-input" value={`availble`} type="checkbox" id='availble' name='availble'/>
                                                <label className='form-check-label' htmlFor="availble">In Stock</label>
                                            </div>
                                        </li>
                                        <li className='category-item'>
                                            <div className="form-check">
                                                <input type="checkbox" value={`notAvailble`} className="form-check-input" id="notAvailble"/>
                                                <label className="form-check-label" htmlFor="notAvailble">Out of Stock</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card bg-white mb-3'>
                                <h3 className="filter-title">
                                    Shop by Sale
                                </h3>
                                <hr className='textcolor' />
                                <div className='categories-container'>
                                    <ul className='categories-list'>
                                        <li className='category-item'>
                                            <div className="form-check">
                                                <input className="form-check-input" value={`On Sale`} type="checkbox" id='saleCheckBox' name='saleCheckBox'/>
                                                <label className='form-check-label' htmlFor="saleCheckBox">On Sale</label>
                                            </div>
                                        </li>
                                        <li className='category-item'>
                                            <div className="form-check">
                                                <input type="checkbox" value={`Not On Sale`} className="form-check-input" id="notsaleCheckBox" name="notsaleCheckBox"/>
                                                <label className="form-check-label" htmlFor="notsaleCheckBox">Not On Sale</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <div className="col-12 col-sm-9">
                            <section className="product-list">
                                <div className="container-fluid">
                                    <div className="row">
                                    {currentCategory != '' ? (
                                        brandProduct != '' ? (
                                            products
                                            .filter((product) => product.productCategory === currentCategory && product.productBrand === brandProduct)
                                            .map((product) => (
                                                <div className="col-lg-3 col-md-4 col-6 mb-3 p-0" key={product.id}>
                                                <ProductCard product={product} />
                                                </div>
                                            ))
                                        ) : (
                                            products
                                            .filter((product) => product.productCategory === currentCategory)
                                            .map((product) => (
                                                <div className="col-lg-3 col-md-4 col-6 mb-3 p-0" key={product.id}>
                                                <ProductCard product={product} />
                                                </div>
                                            ))
                                        )
                                        ) : brandProduct !== '' ? (
                                        products
                                            .filter((product) => product.productBrand === brandProduct)
                                            .map((product) => (
                                            <div className="col-lg-3 col-md-4 col-6 mb-3 p-0" key={product.id}>
                                                <ProductCard product={product} />
                                            </div>
                                            ))
                                        ) : (
                                        products.map((product) => (
                                            <div className="col-lg-3 col-md-4 col-6 mb-3 p-0" key={product.id}>
                                            <ProductCard product={product} />
                                            </div>
                                        ))
                                    )}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

// {currentCategory !== '' ? (
//     brandProduct !== '' ? (
//         products
//         .filter((product) => product.productCategory === currentCategory && product.productBrand === brandProduct)
//         .map((product) => (
//             <div className="col-3 mb-3 p-0" key={product.id}>
//             <ProductCard product={product} />
//             </div>
//         ))
//     ) : (
//         products
//         .filter((product) => product.productCategory === currentCategory)
//         .map((product) => (
//             <div className="col-3 mb-3 p-0" key={product.id}>
//             <ProductCard product={product} />
//             </div>
//         ))
//     )
//     ) : brandProduct !== '' ? (
//     products
//         .filter((product) => product.productBrand === brandProduct)
//         .map((product) => (
//         <div className="col-3 mb-3 p-0" key={product.id}>
//             <ProductCard product={product} />
//         </div>
//         ))
//     ) : (
//     products.map((product) => (
//         <div className="col-3 mb-3 p-0" key={product.id}>
//         <ProductCard product={product} />
//         </div>
//     ))
// )}




// {currentCategory != '' ?   products.filter( (product) => {
//     return product.productCategory === currentCategory;
//     }).map((product) => (
//     <div className="col-3 mb-3 p-0" key={product.id}>
//         <ProductCard product={product}/>
//     </div>
//     )):products.map((product) => (
//         <div className="col-3 mb-3 p-0" key={product.id}>
//             <ProductCard product={product}/>
//         </div>
//     ))}