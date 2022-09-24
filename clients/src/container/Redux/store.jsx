import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './Reducers/blogSlice';
import cartSlice from "./Reducers/cartSlice";
import loginSlice from "./Reducers/loginSlice";
import productSlice from "./Reducers/productSlice";
import registerSlice from "./Reducers/registerSlice";
import userSlice from "./Reducers/userSlice";


const store = configureStore({
    reducer: {
        blog: blogReducer,
        product: productSlice,
        register: registerSlice,
        login: loginSlice,
        cart: cartSlice,
        user: userSlice
    }
});

export default store;