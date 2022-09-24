import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../constant/Footer/Footer';
import NavBar from '../../constant/Navbar/NavBar';
import { CommentUpdate, FetchBlog } from '../../container/Redux/Reducers/blogSlice';



const BlogDetail = () => {
    const link = useParams();
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.blog);
    const [comment, setComment] = useState({ name: '', description: '', email: '', subject: '' })

    useEffect(() => {
        dispatch(FetchBlog())
    }, [dispatch])

    const getData = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    if (status === 'loading') {
        return <h1>Data is loading</h1>
    }
    else if (status === 'idle') {
        const [blog] = data.filter((ele) => ele.title === link.id);

        const Links = data.filter((ele) => ele.title !== link.id);

        const date = new Date(blog.time);


        const sendData = async () => {
            const send = {comments: comment}
            dispatch(CommentUpdate(send, 'Add', blog._id))
        }

        return (
            <section className="">
                <NavBar />
                <div className="container grid place-items-center my-6">
                    <div className="flex w-4/5">
                        <div className="w-3/4">
                            <div className="all-blog-posts">
                                <div className="">
                                    <div className="">
                                        <div className="blog-post">
                                            <div className="w-5/6">
                                                <img src={`http://localhost:3000/${blog.image[0]}`} alt={blog.imageAlt[0]} />
                                            </div>
                                            <div className="w-5/6 mt-4 p-2 bg-slate-50 shadow-md">
                                                <span className='capitalize text-3xl'>{blog.title}</span>
                                                <h4 className='capitalize text-lg'>{blog.creater}</h4>
                                                <ul className="flex gap-2 my-2">
                                                    <li><a href="/">Admin</a></li>
                                                    <hr className='w-0.5 h-5 bg-black' />
                                                    <li><a href="/">{date.toString().slice(0, 15)}</a></li>
                                                    <hr className='w-0.5 h-5 bg-black' />
                                                    <li><a href="/">{blog.comments.length} Comments</a></li>
                                                </ul>
                                                {
                                                        blog.content.split('. ').map((ele, index) => {
                                                            return (<p key={index}>{ele + ". "}<br /></p>);
                                                        })}
                                                <hr />
                                                <div className="mt-4">
                                                    <div className="flex my-2">
                                                        <div className="w-full">
                                                            <ul className="flex items-center gap-2 justify-end">
                                                                <li><i className="fa fa-share-alt"></i></li>
                                                                <li> <a target='blank' href="https://www.facebook.com"><FaFacebookF /></a></li>
                                                                <li> <a target='blank' href="https://www.twitter.com"><FaTwitter /></a> </li>
                                                                <li> <a target='blank' href="https://www.instagram.com"><FaInstagram /></a> </li>
                                                                <li> <a target='blank' href="https://web.whatsapp.com/"><FaWhatsapp /></a> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mt-2 w-5/6">
                                            <div className="sidebar-heading">
                                                <h2 className='text-lg capitalize'>{blog.comments.length} comments</h2>
                                            </div>
                                            <hr />
                                            <div className="mt-2">
                                                <ul className='grid gap-4'>
                                                    {
                                                        blog.comments.length === 0
                                                            ?
                                                            ''
                                                            :
                                                            blog.comments.map((data, index) => {
                                                                // const dates = new Date(data.time);
                                                                return (
                                                                    <li key={index} className='flex w-full'>
                                                                        <div className="w-4/5">
                                                                            <h4 className='text-sm'><span className='font-bold text-base pr-2'>{data.name}</span>{data.time.slice(0,10)}</h4>
                                                                            <h5 className='text-base'>{data.subject}</h5>
                                                                            <p>{data.description}</p>
                                                                        </div>
                                                                        <hr />
                                                                    </li>
                                                                )
                                                            })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <div className="sidebar-item submit-comment">
                                            <div className="sidebar-heading">
                                                <h2 className='text-xl font-bold'>Your comment</h2>
                                            </div>
                                            <div className="">
                                                <form id="comment" action="#" method="post">
                                                    <div className="">
                                                        <div className="my-2">
                                                            <input
                                                                onChange={getData}
                                                                name='name'
                                                                value={comment.name}
                                                                className='w-5/6 h-10 border-2 outline-none px-2'
                                                                type="text"
                                                                id="name"
                                                                placeholder="Your name" required />
                                                        </div>
                                                        <div className="my-2">
                                                            <input
                                                                onChange={getData}
                                                                name='email'
                                                                value={comment.email}
                                                                className='w-5/6 h-10 border-2 outline-none px-2'
                                                                type="text" i
                                                                d="email"
                                                                placeholder="Your email"
                                                                required />
                                                        </div>
                                                        <div className="my-2">
                                                            <input
                                                                onChange={getData}
                                                                name='subject'
                                                                value={comment.subject}
                                                                className='w-5/6 h-10 border-2 outline-none px-2'
                                                                type="text"
                                                                id="subject"
                                                                placeholder="Subject" />
                                                        </div>
                                                        <div className="">
                                                            <textarea
                                                                onChange={getData}
                                                                name='description'
                                                                value={comment.description}
                                                                className='w-5/6 border-2 outline-none px-2'
                                                                rows="6"
                                                                id="message"
                                                                placeholder="Type your comment"
                                                                required>
                                                            </textarea>
                                                        </div>
                                                        <div className="">
                                                            <button
                                                                onClick={(e) => sendData(e.preventDefault())}
                                                                className="bg-yellow-400 px-6 py-3 rounded-sm hover:text-yellow-400 hover:bg-gray-500"
                                                                type="submit"
                                                                id="form-submit" >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="sidebar">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <form className="flex" id="search_form" name="gs" method="GET" action="#">
                                                <input type="text" name="q" className="h-12 outline-none border-2 pl-2" placeholder="type to search..." />
                                                <button className="h-12 w-12 bg-white grid place-items-center text-2xl border-2"><AiOutlineSearch /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mt-6">
                                            <div className="text-xl font-bold">
                                                <h2>Recent Posts</h2>
                                            </div>
                                            <hr />
                                            <div className="my-2">
                                                <ul>
                                                    {
                                                        Links.slice(0, 5).map((data, index) => {
                                                            const date = new Date(data.time);
                                                            return (
                                                                <li key={index}>
                                                                    <Link to={`/blog/${data.title}`}>
                                                                        <h5 className='text-lg font-bold'>{data.title}</h5>
                                                                        <span className='text-sm'>{date.toString().slice(0, 10)}</span>
                                                                    </Link>
                                                                    <hr />
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mt-4">
                                            <div className="text-xl font-bold my-2">
                                                <h2>Categories</h2>
                                            </div>
                                            <hr />
                                            <div className="mt-2">
                                                <ul className='font-bold'>
                                                    {
                                                        blog.categories.length === 0
                                                            ?
                                                            ''
                                                            :
                                                            blog.categories.map((data, index) => {
                                                                return (
                                                                    <li key={index}><a href="/">- {data}</a></li>
                                                                )
                                                            })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mt-4">
                                            <div className="text-xl font-bold my-2">
                                                <h2>Tag Clouds</h2>
                                            </div>
                                            <hr />
                                            <div className="mt-2">
                                                <ul className='flex flex-wrap gap-2 '>
                                                    {
                                                        blog.tags.length === 0
                                                            ?
                                                            ''
                                                            :
                                                            blog.tags.map((data, index) => {
                                                                return (
                                                                    <li key={index} className='border-2 py-2 px-2 hover:bg-gray-500'><a href="/" className='hover:text-slate-50'>{data}</a></li>
                                                                )
                                                            })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
    else {
        return <h1>Somethig wents wrong!</h1>
    }
}

export default BlogDetail