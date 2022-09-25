import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://server-production-c696.up.railway.app/user/data'

// export const STATUS = Object.freeze({
//     Failed: 'failed',
//     Success: 'success'
// })

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

const Admin = Object.freeze({
    admin: 2001,
    user: 1996
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: '',
        status: 'server is starting ...',
        auth: 0
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export function VerifyUser() {
    return async function veriryUser(dispatch) {
        dispatch(setStatus(Status.Loading))
        try {
            const res = await axios.get(url, {
                header: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }, withCredentials: true
            });
            dispatch(setUser(res.data.user))
            dispatch(setStatus(Status.Idle))
        } catch (e) {
            dispatch(setStatus(Status.Errors))
        }
    }

}

export const { setStatus, setUser } = userSlice.actions;

export default userSlice.reducer;