import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    totalQuantity : 0
};

export const getCartData = createAsyncThunk('cart/getCartData', async (id) => {
    const response = await fetch('http://localhost:3005/users/'+id)
    const data = await response.json();
    return data
})
export const updateCartData = createAsyncThunk('cart/updateCartData', async (data) => {
    await fetch('http://localhost:3005/users/'+data.id , {
        method : 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body : JSON.stringify({cart : data.cart})
    })
})

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {
        addItem : (state, action) => {
            const { quantity, ...product } = action.payload;
            const item = state.cart.find(item => item.id === product.id);
            if (item) {
                item.quantity += quantity;
            } else {
                state.cart.push({ ...product, quantity: quantity || 1 });
            }
        },
        removeItem : (state, action) => {
            state.cart = state.cart.filter(item => item.id != action.payload)
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity <5 ) {
            item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
            item.quantity--
            }
        },
        calculateQuantity: (state) => {
            state.totalQuantity = state.cart?.reduce((acc, item) => 
                acc + item.quantity , 0
            )
        }
    },
    extraReducers : {
        [getCartData.fulfilled] : (state, action) => {
            state.cart = action.payload.cart;
        }
    }
})


export const {addItem, removeItem, removeAll, increaseQuantity, decreaseQuantity, selectTotalPrice, calculateQuantity} = cartSlice.actions ; 
export const cartReducer = cartSlice.reducer ;