import React, { useState } from 'react';
import { useEffect } from 'react';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { blogButton, FetchBlog } from '../../container/Redux/Reducers/blogSlice';
import AdminAlert from '../AdminAlert/AdminAlert';
import BlogEdit from './BlogEdit';

const MainBlogEdit = () => {
    const dispatch = useDispatch();
    const Blog =useSelector(state=>state.blog);
    const [EditData, setEditData] = useState()
    const [DeleteId, setDeleteId] = useState()

    useEffect(()=>{
        dispatch(FetchBlog())
    },[dispatch])

    const getWordStr = (str) => {
        const arr = str.split('.');
        return arr.filter(word => word !== '.');
    }
    
    return (
        Blog.button.Edit
            ?
            <BlogEdit data={EditData} id={EditData} />
            :
            Blog.button.Delete
                ?
                <AdminAlert id={DeleteId} page={"Blog"} function={"Delete"} />
                :
                <div style={{ width: "50rem" }} className='opacity-100' >
                    <div className="text-xl my-4">
                        <h2 className="text-bold">All Blogs</h2>
                    </div>
                    {
                        Blog.data.map((data) => {
                            const date = new Date(data.time)
                            return (
                                <div key={data._id} className="shadow-lg py-0">
                                    <div className="md:flex mb-5 ">
                                        <div className="mr-3 w-1/4 shadow-md opacity-80 hover:opacity-100 bg-slate-200 rounded-md">
                                            <img src={`http://localhost:3000/${data.image[0]}`} alt="5000" className="p-2 w-full h-full" />
                                        </div>
                                        <div className="w-2/3 ml-4">
                                            <h6 className="mb-3 capitalize font-medium">{data.title}</h6>
                                            <p className="my-1 float-md-right"><span className="mr-2 capitalize">{data.creater}</span></p>
                                            <p className="my-1 float-md-right">{date.toString().slice(0, 24)}</p>
                                            <p className="my-4 ">
                                                {getWordStr(data.content)[0] + '.'}
                                            </p>
                                        </div>
                                        <div className="flex justify-center items-center px-6">
                                            <button><MdEdit onClick={() => {
                                                // BlogData.Mode('editblog', 'blog')
                                                dispatch(blogButton({Edit:true}))
                                                setEditData(data)
                                            }} className='w-8 h-8 text-gray-600 hover:text-black shadow-md' /></button>
                                        </div>
                                        <div className="flex justify-center items-center px-6">
                                            <button><MdDeleteOutline onClick={() => {
                                                // BlogData.Mode('deleteblog', 'blog')
                                                dispatch(blogButton({Delete:true}))
                                                setDeleteId(data._id)
                                            }} className='w-8 h-8 text-gray-600 hover:text-black shadow-md' /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

    )
}

export default MainBlogEdit