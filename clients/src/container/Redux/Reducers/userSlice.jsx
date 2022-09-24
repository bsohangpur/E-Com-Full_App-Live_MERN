import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/user/data'

export const STATUS = Object.freeze({
    Failed: 'failed',
    Success: 'success'
})


const Admin = Object.freeze({
    admin: 2001,
    user: 1996
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: '',
        status: {
            message: '',
            status: ''
        },
        auth: 0
    },
    reducers: {
        setStatus: (state, action) => {
            state.status.status = action.payload.status === STATUS.Success ? STATUS.Success : STATUS.Failed;
            state.status.message = action.payload.message;
        },
        setAuth: (state, action) => {
            state.auth = action.payload === STATUS.Success ? Admin.admin : Admin.user;
        }
    }
})

export function VerifyUser() {
    return async function veriryUser(dispatch) {
        try {
            const res = await axios.get(url, {
                header: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }, withCredentials: true
            });
            if (res.status !== 200) {
                dispatch(setStatus(res.data))
            }
            dispatch(setStatus(res.data))
            dispatch(setAuth(res.data.status))
        } catch (e) {
            dispatch(setStatus(STATUS.Failed))
            dispatch(setAuth(STATUS.Failed))
        }
        // const res = await axios.get(url, {
        //     header: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     }, withCredentials: true
        // });
        // 
    }

}

export const { setStatus, setAuth } = userSlice.actions;

export default userSlice.reducer;