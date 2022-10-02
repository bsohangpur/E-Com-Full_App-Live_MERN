import { createSlice } from '@reduxjs/toolkit';
import axois from 'axios';

const url = 'http://localhost:3000/product/data/review';

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


export const productReviewSlice = createSlice({
  name: 'review',
  initialState: {
    status: 'server starting...',
    button: false
  },
  reducers: {
    productReviewStatus: (state, action) => {
      state.status = action.payload;
    },
    productReviewButton:(state, action)=>{
      state.button=action.payload;
    }
  },
});


export function ReviewUpdate(data, action, id) {
  return async function reviewUpdate(dispatch) {
    try {
      dispatch(productReviewStatus(Status.Sending))
      switch (action) {
        case "Add": {
          dispatch(productReviewStatus(Status.Uploading));
          await axois.put(`${url}/add/${id}`, data);
          dispatch(productReviewStatus(Status.Update));
          break;
        }
        case "Edit": {
          dispatch(productReviewStatus(Status.Updating))
          await axois.put(`${url}/edit/${id}`, data);
          dispatch(productReviewStatus(Status.Update));
          break;
        }
        case "Delete": {
          dispatch(productReviewStatus(Status.Deleting))
          await axois.put(`${url}/delete/${id}`);
          dispatch(productReviewStatus(Status.Update));
          break;
        }
        default: {
          console.log("No Update");
          dispatch(productReviewStatus(Status.Idle))
        }
      }
      dispatch(productReviewStatus(Status.Idle))
    }
    catch (e) {
      console.log(e);
      dispatch(productReviewStatus(Status.Errors))
    }
  }
}


export const { productReviewStatus, productReviewButton } = productReviewSlice.actions;

export default productReviewSlice.reducer