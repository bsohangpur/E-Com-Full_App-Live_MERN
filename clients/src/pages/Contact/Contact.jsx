import React from 'react';
import Navbar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import HeroSection from '../../constant/HeroSection/HeroSection';
import { MdOutlineLocationOn, MdAlternateEmail, MdPhone } from 'react-icons/md';
import ContactImg from '../../assets/contactimg.png'

const contact = {
    img: ContactImg,
    heading: 'Contact Us',
    textArea: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
}

const Contact = () => {
    return (
        <div className=''>
            <Navbar />
            <HeroSection props={contact} />
            {/* Start Contact Form */}
            <div className="flex justify-center items-center">
                <div className="container">
                    <div className="grid place-content-center h-screen">
                        <div className="">
                            <div className="">
                                <div className="flex flex-wrap gap-2 mb-12 mt-6">
                                    <div className="">
                                        <div className="flex mx-4 items-center gap-2">
                                            <div className=" bg-green-700 grid place-items-center text-white text-xl p-3 rounded-md ">
                                                <MdOutlineLocationOn />
                                            </div>
                                            <div className="service-contents">
                                                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex mx-4 items-center gap-2">
                                            <div className=" bg-green-700 grid place-items-center text-white text-xl p-3 rounded-md">
                                                <MdAlternateEmail />
                                            </div>
                                            <div className="service-contents">
                                                <p>info@yourdomain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex mx-4 items-center gap-2">
                                            <div className=" bg-green-700 grid place-items-center text-white text-xl p-3 rounded-md">
                                                <MdPhone />
                                            </div>
                                            <div className="service-contents">
                                                <p>+1 294 3925 3939</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="flex flex-wrap ">
                                        <div className="w-1/2 px-2">
                                            <div className="form-group grid">
                                                <label className="text-black" for="fname">First name</label>
                                                <input type="text" className="form-control" id="fname" />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <div className="form-group grid">
                                                <label className="text-black" for="lname">Last name</label>
                                                <input type="text" className="form-control" id="lname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group grid mx-2">
                                        <label className="text-black" for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>

                                    <div className="form-group grid mx-2 mb-5">
                                        <label className="text-black" for="message">Message</label>
                                        <textarea name="" className="form-control" id="message" cols="30" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className=" bg-stone-700 p-4 rounded-lg text-slate-50 hover:shadow-xl hover:text-slate-200">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Form */}
            <Footer />
        </div >
    )
}

export default Contact