import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/user/data'


export const Status = Object.freeze({
    Idle: "idle",
    Loading: "loading",
    Errors: "error",
    Sending: "sending",
    Uploading: "uploading",
    Deleting: "deleting",
    Updating: "updating",
    Update: "update"
});

export const Admin = Object.freeze({
    nouser : 1111,
    admin: 2001,
    user: 1996
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: '',
        status: 'server is starting ...',
        admin: {
            admin:undefined,
            type : Admin.nouser
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setAdminType:(state, action)=>{
            state.admin.type = action.payload
        },
        setAdminAdmin:(state, action)=>{
            state.admin.admin = action.payload
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
            if(res.data.admin.type === Admin.admin){
                dispatch(setAdminType(Admin.admin))
                dispatch(setAdminAdmin(res.data.admin.admin))
            }
            else if(res.data.admin.type === Admin.user){
                dispatch(setAdminType(Admin.user))
            }
            else{
                dispatch(setAdminType(Admin.nouser))
            }
            dispatch(setStatus(Status.Idle))
        } catch (e) {
            dispatch(setStatus(Status.Errors))
        }
    }

}


export const { setStatus, setUser, setAdminType, setAdminAdmin } = userSlice.actions;

export default userSlice.reducer;