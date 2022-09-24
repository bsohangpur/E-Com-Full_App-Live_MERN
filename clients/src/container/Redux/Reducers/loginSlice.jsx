import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/login/data'

export const STATUS = Object.freeze({
    Failed:'failed',
    Success:'success'
})

const loginSlice = createSlice({
    name:'login',
    initialState:{
        data:'',
        status:{
            message:'',
            status:''
        },
        auth:false
    },
    reducers:{
        setStatus:(state, action)=>{
            state.status.status = action.payload.status === STATUS.Success ? STATUS.Success : STATUS.Failed;
            state.status.message = action.payload.message;
        },
        setAuth:(state, action)=>{
            state.auth = action.payload === STATUS.Success ? true : false;
        }
    }
})

export function SendData(data){
    return async function sendData(dispatch){
        const res = await axios.post(url, data, { withCredentials: true });
        dispatch(setStatus(res.data))
    }

}

export const {setStatus, setAuth} =  loginSlice.actions;

export default loginSlice.reducer;