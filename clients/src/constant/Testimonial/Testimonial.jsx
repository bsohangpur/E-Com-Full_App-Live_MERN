import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import PersonImg from '../../assets/person_1.jpg' 

const Testimonial = () => {
    return (
        <div className='w-full flex justify-center'>

            {/* Start Testimonial Slider */}
            <div className="w-4/5">
                <div className="container">
                    <div className="my-12">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="px-24 text-center mb-12">
                                <blockquote className="mb-5">
                                    <p className=''>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                </blockquote>

                                <div className="author-info">
                                    <div className="flex justify-center">
                                        <img src={PersonImg} alt="Maria Jones" className="w-36 rounded-full" />
                                    </div>
                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-24 text-center mb-12">
                                <blockquote className="mb-5">
                                    <p className=''>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                </blockquote>

                                <div className="author-info">
                                    <div className="flex justify-center">
                                        <img src={PersonImg} alt="Maria Jones" className="w-36 rounded-full" />
                                    </div>
                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-24 text-center mb-12">
                                <blockquote className="mb-5">
                                    <p className=''>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                </blockquote>

                                <div className="author-info">
                                    <div className="flex justify-center">
                                        <img src={PersonImg} alt="Maria Jones" className="w-36 rounded-full" />
                                    </div>
                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* End Testimonial Slider */}
        </div>
    )
}

export default Testimonial