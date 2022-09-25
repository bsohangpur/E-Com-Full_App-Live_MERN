import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/complain/data'

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
  

const complainSlice = createSlice({
    name:'complain',
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
        },
        getComplain:(state, action)=>{
            state.data = action.payload;
        },
        complainStatus:(state, action)=>{
            state.status = action.payload;
        }
    }
})

export function FetchComplain() {
    return async function fetchComplain(dispatch) {
      dispatch(complainStatus(Status.Loading))
      try {
        const resData = await axios.get(url);
        dispatch(getComplain(resData.data));
        dispatch(complainStatus(Status.Idle))
      }
      catch (e) {
        console.log(e)
        dispatch(complainStatus(Status.Errors))
      }
    }
  }

export function SendData(data){
    return async function sendData(dispatch){
        const res = await axios.post(url, data);
        dispatch(setStatus(res.data))
    }

}

export const {setStatus, getComplain, complainStatus} =  complainSlice.actions;

export default complainSlice.reducer;