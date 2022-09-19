import React, { useContext } from "react";
import { ContextWrap } from "../../container/contexApi/States";
import {useDispatch, useSelector} from 'react-redux';
import { blogButton, BlogUpdate } from "../../container/Redux/Reducers/blogSlice";


const AdminAlert = (props) => {
    const dispatch = useDispatch();
    const Blog = useSelector(state=>state.blog);
    const Data = useContext(ContextWrap);

    const comeBack = () => {
        dispatch(blogButton({Edit:false}));
        dispatch(blogButton({Delete:false}));
        // Data.Mode('deleteproduct', 'product');
        // Data.Mode('deleteblog', 'blog');
        // Data.Mode('editblog', 'blog');
    }

   

    const finalDelete = async () => {
        if(props.page==="Blog"){
            if(props.function==="Edit"){
                dispatch(BlogUpdate(props.data, 'Edit', props.id));
                dispatch(blogButton({Edit:true}));
            }
            else{
                dispatch(BlogUpdate('', 'Delete', props.id))
                dispatch(blogButton({Delete:true}));
            }
        }
        // Data.DeleteApi(props.productId);
        // Data.Mode('deleteproduct', 'product');
    }

    return (
        <div style={{ height: "85vh" }} className="w-full absolute z-10 flex justify-center items-center">
            <div className="w-1/3 h-48 bg-slate-200 fixed grid place-items-center">
                <div className="">
                    {
                        props.function==="Edit" 
                        ?
                        <p className="text-center">Are you sure to update the {props.page} it will remove past Data</p>
                        :
                        <p className="text-center">Are you sure to delete the {props.page} it will remove permanently</p>
                    }
                </div>
                <div className="flex gap-4">
                    <button onClick={() => finalDelete()} className='w-32 h-10 bg-red-500 rounded-sm cursor-pointer' type="submit">{props.function}</button>
                    <button type="submit" onClick={()=>comeBack()} className="w-32 h-10 bg-gray-300 rounded-sm">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAlert;