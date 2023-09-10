import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../store/slices/productsSlice'


export default function ProductList() {


    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(getProducts())
    }, [])



    return (
        <div className="col-9">
            <section className="product-list">
                <div className="container-fluid">
                    <div className="row">
                    {products.map((product) => (
                        <div className="col-3 mb-3 p-0" key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
