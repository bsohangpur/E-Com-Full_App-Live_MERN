import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchBlog } from '../Redux/Reducers/blogSlice';


const BlogData = (props) => {
    const dispatch = useDispatch();
    const {data , status } = useSelector(state => state.blog)

    useEffect(() => {
        dispatch(FetchBlog())
    }, [dispatch])
    
    if(status==='loading'){
        return <h1>Data is loading</h1>
    }
    else if(status==='error'){
        return <h1>Somethig wents wrong!</h1>
    }
    else{
    return (
        data.slice(0, props.page === 'home' ? 3 : data.length).map((data) => {
            return (
                <div key={data._id} className={`${props.page === 'home'?'md:w-1/3':'md:w-fit'} mb-5 md:mb-0`}>
                    <div className="post-entry">
                        <Link to={`/blog/${data.title}`} className="hover:opacity-80 relative flex justify-center items-center">
                            <img src={`/${data.image[0]}`} alt={data.imageAlt[0]} className=" " />
                            <span className="absolute grid place-items-center w-full h-full font-bold capitalize lg:text-lg transition-opacity opacity-0 hover:opacity-100 ">learn more</span>
                        </Link>
                        <div className="post-content-entry">
                            <h3><a href="/">{data.title}</a></h3>
                            <div className="meta">
                                <span>by <a href="/">{data.creater}</a></span> <span>Last update on <a href="/">{data.time.slice(0,10)}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )}
}

export default BlogData