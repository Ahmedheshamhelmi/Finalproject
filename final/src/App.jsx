import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Home, ContactUs, LogIn, Cart, Compare, Products, Product, NotFound} from './pages'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateQuantity, getCartData, updateCartData } from './store/slices/cartSlice'


export default function App() {
  let isAuth = useSelector((state) => state.auth.isAuth);
  let userId = useSelector((state) => state.auth.userId);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect( () => {
      if (isAuth) {
        dispatch(getCartData(userId));
      }
  }, [dispatch, isAuth, userId]);
  useEffect( () => {
    dispatch(updateCartData({id: userId, cart : cart}))
    dispatch(calculateQuantity())
  }, [cart, dispatch, userId]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path="/products/category/:category" element={<Products />} />
        <Route path='/Product/:id' element={<Product/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Login&register' element={<LogIn />}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Compare' element={<Compare/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
