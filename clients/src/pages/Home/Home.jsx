import React from 'react';
import './Home.css';
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

const home= {
    img: HomeImg,
    heading:'Hand Made',
    headingTwo: 'Crochet Items',
    textArea: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
}

const Home = () => {
    return (
        <div className="m-0 p-0 overflow-x-hidden">
            {/* ====================
           nav bar 
           ==================== */}
            <NavBar />
            {/* Start Hero Section */}
            <HeroSection props={home}/>
            {/* End Hero Section */}
            {/* Start Product Section */}
            <div className="product-section">
                <div className="container">
                    <div className="md:flex flex-wrap">

                        {/* Start Column 1 */}
                        <div className="md:w-1/4 flex flex-col gap-5 justify-center px-12">
                            <h2 className="mb-4 section-title text-2xl font-bold">Crafted with excellent material.</h2>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                            <p><a href="shop.html" className="btn">Explore</a></p>
                        </div>
                        {/* End Column 1 */}
                        <div className="flex w-3/4">
                            <Product page="home"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* End Product Section */}
            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="">
                    <div className="md:flex justify-between mx-16">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                            <div className="md:grid grid-cols-2 my-5">
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

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src="/src/assets/why-choose-us-img.jpg" alt="5000" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}
            {/* Start We Help Section */}
            <div className="we-help-section">
                <div className="">
                    <div className="md:flex justify-between mx-16">
                        <div className="mb-5 lg:mb-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1"><img src="/src/assets/img-grid-1.jpg" alt="Untree.co" /></div>
                                <div className="grid grid-2"><img src="/src/assets/img-grid-2.jpg" alt="Untree.co" /></div>
                                <div className="grid grid-3"><img src="/src/assets/img-grid-3.jpg" alt="Untree.co" /></div>
                            </div>
                        </div>
                        <div className="px-16">
                            <h2 className="section-title mb-4 text-3xl font-medium">We Help You Make Modern Interior Design</h2>
                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

                            <ul className="list-unstyled custom-list my-4">
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                            </ul>
                            <p><a href="/" className="btn">Explore</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End We Help Section */}
            {/* Start Popular Product */}
            <div className="popular-product">
                <div className="">
                    <div className="md:flex md:px-12">

                        <div className="">
                            <div className="product-item-sm flex">
                                <div className="thumbnail">
                                    <img src="/src/assets/product-1.png" alt="5000" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Nordic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a href="/">Read More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="product-item-sm flex">
                                <div className="thumbnail">
                                    <img src="/src/assets/product-2.png" alt="5000" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Kruzo Aero Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a href="/">Read More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="product-item-sm flex">
                                <div className="thumbnail">
                                    <img src="/src/assets/product-3.png" alt="5000" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Ergonomic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a href="/">Read More</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Popular Product */}
            {/* Start Testimonial Slider */}
            <Testimonial/>
            {/* End Testimonial Slider */}
            {/* Start Blog Section */}
            <div className="blog-section">
                <div className=" w-full px-12">
                    <div className="row mb-5 flex justify-between">
                        <div className="">
                            <h2 className="section-title">Recent Blog</h2>
                        </div>
                        <div className="">
                            <a href="/" className="more">View All Posts</a>
                        </div>
                    </div>

                    <div className="md:flex gap-4">
                        <div className="post-entry">
                            <a href="/" className="post-thumbnail"><img src="/src/assets/post-1.jpg" alt="5000" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h3><a href="/">First Time Home Owner Ideas</a></h3>
                                <div className="meta">
                                    <span>by <a href="/">Kristin Watson</a></span> <span>on <a href="/">Dec 19, 2021</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="post-entry">
                            <a href="/" className="post-thumbnail"><img src="/src/assets/post-2.jpg" alt="5000" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h3><a href="/">How To Keep Your Furniture Clean</a></h3>
                                <div className="meta">
                                    <span>by <a href="/">Robert Fox</a></span> <span>on <a href="/">Dec 15, 2021</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="post-entry">
                            <a href="/" className="post-thumbnail"><img src="/src/assets/post-3.jpg" alt="5000" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h3><a href="/">Small Space Furniture Apartment Ideas</a></h3>
                                <div className="meta">
                                    <span>by <a href="/">Kristin Watson</a></span> <span>on <a href="/">Dec 12, 2021</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Section	 */}
            <Footer></Footer>
        </div>
    )
}

export default Home