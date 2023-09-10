import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../store/slices/cartSlice'
import { NavLink } from 'react-router-dom'


export default function CartCard({product, totalPrice}) {
    const dispatch = useDispatch();
    const handleRemoveProduct = () => {
        dispatch(removeItem(product.id))
    };
    const handleIncrease = () => {
        dispatch(increaseQuantity(product.id));
    };
    const handleDecrease = () => {
        dispatch(decreaseQuantity(product.id));
    };
    console.log(product.productPriceonSale * product.quantity)
return (
            <div className="container-fluid">
                {/* <div className="row"> */}
                    <div key={product.id} className="product d-flex flex-row  flex-wrap   align-items-center">
                        <NavLink to={`/Product/${product.id}`} className="product-image col-1 ">
                            <img className='rounded-3' src={product.productImage} alt='Product Image'/>
                        </NavLink>
                        <div className="product-info col-6 ">
                            <NavLink to={`/Product/${product.id}`} className="product-title maincolor fw-bold">{product.productName}</NavLink>
                            <p className="product-description pe-4">{product.productDescription}</p>
                        </div>
                        {product.isOnSale?<div className="product-price2 col-1  ">{product?.productPriceonSale } EGP </div>:<div className="product-price2 col-1  ">{product?.productPrice} EGP </div>}
                        <div className="col-3 ps-lg-4 product-quantity d-flex justify-content-between">
                            <div className='input d-flex align-items-center'>
                            <div  onClick={handleDecrease} className="value-button" id="decrease">-</div>
                            <div id='number' >{product?.quantity}</div>
                            <div onClick={handleIncrease}  className="value-button" id="increase">+</div>
                            </div>
                            <div onClick={handleRemoveProduct} className="product-removal ms-5">
                            <i className="bi bi-trash-fill fs-3 maincolor"></i>
                            </div>
                        </div>
                        <div className="col-1 product-line-price">{product.productPriceonSale * product.quantity}</div>
                    </div>
                {/* </div> */}
            </div>
)
}
