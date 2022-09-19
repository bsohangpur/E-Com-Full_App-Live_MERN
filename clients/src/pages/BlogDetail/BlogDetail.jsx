import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Footer from '../../constant/Footer/Footer';
import NavBar from '../../constant/Navbar/NavBar';
import { ContextWrap } from '../../container/contexApi/States';

const BlogDetail = () => {
    const BlogData = useContext(ContextWrap);
    const Data = BlogData.apiBlogData;

    // const getWordStr = (str) => {
    //     const arr = str.split('. ');
    //     for(let i)
    //     return (`${arr} .`)
    // }

    return (
        <section className="">
            <NavBar />

            <div className="container grid place-items-center my-6">
                {Data.map((data) => {
                    const date = new Date(data.time);
                    return(
                    <div className="flex w-4/5">
                        <div className="w-3/4">
                            <div className="all-blog-posts">
                                <div className="">
                                    <div className="">
                                        <div className="blog-post">
                                            <div className="w-5/6">
                                                <img src={`http://localhost:3000/${data.image}`} alt={data.imageAlt[0]} />
                                            </div>
                                            <div className="w-5/6 mt-4 p-2 bg-slate-50 shadow-md">
                                                <span className='capitalize text-3xl'>{data.title}</span>
                                                <h4 className='capitalize text-lg'>{data.creater}</h4>
                                                <ul className="flex gap-2 my-2">
                                                    <li><a href="#">Admin</a></li>
                                                    <hr className='w-0.5 h-5 bg-black' />
                                                    <li><a href="#">{date.toString().slice(0, 15)}</a></li>
                                                    <hr className='w-0.5 h-5 bg-black' />
                                                    <li><a href="#">{data.comments.length} Comments</a></li>
                                                </ul>
                                                <p className='mb-4'>
                                                    {/* {getWordStr(data.content)} */}
                                                    <br /><br />
                                                    Donec tincidunt leo nec magna gravida varius.
                                                    Suspendisse felis orci, egestas ac sodales quis, venenatis et neque.
                                                    Vivamus facilisis dignissim arcu et blandit. Maecenas finibus dui non pulvinar lacinia.
                                                    Ut lacinia finibus lorem vel porttitor. Suspendisse et metus nec libero ultrices
                                                    varius eget in risus. Cras id nibh at erat pulvinar malesuada et non ipsum.
                                                    Suspendisse id ipsum leo.</p>
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
                                                <h2 className='text-lg capitalize'>4 comments</h2>
                                            </div>
                                            <hr />
                                            <div className="mt-2">
                                                <ul className='grid gap-4'>
                                                    <li className='flex w-full'>
                                                        <div className="w-1/5">
                                                            <img className='w-32' src="https://cdn.pixabay.com/photo/2016/07/22/16/54/portrait-1535266_960_720.jpg" alt="" />
                                                        </div>
                                                        <div className="w-4/5">
                                                            <h4 className='text-sm'><span className='font-bold text-base pr-2'>Thirteen Man</span>May 20, 2020</h4>
                                                            <p>Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo. Vestibulum id turpis porttitor sapien facilisis scelerisque. Curabitur a nisl eu lacus convallis eleifend posuere id tellus.</p>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className='flex w-full pl-24 gap-4'>
                                                        <div className="w-1/5">
                                                            <img className='w-32' src="https://cdn.pixabay.com/photo/2016/07/22/16/54/portrait-1535266_960_720.jpg" alt="" />
                                                        </div>
                                                        <div className="w-4/5">
                                                            <h4 className='text-sm'><span className='font-bold text-base pr-2'>Thirteen Man</span>May 20, 2020</h4>
                                                            <p>In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.</p>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className='flex w-full'>
                                                        <div className="w-1/5">
                                                            <img className='w-32' src="https://cdn.pixabay.com/photo/2016/07/22/16/54/portrait-1535266_960_720.jpg" alt="" />
                                                        </div>
                                                        <div className="w-4/5">
                                                            <h4 className='text-sm'><span className='font-bold text-base pr-2'>Thirteen Man</span>May 20, 2020</h4>
                                                            <p>Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula. Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.</p>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className='flex w-full pl-24 gap-4'>
                                                        <div className="w-1/5">
                                                            <img className='w-32' src="https://cdn.pixabay.com/photo/2016/07/22/16/54/portrait-1535266_960_720.jpg" alt="" />
                                                        </div>
                                                        <div className="w-4/5">
                                                            <h4 className='text-sm'><span className='font-bold text-base pr-2'>Thirteen Man</span>May 20, 2020</h4>
                                                            <p>Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo.</p>
                                                        </div>
                                                    </li>
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
                                                            <input className='w-5/6 h-10 border-2 outline-none px-2' name="name" type="text" id="name" placeholder="Your name" required="" />
                                                        </div>
                                                        <div className="my-2">
                                                            <input className='w-5/6 h-10 border-2 outline-none px-2' name="email" type="text" id="email" placeholder="Your email" required="" />
                                                        </div>
                                                        <div className="my-2">
                                                            <input className='w-5/6 h-10 border-2 outline-none px-2' name="subject" type="text" id="subject" placeholder="Subject" />
                                                        </div>
                                                        <div className="">
                                                            <textarea className='w-5/6 border-2 outline-none px-2' name="message" rows="6" id="message" placeholder="Type your comment" required=""></textarea>
                                                        </div>
                                                        <div className="">
                                                            <button className="bg-yellow-400 px-6 py-3 rounded-sm hover:text-yellow-400 hover:bg-gray-500" type="submit" id="form-submit" >Submit</button>
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
                                                    <li><a href="post-details.html">
                                                        <h5 className='text-lg font-bold'>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                                                        <span className='text-sm'>May 31, 2020</span>
                                                    </a></li>
                                                    <hr />
                                                    <li><a href="post-details.html">
                                                        <h5 className='text-lg font-bold'>Suspendisse et metus nec libero ultrices varius eget in risus</h5>
                                                        <span className='text-sm'>May 28, 2020</span>
                                                    </a></li>
                                                    <hr />
                                                    <li><a href="post-details.html">
                                                        <h5 className='text-lg font-bold'>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                                                        <span className='text-sm'>May 14, 2020</span>
                                                    </a></li>
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
                                                    <li><a href="#">- Nature Lifestyle</a></li>
                                                    <li><a href="#">- Awesome Layouts</a></li>
                                                    <li><a href="#">- Creative Ideas</a></li>
                                                    <li><a href="#">- Responsive Templates</a></li>
                                                    <li><a href="#">- HTML5 / CSS3 Templates</a></li>
                                                    <li><a href="#">- Creative &amp; Unique</a></li>
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
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>Lifestyle</a></li>
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>Creative</a></li>
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>HTML5</a></li>
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>Inspiration</a></li>
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>Motivation</a></li>
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>PSD</a></li>
                                                    <li className='border-2 py-2 px-2 hover:bg-gray-500'><a href="#" className='hover:text-slate-50'>Responsive</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
            <Footer />
        </section>
    )
}

export default BlogDetail