import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/logout/data'

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


const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        status: {
            message: '',
            status: ''
        }
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export function FetchLogout() {
    return async function fetchLogout(dispatch) {
        dispatch(setStatus(Status.Loading))
        try {
            await axios.get(url, {
                header: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }, withCredentials: true
            });
            window.location.reload();
            dispatch(setStatus(Status.Idle))
        }
        catch (e) {
            console.log(e)
            dispatch(setStatus(Status.Errors))
        }
    }
}


export const { setStatus } = logoutSlice.actions;

export default logoutSlice.reducer;