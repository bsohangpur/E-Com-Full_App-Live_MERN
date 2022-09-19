import React from 'react'

const HeroSection = (props) => {
    return (
        <div>
            {/* Start Hero Section */}
            <div className="bg-purple-900 ">
                <div className="md:flex md:mx-16 mx-8">
                    <div className="md:w-1/2 ">
                        <div className="md:text-lg lg:w-4/5 gap-4 py-4 md:my-16 text-neutral-300 grid place-content-center">
                            <h1 className='grid text-red-300 md:text-xl  lg:text-4xl gap-1'>{props.props.heading}<span className="lg:text-3xl md:text-lg">{props.props.headingTwo}</span></h1>
                            <p className="mb-4">{props.props.textArea}</p>
                            <p>
                                <a href="" className="btn btn-secondary mx-2">Shop Now</a>
                                <a href="#" className="btn btn-white-outline">Explore</a>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="">
                            <img src={props.props.img} className="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
        </div>
    )
}

export default HeroSection