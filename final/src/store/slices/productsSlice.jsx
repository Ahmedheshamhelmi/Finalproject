import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products : [],
};
const url = 'http://localhost:3005/products'
export const getProducts = createAsyncThunk('products/getProducts',
    async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return rejectWithValue(error.msg)
    }
} )
const productsSlice = createSlice({
    name : "products",
    initialState: initialState,
    reducers : {
    },
    extraReducers : {
        [getProducts.pending] : () => {},
        [getProducts.fulfilled] : (state, action) => {
            state.products = action.payload;
        },
        [getProducts.rejected] : () => {},
    }
})

export const productsReducer = productsSlice.reducer ; 
export const productsActions = productsSlice.actions ;