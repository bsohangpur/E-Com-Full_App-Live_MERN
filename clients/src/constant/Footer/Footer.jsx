import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            {/* Start Footer Section */}
            <footer style={{ height: "25rem" }} className="flex items-center">
                <div className=" md:px-12 relative">
                    <div className="py-6">
                        <div className="">
                            <div className="subscription-form">
                                <h3 className="flex items-center mb-2"><span className="mx-1"><AiOutlineMail className='text-lg'/></span><span>Subscribe to Newsletter</span></h3>
                                <form action="#" className="flex gap-4">
                                    <div className="">
                                        <input type="text" className=" outline-none border-2 px-2" placeholder="Enter your name" />
                                    </div>
                                    <div className="">
                                        <input type="email" className=" outline-none border-2 px-2" placeholder="Enter your email" />
                                    </div>
                                    <div className="">
                                        <button className="btn btn-primary">
                                            <span className="fa fa-paper-plane"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 md:px-12 flex w-full">
                        <div className="w-1/3 mx-4">
                            <div className="mb-4 footer-logo-wrap"><NavLink to="/" className="">LuluCollection<span>.</span></NavLink></div>
                            <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                            <ul className="flex gap-6 text-lg">
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                                <li><a href="/"><FaLinkedinIn/></a></li>
                            </ul>
                        </div>
                        <div className="w-2/3 flex justify-center">
                            <div className="flex justify-between w-4/5">
                                <div className="">
                                    <ul className="list-unstyled">
                                        <li><NavLink to='/about'>About us</NavLink></li>
                                        <li><NavLink to='/shop'>Shop</NavLink></li>
                                        <li><NavLink to='/blog'>Blog</NavLink></li>
                                        <li><NavLink to='/contact'>Contact us</NavLink></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="list-unstyled">
                                        <li><NavLink to='/contact'>Support</NavLink></li>
                                        <li><a href="/">Knowledge base</a></li>
                                        <li><a href="/">Live chat</a></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="list-unstyled">
                                        <li><a href="/">Jobs</a></li>
                                        <li><a href="/">Our team</a></li>
                                        <li><a href="/">Leadership</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-top copyright md:px-12">
                        <div className="pt-4 flex justify-between">
                            <div className="">
                                <p className="mb-2 text-center">Copyright &copy;{new Date().getFullYear()} . All Rights Reserved. &mdash; Designed with love by <a href="https://wesolves.tech">Wesolves.tech</a>
                                </p>
                            </div>
                            <div className="text-center">
                                <ul className="list-unstyled flex gap-4 ms-auto">
                                    <li className="me-4"><a href="/">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer