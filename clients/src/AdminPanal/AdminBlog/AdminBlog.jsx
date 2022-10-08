import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogButton, FetchBlog } from '../../container/Redux/Reducers/blogSlice';

const AdminBlog = () => {
    // const BlogData = useContext(ContextWrap);
    const dispatch = useDispatch();
    const {data, button} = useSelector(state=>state.blog)

    const getWordStr = (str) => {
        const arr = str.split('.');
        return arr.filter(word => word !== '.');
    }

    useEffect(()=>{
        dispatch(FetchBlog())
    },[dispatch])

    const Alert = () => {

        setTimeout(() => {
            // BlogData.Mode('addblogalert', 'blog');
            dispatch(blogButton({Add:false}))
        }, 1000);

        return (
            <div style={{ top: "80vh" }} className="absolute flex justify-center left-1/2 right-1/2 z-10">
                <div className=" fixed">
                    <p style={{ width: "22rem" }} className="bg-green-300 flex justify-center py-2">Your Blog Is added sucessfully. 👍</p>
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
                data.map((value) => {
                    const { _id, title, creater, content, image, imageAlt, time } = value
                    const date = new Date(time);
                    return (
                        <div key={_id} className="shadow-lg py-0">
                            <div className="md:flex mb-5 ">
                                <div className="mr-3 w-1/4 shadow-md opacity-80 hover:opacity-100 bg-slate-200 rounded-md">
                                    <img src={`http://localhost:3000/${image[0]}`} alt={imageAlt[0]} className="p-2 w-full h-full" />
                                </div>
                                <div className="w-2/3 ml-4">
                                    <h6 className="mb-3 capitalize font-medium">{title}</h6>
                                    <p className="my-1 float-md-right"><span className="mr-2 capitalize">{creater}</span></p>
                                    <p className="my-1 float-md-right">{date.toString().slice(0, 24)}</p>
                                    <p className="my-4 ">
                                        {getWordStr(content)[0] + '.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                button.Add
                    ?
                    <Alert />
                    :
                    ""

            }

        </div>
    )
}

export default AdminBlog