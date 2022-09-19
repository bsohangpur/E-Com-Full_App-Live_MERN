import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextWrap } from '../../container/contexApi/States';
import { blogButton, FetchBlog } from '../../container/Redux/Reducers/blogSlice';

const AdminBlog = () => {
    // const BlogData = useContext(ContextWrap);
    const dispatch = useDispatch();
    const Blog = useSelector(state=>state.blog)

    const getWordStr = (str) => {
        const arr = str.split('.');
        return arr.filter(word => word !== '.');
    }

    useEffect(()=>{
        dispatch(FetchBlog())
    },[])

    const Alert = () => {

        setTimeout(() => {
            // BlogData.Mode('addblogalert', 'blog');
            dispatch(blogButton({Add:false}))
        }, 1000);

        return (
            <div style={{ top: "85vh" }} className="absolute flex justify-center w-full z-10">
                <div className="">
                    <p className="bg-green-300 px-12 py-2">Your Blog Is added sucessfully. 👍</p>
                </div>
            </div>
        )
    }

    return (
        <div style={{ width: "50rem" }} className='opacity-100 relative' >
            <div className="text-xl my-4">
                <h2 className="text-bold">All Blogs</h2>
            </div>
            {
                Blog.data.map((data) => {
                    const date = new Date(data.time);
                    return (
                        <div key={data._id} className="shadow-lg py-0">
                            <div className="md:flex mb-5 ">
                                <div className="mr-3 w-1/4 shadow-md opacity-80 hover:opacity-100 bg-slate-200 rounded-md">
                                    <img src={`http://localhost:3000/${data.image[0]}`} alt={data.imageAlt[0]} className="p-2 w-full h-full" />
                                </div>
                                <div className="w-2/3 ml-4">
                                    <h6 className="mb-3 capitalize font-medium">{data.title}</h6>
                                    <p className="my-1 float-md-right"><span className="mr-2 capitalize">{data.creater}</span></p>
                                    <p className="my-1 float-md-right">{date.toString().slice(0, 24)}</p>
                                    <p className="my-4 ">
                                        {getWordStr(data.content)[0] + '.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                Blog.button.Add
                    ?
                    <Alert />
                    :
                    ""

            }

        </div>
    )
}

export default AdminBlog