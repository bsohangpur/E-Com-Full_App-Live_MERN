import { createSlice, current } from '@reduxjs/toolkit';
import axois from 'axios';

let Amount = 0;

const url = 'http://localhost:3000/chart/data';

const Status = Object.freeze({
    Idle: "idle",
    Loading: "loading",
    Errors: "error",
    Sending: "sending",
    Uploading: "uploading",
    Deleting: "deleting",
    Updating: "updating",
    Update: "update"
});


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        totalAmount: '',
        status: 'server starting...'
    },
    reducers: {
        addToCart: (state, action) => {
            state.data = action.payload;
        },
        setToCart: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter(items => items.cartProduct._id !== action.payload)
        },
        setTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
        productCartStatus: (state, action) => {
            state.status = action.payload;
        }
    }

})
//fetch chart product from DB
export function FetchChart(id) {
    return async function fetchChart(dispatch) {
        dispatch(productCartStatus(Status.Loading))
        try {
            if (id !== undefined) {
                const resData = await axois.get(`${url}/${id}`);
                dispatch(setTotalAmount(resData.data.totalAmount))
                dispatch(addToCart(resData.data));
                dispatch(productCartStatus(Status.Idle))
            }
        }
        catch (e) {
            console.log(e)
            dispatch(productCartStatus(Status.Errors))
        }
    }
}


//chart update function
export function ChartUpdate(data, action, id) {
    return async function chartUpdate(dispatch) {
        try {
            dispatch(productCartStatus(Status.Sending))
            switch (action) {
                case "Add": {
                    dispatch(productCartStatus(Status.Uploading));
                    if (id !== undefined) {
                        await axois.put(`${url}/add/${id}`, data, {
                            header: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            }, withCredentials: true
                        });
                        dispatch(productCartStatus(Status.Update));
                    }
                    else {
                        dispatch(addToCart(data))
                    }
                    break;
                }
                case "Delete": {
                    dispatch(productCartStatus(Status.Deleting))
                    await axois.put(`${url}/remove/${id}`, data);
                    dispatch(productCartStatus(Status.Update));
                    break;
                }
                default: {
                    console.log("No Update");
                    dispatch(productCartStatus(Status.Idle))
                }
            }
            dispatch(productCartStatus(Status.Idle))
        }
        catch (e) {
            console.log(e);
            dispatch(productCartStatus(Status.Errors))
        }
    }
}


export const { addToCart, removeFromCart, setTotalAmount, productCartStatus, setToCart } = cartSlice.actions

export default cartSlice.reducer;