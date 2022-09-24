import React from 'react';
import { Link } from 'react-router-dom'

const HeroSection = (props) => {
    return (
        <div>
            {/* Start Hero Section */}
            <div className=" bg-cyan-700">
                <div className="md:flex md:mx-16 mx-8">
                    <div className="md:w-1/2">
                        <div className="flex w-full justify-center">
                            <div className="md:text-lg lg:w-4/5 gap-8 py-4 md:my-16 text-neutral-300 grid place-content-center">
                                <h1 className='grid text-red-300 md:text-xl  lg:text-4xl gap-1'>{props.props.heading}<span className="lg:text-3xl md:text-lg">{props.props.headingTwo}</span></h1>
                                <p className="mb-4">{props.props.textArea}</p>
                                <p>
                                    <Link to="/shop" className="py-4 px-6 rounded-lg hover:bg-slate-50 hover:text-amber-600 bg-amber-600 mx-2">Shop Now</Link>
                                    <a href="/" className="py-4 px-8 rounded-lg hover:bg-slate-50 hover:text-neutral-800 bg-neutral-800">Explore</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex w-full justify-center">
                            <img src={props.props.img} alt='5000' className="w-3/4" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
        </div>
    )
}

export default HeroSection