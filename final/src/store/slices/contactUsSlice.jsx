import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    contactUs: [],
};

export const contactFormData = createAsyncThunk(
    'form/contactFormData',
    async (formData, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const response = await axios.post('http://localhost:3005/contactUs', formData);
        return  response.data;
    } catch (error) {
        return rejectWithValue(error.msg);
    }
    }
);

const contactFormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {},
    extraReducers : {
        [contactFormData.pending] : () => {},
        [contactFormData.fulfilled] : (state, action) => {
            state.contactUs = action.payload;
        },
        [contactFormData.rejected] : () => {},
    }
});

export const contactFormReducer = contactFormSlice.reducer ; 
export const contactFormActions = contactFormSlice.actions ;