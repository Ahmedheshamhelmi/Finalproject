import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../utilities/ScrollToTop'
import './product.css'
import ProductSection from '../../components/ProductSection/ProductSection'
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/productsSlice'
import { addItem } from '../../store/slices/cartSlice'



export default function Product() {

    const { id } = useParams();
    const [product,setProduct] = useState({});
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(getProducts())
        .then(() => {
        const foundProduct = products.find((product) => product.id === parseInt(id) );
        if (foundProduct) {
        setProduct(foundProduct);
        }
    });
    }, [dispatch, id, products]);

    const [selectedQuantity, setSelectedQuantity] = useState('1');
    const handleQuantityChange = (event) => {
        setSelectedQuantity(event.target.value);
    };
    const handleAddToCart = (product) => {
        dispatch(addItem({ ...product, quantity: Number(selectedQuantity) }));
    };

    return (
        <>
        <Header/>
        <section className="product-section2 mb-2">
            <div className="container pt-5">
                <div className="row rounded-3">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="container">
                            <div className="row rounded-4 p-0 bg-transparent">
                                <div className="col-12 p-0">
                                    <div className="product-image-container position-relative">
                                        <img className='w-100 rounded-4' src={product?.productImage} alt="Product Image" />
                                        {product.isOnSale?<div className="badge-overlay">
                                        <span className="top-left badge red">{product.salePercantage}% Off</span>
                                    </div>:null}
                                    {product.isTrending?<div className="product-badge-wrapper">
                                        <div className="product-badge color">
                                            <div className="product-badge-content fw-normal">
                                            Trend
                                            </div>
                                        </div>
                                    </div>:null}
                                    {product.isBestSeller?<div className="bestseller-badge">
                                        <img src="https://cdn-icons-png.flaticon.com/512/4715/4715264.png" alt="Best Seller" />
                                    </div>:null}
                                    </div>
                                </div>
                                {product.productImage2?<div className="col-6 p-0 pt-3 ps-2">
                                    <div className="product-image-container">
                                        <img className='w-100 rounded-4' src={product?.productImage2} alt="Product Image" />
                                    </div>
                                </div>:null}
                                {product.productImage3?<div className="col-6 p-0 pt-3 ps-2">
                                    <div className="product-image-container">
                                        <img className='w-100 rounded-4' src={product?.productImage3} alt="Product Image" />
                                    </div>
                                </div>:null}
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 mt-3 mt-lg-0 col-lg-6">
                        <div className="product-details px-2">
                            <h2 className='product-title maincolor pb-3'>
                                {product?.productName}
                            </h2>
                            {product.isOnSale? <div className='d-flex align-items-center'>
                                <h4 className='product-price  me-2'>
                                {product?.productPriceonSale } EGP 
                                </h4>
                                <h6 className='product-price fs-5 fw-normal' style={{color: '#ee2527', textDecoration: 'line-through'}}>
                                {product?.productPrice} EGP
                                </h6> 
                                <span className='h6 fw-normal ms-2'>(Inclusive of VAT)</span>
                            </div> :<h4 className='product-price'>
                                {product?.productPrice} EGP <span className='h6 fw-normal'>(Inclusive of VAT)</span>
                            </h4>}
                            <div className='d-flex align-items-center fw-bold'>
                                <span className='maincolor me-2'>Rating :</span> 
                                <div className=''>
                                    {product.productRating}<i className="bi bi-star-fill ms-1" style={{ color: '#ffd700',}}></i>
                                </div>
                            </div>
                                
                            <div className='product-description d-flex mt-3'>
                                <b className='mb-2 maincolor'>Product Categories :</b>
                                <p className='product-highlights ms-2'>
                                    {product?.productCategory}, {product?.productCategory2}
                                </p>
                            </div>
                            <div className='product-description mt-3'>
                                <b className='mb-2 maincolor'>Description :</b>
                                <p className='product-highlights mt-2 ps-0'>
                                    {product.productDescription}
                                </p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='fw-bold maincolor'>Quantity :</span>
                                <select value={selectedQuantity} onChange={handleQuantityChange} className="form-select ms-3 form-select-sm" aria-label=".form-select-sm example">
                                    <option defaultValue="1">1</option>
                                    <option defaultValue="2">2</option>
                                    <option defaultValue="3">3</option>
                                    <option defaultValue="4">4</option>
                                    <option defaultValue="5">5</option>
                                </select>
                                <button onClick={() => handleAddToCart(product)} className='addtocart ms-5'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <ProductSection title="Trending Products" carouselSpeed="4000"/>
        <ProductSection title="Best Sellers" carouselSpeed="3000"/>
        </section>
        <Footer/>
        <ScrollToTop/>
        </>
    )
}
