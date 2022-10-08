import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = '/login/data'

export const STATUS = Object.freeze({
    Failed: 'failed',
    Success: 'success'
})


const Admin = Object.freeze({
    nouser : 1111,
    admin: 2001,
    user: 1996
})

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        data: '',
        status: {
            message: '',
            status: ''
        },
        admin: {
            admin:false,
            type : Admin.nouser
        }
    },
    reducers: {
        setStatus: (state, action) => {
            state.status.status = action.payload.status === STATUS.Success ? STATUS.Success : STATUS.Failed;
            state.status.message = action.payload.message;
        },
        setAdmin:(state, action)=>{
            state.admin.admin = action.payload.admin
            state.admin.type = action.payload.type === Admin.admin ? Admin.admin : Admin.user;
        }
    }
})

export function SendData(data) {
    return async function sendData(dispatch) {
        const res = await axios.post(url, data, {
            header: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }, withCredentials: true
        });
        dispatch(setStatus(res.data))
        dispatch(setAdmin(res.data.admin))
    }

}

export const { setStatus, setAdmin } = loginSlice.actions;

export default loginSlice.reducer;