import { configureStore, createReducer } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { authReducer } from "./slices/authSlice";
import { cartReducer } from "./slices/cartSlice";
import { contactFormReducer } from "./slices/contactUsSlice";
import { subscribeReducer } from "./slices/subscribeSlice";


export const myStore = configureStore({
    reducer : {
        products : productsReducer,
        auth : authReducer,
        cart : cartReducer,
        contactUs : contactFormReducer,
        subscribe: subscribeReducer,
    }
})