import React from "react";
import { useDispatch } from 'react-redux';
import { blogButton, BlogUpdate } from "../../container/Redux/Reducers/blogSlice";
import { productButton, ProductUpdate } from "../../container/Redux/Reducers/productSlice";


const AdminAlert = (props) => {
    const dispatch = useDispatch();
    //data from main page product from DB
    const { id, functions, data, page } = props.product
    const comeBack = () => {
        dispatch(productButton({ Edit: false }));
        dispatch(productButton({ Delete: false }));
        dispatch(blogButton({ Edit: false }));
        dispatch(blogButton({ Delete: false }));
    }

    const finalDelete = async () => {
        if (page === "Blog") {
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
            if (functions === "Edit") {
                dispatch(ProductUpdate(data, 'Edit', id));
                dispatch(productButton({ Edit: false }));
            }
            else {
                dispatch(ProductUpdate('', 'Delete', id));
                dispatch(productButton({ Delete: false }));
            }
        }
    }

    return (
        <div style={{ top: "40vh" }} className="absolute z-10 flex justify-center items-center">
            <div className="w-1/3 h-48 bg-slate-200 fixed grid place-items-center border-2 border-zinc-400">
                <div className="">
                    {
                        functions === "Edit"
                            ?
                            <p className="text-center">Are you sure to update the {page} it will remove past Data</p>
                            :
                            <p className="text-center">Are you sure to delete the {page} it will remove permanently</p>
                    }
                </div>
                <div className="flex gap-4">
                    <button onClick={() => finalDelete()} className=' hover:bg-transparent hover:text-red-900 hover:border-2 hover:border-red-700 w-32 h-10 bg-red-500 text-slate-50 rounded-sm cursor-pointer capitalize' type="submit">
                        {functions}
                    </button>
                    <button type="submit" onClick={() => comeBack()} className=" hover:bg-transparent hover:text-gray-900 hover:border-2 hover:border-gray-700 w-32 h-10 bg-gray-500 text-slate-50 rounded-sm">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAlert;