import ReactStars from "react-rating-stars-component";
import { NavLink } from 'react-router-dom';
import './productcard.css'
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

export default function ProductCard({product}) {
    const dispatch = useDispatch();

    const handleAddtoCart = () => {
        dispatch(addItem(product))
    }

    return (
        <div className="product-card position-relative">
            <div className="product-img w-100 text-center mb-2">
                <NavLink className='w-100' to={`/Product/${product.id}`}>
                    <img className="prod-img w-100" src={product.productImage} alt="Phone" />
                </NavLink>
            </div>
            <div className='product-details'>
                <h6 className='brand'>
                    {product.productBrand}
                </h6>
                <NavLink to={`/Product/${product.id}`}>
                    <h5 className='title'>
                        {product.productName}
                    </h5>
                </NavLink>
                {product.isOnSale? <div className='d-flex align-items-center'>
                                <h4 className='price mb-0 fw-bold  me-2'>
                                {product?.productPriceonSale } EGP 
                                </h4>
                                <h6 className='price mb-0 ' style={{color: '#ee2527', textDecoration: 'line-through'}}>
                                {product?.productPrice}
                                </h6> 
                            </div> :<h4 className='price mb-0'>
                                {product?.productPrice} EGP 
                            </h4>}
                <ReactStars
                    count={5}
                    size={24}
                    value={product.productRating}
                    edit={false}
                    activeColor="#ffd700"
                />
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-1'>
                    <NavLink to={`/Product/${product.id}`}>
                        <i className="maincolor bi bi-eye-fill"></i>
                    </NavLink>
                    {/* <NavLink >
                        <i className="maincolor bi bi-back "></i>
                    </NavLink> */}
                    <NavLink onClick={handleAddtoCart}>
                        <i className="maincolor bi bi-bag-plus-fill"></i>
                    </NavLink>
                </div>
            </div>
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
)
}


