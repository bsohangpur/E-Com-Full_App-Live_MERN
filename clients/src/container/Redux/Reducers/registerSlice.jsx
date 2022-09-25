import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://server-production-c696.up.railway.app/register/data'


const registerSlice = createSlice({
    name:'register',
    initialState:{
        data:'',
        status:{
            message:'',
            status:''
        }
    },
    reducers:{
        setStatus:(state, action)=>{
            state.status.status = action.payload.status;
            state.status.message = action.payload.message;
        }
    }
})

export function SendData(data){
    return async function sendData(dispatch){
        const res = await axios.post(url, data);
        dispatch(setStatus(res.data))
    }

}

export const {setStatus} =  registerSlice.actions;

export default registerSlice.reducer;