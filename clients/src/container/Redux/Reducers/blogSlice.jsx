import { createSlice } from '@reduxjs/toolkit';
import axois from 'axios';

const url = 'http://localhost:3000/blog/data';

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


export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: [],
    status: 'server starting...',
    button: {
      Add : false,
      Edit: false,
      Delete : false
    }
  },
  reducers: {
    blogStatus: (state, action) => {
      state.status = action.payload;
    },
    getBlog: (state, action) => {
      state.data = action.payload;
    },
    blogButton:(state, action)=>{
      state.button=action.payload;
    }
  },
});


export function FetchBlog() {
  return async function fetchBlog(dispatch) {
    dispatch(blogStatus(Status.Loading))
    try {
      const resData = await axois.get(url);
      dispatch(getBlog(resData.data));
      dispatch(blogStatus(Status.Idle))
    }
    catch (e) {
      console.log(e)
      dispatch(blogStatus(Status.Errors))
    }
  }
}


export function BlogUpdate(data, action, id) {
  return async function blogUpdate(dispatch) {
    try {
      dispatch(blogStatus(Status.Sending))
      switch (action) {
        case "Add": {
          dispatch(blogStatus(Status.Uploading));
          await axois.post(url, data);
          dispatch(blogStatus(Status.Update));
          break;
        }
        case "Edit": {
          dispatch(blogStatus(Status.Updating))
          await axois.put(`${url}/${id}`, data);
          dispatch(blogStatus(Status.Update));
          break;
        }
        case "Delete": {
          dispatch(blogStatus(Status.Deleting))
          await axois.delete(`${url}/${id}`);
          dispatch(blogStatus(Status.Update));
          break;
        }
        default: {
          console.log("No Update");
          dispatch(blogStatus(Status.Idle))
        }
      }
      dispatch(blogStatus(Status.Idle))
    }
    catch (e) {
      console.log(e);
      dispatch(blogStatus(Status.Errors))
    }
  }
}


export const { blogStatus, getBlog, blogButton } = blogSlice.actions;

export default blogSlice.reducer