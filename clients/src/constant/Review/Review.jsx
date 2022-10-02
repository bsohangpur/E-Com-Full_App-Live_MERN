import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productReviewButton, ReviewUpdate } from '../../container/Redux/Reducers/productReviewSlice';
import './review.css'

const Review = (props) => {
    const dispatch = useDispatch();
    const {button} = useSelector(state=>state.review)
    //product detail
    const Product = props.data.product.review
    //getting user id from Api
    const userId = props.data.user.data.id;
    //getting user Name from Api
    const userName = (props.data.user.data.name.firstName + ' ' + props.data.user.data.name.lastName)
    //getting product id from producr detail page.
    const productId = props.data.product._id
    //getting the value of review if exist.
    const Review = Product.filter((ele)=> {return ele.userId === userId})

    const [option, setOption] = useState(Review.length !== 0 ? Review[0].rating : '');
    const [data, setData] = useState(Review.length !== 0 ? Review[0].detail : '')


    const getOption = (e) => {
        setOption(e.target.value)
    }

    const getData = (e) => {
        setData(e.target.value)
    }

    const sendData = async () => {
        if(Review.length!==0){
            const Data = { review: { rating: option, detail: data, userId, userName }, id:Review[0]._id }
            dispatch(ReviewUpdate(Data, "Edit", productId));
            dispatch(productReviewButton(!button))
        }else{
            const Data = { review: { rating: option, detail: data, userId, userName } }
            dispatch(productReviewButton(!button))
            dispatch(ReviewUpdate(Data, "Add", productId));
        }
    }

    return (
        <form className="rating w-full h-screen flex justify-center items-center">
            <div className="w-1/2 bg-slate-100 p-4 shadow-md rounded-sm">
                <div className="rate flex flex-row-reverse my-2">
                    <div className="rate">
                        <input type="radio" onChange={getOption} id="star5" name="rate" value="5" checked={Number(option) === 5 ? true : false} />
                        <label htmlFor="star5" title="text">5 stars</label>
                        <input type="radio" onChange={getOption} id="star4" name="rate" value="4" checked={Number(option) === 4 ? true : false} />
                        <label htmlFor="star4" title="text">4 stars</label>
                        <input type="radio" onChange={getOption} id="star3" name="rate" value="3" checked={Number(option) === 3 ? true : false} />
                        <label htmlFor="star3" title="text">3 stars</label>
                        <input type="radio" onChange={getOption} id="star2" name="rate" value="2" checked={Number(option) === 2 ? true : false} />
                        <label htmlFor="star2" title="text">2 stars</label>
                        <input type="radio" onChange={getOption} id="star1" name="rate" value="1" checked={Number(option) === 1 ? true : false} />
                        <label htmlFor="star1" title="text">1 star</label>
                    </div>
                </div>
                <div className="w-full">
                    <textarea className='w-full outline-none border-2 pl-2'
                        name="detail" onChange={getData} value={data} id="" cols="30" rows="10"
                        placeholder='discribe your experiance about product'>
                    </textarea>
                </div>
                <button
                    className=' bg-slate-400 text-slate-50 px-8 py-4 rounded-sm my-2'
                    onClick={(e) => { sendData(e.preventDefault()) }}>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Review