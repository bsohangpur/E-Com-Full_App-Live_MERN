import React from 'react';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import { BsTruck } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { TbTruckReturn } from "react-icons/tb";
import Product from '../../container/Product/Product';
import Testimonial from '../../constant/Testimonial/Testimonial';
import HeroSection from '../../constant/HeroSection/HeroSection';
import HomeImg from '../../assets/bowl-3.png';
import BlogData from '../../container/BlogData/BlogData';
import WhyChoseImg from '../../assets/why-choose-us-img.jpg';

const home = {
    img: HomeImg,
    heading: 'Hand Made',
    headingTwo: 'Crochet Items',
    textArea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
}

const Home = () => {

    return (
        <div className="m-0 p-0 overflow-x-hidden">
            <NavBar />
            <HeroSection props={home} />
            <div className="product-section">
                <div className="container">
                    <h1 className='text-center my-6 lg:text-3xl md:text-2xl font-semibold font-serif'>Latest Product</h1>
                    <div className="md:flex flex-wrap">
                        <div className="md:w-1/4 flex flex-col gap-5 justify-center px-12">
                            <h2 className="mb-4 section-title text-2xl font-bold">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                            <p><a href="/" className="btn">Explore</a></p>
                        </div>
                        <div className="flex w-3/4">
                            <Product page="home" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="why-choose-section">
                <div className="my-12 w-full flex justify-center">
                    <div className="md:flex justify-between items-center mx-16 w-4/5">
                        <div className="">
                            <h2 className="lg:text-3xl md:text-2xl font-semibold my-4 font-serif">Why Choose Us</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                            <div className="md:grid grid-cols-2 my-6">
                                <div className="">
                                    <div className="feature">
                                        <div className="icon">
                                            <BsTruck className='text-4xl' />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="feature">
                                        <div className="icon">
                                            <FiShoppingBag className='text-4xl' />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="feature">
                                        <div className="icon">
                                            <HiOutlineSupport className='text-4xl' />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="feature">
                                        <div className="icon">
                                            <TbTruckReturn className='text-4xl' />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="md:order-2">
                            <div className="img-wrap">
                                <img src={WhyChoseImg} alt="5000" className="w-5/6 rounded-lg" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Testimonial />
            <div className="py-4 my-6">
                <div className=" w-full px-12">
                    <div className="row mb-5 flex justify-between">
                        <div className="">
                            <h2 className="lg:text-xl md:text-lg font-semibold font-serif">Recent Blog</h2>
                        </div>
                        <div className="">
                            <a href="/" className="more">View All Posts</a>
                        </div>
                    </div>
                    <div className="flex w-full justify-center ">
                        <div className="flex items-center w-5/6">
                            <BlogData page="home" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home