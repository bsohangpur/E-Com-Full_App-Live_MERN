import React from "react";
import { useDispatch } from 'react-redux';
import { blogButton, BlogUpdate } from "../../container/Redux/Reducers/blogSlice";
import { productButton, ProductUpdate } from "../../container/Redux/Reducers/productSlice";


const AdminAlert = (props) => {
    const dispatch = useDispatch();

    const comeBack = () => {
        dispatch(productButton({ Edit: false }));
        dispatch(productButton({ Delete: false }));
        dispatch(blogButton({ Edit: false }));
        dispatch(blogButton({ Delete: false }));
    }

    const finalDelete = async () => {
        if (props.page === "Blog") {
            if (props.function === "Edit") {
                dispatch(BlogUpdate(props.data, 'Edit', props.id));
                dispatch(blogButton({ Edit: true }));
            }
            else {
                dispatch(ProductUpdate('', 'Delete', props.data.id));
                dispatch(productButton({ Delete: false }));
                dispatch(BlogUpdate('', 'Delete', props.id));
                dispatch(blogButton({ Delete: true }));
            }
        }
        else {
            if (props.function === "Edit") {
                dispatch(ProductUpdate(props.data, 'Edit', props.data.id));
                dispatch(productButton({ Edit: false }));
            }
            else {
                dispatch(ProductUpdate('', 'Delete', props.data));
                dispatch(productButton({ Delete: false }));
            }
        }
    }

    return (
        <div style={{ height: "85vh" }} className="w-full absolute z-10 flex justify-center items-center">
            <div className="w-1/3 h-48 bg-slate-200 fixed grid place-items-center">
                <div className="">
                    {
                        props.function === "Edit"
                            ?
                            <p className="text-center">Are you sure to update the {props.page} it will remove past Data</p>
                            :
                            <p className="text-center">Are you sure to delete the {props.page} it will remove permanently</p>
                    }
                </div>
                <div className="flex gap-4">
                    <button onClick={() => finalDelete()} className='w-32 h-10 bg-red-500 rounded-sm cursor-pointer capitalize' type="submit"></button>
                    <button type="submit" onClick={() => comeBack()} className="w-32 h-10 bg-gray-300 rounded-sm">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAlert;