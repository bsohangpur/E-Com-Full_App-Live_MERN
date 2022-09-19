import React from 'react';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextWrap } from '../contexApi/States';
import { BlogUpdate, FetchBlog } from '../Redux/Reducers/blogSlice';


const BlogData = () => {
    const dispatch = useDispatch();
    const {data ,status, button} = useSelector(state => state.blog)

    useEffect(() => {
        dispatch(FetchBlog())
    }, [])
    
    if(status==='loading'){
        return <h1>Data is loading</h1>
    }
    else if(status==='error'){
        return <h1>Somethig wents wrong!</h1>
    }
    else{
    return (
        data.map((data) => {
            return (
                <div key={data._id} className="mb-5">
                    <div className="post-entry">
                        <a href="#" className="post-thumbnail"><img src={`http://localhost:3000/${data.image[0]}`} alt={data.imageAlt[0]} className="" /></a>
                        <div className="post-content-entry">
                            <h3><a href="#">{data.title}</a></h3>
                            <div className="meta">
                                <span>by <a href="#">{data.creater}</a></span> <span>Last update on <a href="#">{data.time.slice(0,10)}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )}
}

export default BlogData