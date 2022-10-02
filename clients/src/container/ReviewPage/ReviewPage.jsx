import React from 'react';
import './style.css'

const ReviewPage = (props) => {
    const Review = props.review;
    let Rating = [];

    let TotalReating = 0;
    Review.map((ele) =>
        TotalReating = TotalReating + ele.rating
    )

    for (let i = 1; i < 6; i++) {
        Rating = [...Rating, Review.filter((ele) => { return ele.rating === i }).length]
    }

    return (
        <div>
            <div className=" flex justify-center mt-12" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div className="md:w-1/2 w-4/5">
                    <div className="">
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="bg-gray-200 w-48 h-36 grid place-content-center">
                                    <h5 className=' font-bold text-center text-xl'>Overall</h5>
                                    <h4 className=' font-bold text-center text-3xl'>{TotalReating/Review.length}</h4>
                                    <h6 className=' font-semibold text-center text-lg'>({Review.length} Reviews)</h6>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="">
                                    <h3 className='text-xl font-semibold mb-1'>Based on {Review.length} Reviews</h3>
                                    <ul className="list">
                                        <li><a href="/">5 Star <i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i
                                            className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i> {Rating[4]}</a></li>
                                        <li><a href="/">4 Star <i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i
                                            className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-100"></i> {Rating[3]}</a></li>
                                        <li><a href="/">3 Star <i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i
                                            className="fa fa-star text-amber-100"></i><i className="fa fa-star text-amber-100"></i> {Rating[2]}</a></li>
                                        <li><a href="/">2 Star <i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-100"></i><i
                                            className="fa fa-star text-amber-100"></i><i className="fa fa-star text-amber-100"></i> {Rating[1]}</a></li>
                                        <li><a href="/">1 Star <i className="fa fa-star text-amber-400"></i><i className="fa fa-star text-amber-100"></i><i className="fa fa-star text-amber-100"></i><i
                                            className="fa fa-star text-amber-100"></i><i className="fa fa-star text-amber-100"></i> {Rating[0]}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            {
                                Review.map((value, index) => {
                                    const { rating, detail, time, userName } = value;
                                    const Percentage = (rating / 5) * 100;
                                    const Rounded = `${Math.round(Percentage / 10) * 10}%`;
                                    return (
                                        <div key={index} className="my-2">
                                            <div className="">
                                                <div className="">
                                                    <h4 className='font-bold capitalize'>{userName}</h4>
                                                    <h4>{time.slice(0, 10)}</h4>
                                                    <div className="outer">
                                                        <div style={{ width: Rounded }} className="inner"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>{detail}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewPage