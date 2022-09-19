import { createSlice } from '@reduxjs/toolkit';

let Amount = 0;

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        data:[],
        product:'',
        totalAmount:''
    },
    reducers:{
        sendProduct:(state, action)=>{
            state.product=action.payload
        },
        addToCart:(state, action)=>{
            state.data = [...state.data, action.payload]
        },
        removeFromCart:(state, action)=>{
            state.data = state.data.filter(items => items._id !== action.payload)
        },
        setTotalAmount:(state, action)=>{
           Amount = Amount + action.payload
           state.totalAmount = Amount
        }
    }

})

export const {sendProduct, addToCart, removeFromCart, setTotalAmount} = cartSlice.actions

export default cartSlice.reducer;