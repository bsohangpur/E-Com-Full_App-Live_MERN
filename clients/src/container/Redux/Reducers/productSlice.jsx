import { createSlice } from '@reduxjs/toolkit';
import axois from 'axios';

const url = 'http://192.168.0.107:3000/product/data';

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


export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: 'server starting...',
    button: {
      Add : false,
      Edit: false,
      EditPage: false,
      Delete : false
    }
  },
  reducers: {
    productStatus: (state, action) => {
      state.status = action.payload;
    },
    getProduct: (state, action) => {
      state.data = action.payload;
    },
    productButton:(state, action)=>{
      state.button=action.payload;
    }
  },
});


export function FetchProduct() {
  return async function fetchProduct(dispatch) {
    dispatch(productStatus(Status.Loading))
    try {
      const resData = await axois.get(url);
      dispatch(getProduct(resData.data));
      dispatch(productStatus(Status.Idle))
    }
    catch (e) {
      console.log(e)
      dispatch(productStatus(Status.Errors))
    }
  }
}


export function ProductUpdate(data, action, id) {
  return async function productUpdate(dispatch) {
    try {
      dispatch(productStatus(Status.Sending))
      switch (action) {
        case "Add": {
          dispatch(productStatus(Status.Uploading));
          await axois.post(url, data);
          dispatch(productStatus(Status.Update));
          break;
        }
        case "Edit": {
          dispatch(productStatus(Status.Updating))
          await axois.put(`${url}/${id}`, data);
          console.log("Edit")
          dispatch(productStatus(Status.Update));
          break;
        }
        case "Delete": {
          dispatch(productStatus(Status.Deleting))
          await axois.delete(`${url}/${id}`);
          dispatch(productStatus(Status.Update));
          break;
        }
        default: {
          console.log("No Update");
          dispatch(productStatus(Status.Idle))
        }
      }
      dispatch(productStatus(Status.Idle))
    }
    catch (e) {
      console.log(e);
      dispatch(productStatus(Status.Errors))
    }
  }
}


export const { productStatus, getProduct, productButton } = productSlice.actions;

export default productSlice.reducer