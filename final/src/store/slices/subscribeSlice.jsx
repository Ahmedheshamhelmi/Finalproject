import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    subscribe: [],
};

export const subscribeFormData = createAsyncThunk(
    'subscribe/subscribeFormData',
    async (subscribeData, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const response = await axios.post('http://localhost:3005/subscribeNewsLetter', subscribeData);
        return  response.data;
    } catch (error) {
        return rejectWithValue(error.msg);
    }
    }
);

const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {},
    extraReducers : {
        [subscribeFormData.pending] : () => {},
        [subscribeFormData.fulfilled] : (state, action) => {
            state.contactUs = action.payload;
        },
        [subscribeFormData.rejected] : () => {},
    }
});

export const subscribeReducer = subscribeSlice.reducer ; 
export const subscribeActions = subscribeSlice.actions ;