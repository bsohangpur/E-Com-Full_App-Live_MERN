import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import Loading from '../../constant/Loading/Loading'
import { FetchProduct } from '../../container/Redux/Reducers/productSlice';
import { VerifyUser } from '../../container/Redux/Reducers/userSlice';
import './style.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setTotalAmount } from '../../container/Redux/Reducers/cartSlice';
import Review from '../../constant/Review/Review';
import ReviewPage from '../../container/ReviewPage/ReviewPage';
import { productReviewButton } from '../../container/Redux/Reducers/productReviewSlice';


const ProductDetail = () => {
    const navigate = useNavigate()
    const link = useParams();
    const [count, setCount] = useState(1);
    const [noUser, setNoUser] = useState(false)
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.product)
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const { button } = useSelector(state => state.review)



    useEffect(() => {
        dispatch(FetchProduct())
        dispatch(VerifyUser())
    }, [dispatch])

    const ReviewBtn = () => {
        if (user.data.length !== 0) {
            dispatch(productReviewButton(!button))
        }
        else {
            dispatch(productReviewButton(!button))
        }
    }

    //alert when No User is login
    const Alert = () => {
        setTimeout(() => {
            setNoUser(!noUser)
        }, 2000);
        return (
            <div style={{ top: "20vh" }} className="  absolute flex justify-center w-full z-10 text-red-500">
                <div className="bg-slate-100 px-6 py-1 capitalize text-lg">
                    <h1>First Login to Write Review</h1>
                </div>
            </div>
        )
    }

    const upCount = () => {
        if (count <= 4) {
            setCount(count + 1)
        }
    }
    const downCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    if (status === 'loading') {
        return <Loading />
    }
    else if (status === 'idle') {

        const [product] = data.filter((ele) => ele.title === link.id);
        const { title, description, priceCost, priceSell, image, stock, review, _id } = product;

        //checking if product is already exist in cart.
        const CartProduct = cart.data.filter((ele) => { return ele._id === _id })


        //function decrale for add product to cart
        const addProductToCart = () => {
            if (CartProduct.length === 0) {
                dispatch(addToCart(product))
                dispatch(setTotalAmount(priceSell))
            }
            else{
                navigate('/cart')
            }
        }

        //set user review star
        let TotalReating = 0;
        review.map((ele) =>
            TotalReating = (TotalReating + ele.rating)
        )
        const starsTotal = 5;
        const starPercentage = ((TotalReating / review.length) / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        return (
            <div className=' relative'>
                <div className={button ? 'fixed z-10 w-full' : 'hidden'}>
                    <button onClick={() => { dispatch(productReviewButton(!button)) }} className='mr-4 absolute right-1/4 top-1/4 w-8 h-8 bg-slate-400 hover:text-slate-400 text-slate-50 shadow-md hover:bg-slate-50 '>X</button>
                    {user.data.length === 0 ? '' : <Review data={{ product: product, user: user }} />}
                </div>
                <div className={`${button ? '-z-10 opacity-60' : ''} `}>
                    <NavBar />
                    <div className="">
                        {/* user alert when no user is login */}
                        {noUser ? <Alert /> : ''}
                        {/* Product Details Area Start */}
                        <div className="flex items-center h-screen">
                            <div className="h-full">
                                <div className="my-3 mx-6">
                                    <div className="">
                                        <ol className="flex gap-1 text-lg">
                                            <li className=""><NavLink to='/'>Home</NavLink></li>
                                            <li className="">/</li>
                                            <li className=""><NavLink to='/shop'>Shop</NavLink></li>
                                            <li className="">/</li>
                                            <li className="">{title}</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="container h-full flex justify-center items-center ">
                                    <div className="md:flex w-4/5 gap-12 items-center">
                                        <div className="w-1/2">
                                            <div className="">
                                                <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <Swiper
                                                            effect={"coverflow"}
                                                            grabCursor={true}
                                                            centeredSlides={true}
                                                            slidesPerView={"auto"}
                                                            loop={true}
                                                            coverflowEffect={{
                                                                rotate: 50,
                                                                stretch: 0,
                                                                depth: 100,
                                                                modifier: 1,
                                                                slideShadows: true,
                                                            }}
                                                            pagination={true}
                                                            modules={[EffectCoverflow, Pagination]}
                                                            className="mySwiper"
                                                        >
                                                            {
                                                                image.map((image, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <img className='rounded-lg' alt='5000' src={`http://localhost:3000/${image}`} />
                                                                        </SwiperSlide>
                                                                    )
                                                                })
                                                            }
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="grid gap-4">
                                                {/* Product Meta Data */}
                                                <div className="grid gap-3">
                                                    {/* product price */}
                                                    <p className="text-xl text-orange-500 line-through">{priceCost}</p>
                                                    <p className="text-xl text-orange-500 underline">{priceSell}</p>
                                                    {/* product Name */}
                                                    <h6 className='text-3xl'>{title}</h6>
                                                    {/* Ratings & Review */}
                                                    <div className="mb-15 flex items-center justify-between">
                                                        <div className="flex text-lg">
                                                            <div className="outer">
                                                                <div style={{ width: starPercentageRounded }} className="inner"></div>
                                                            </div>
                                                        </div>
                                                        <div className="review">
                                                            <button onClick={() => { ReviewBtn() }}>Write A Review</button>
                                                        </div>
                                                    </div>
                                                    {/* Avaiable */}
                                                    <div className="text-sm flex items-center">
                                                        <div className={`${stock > 0 ? ' bg-green-600 ' : ' bg-red-600 '} w-3 h-3 rounded-full mr-2`}></div>
                                                        {stock > 0 ? "In Stock" : "Out Of Stock"}
                                                    </div>
                                                </div>

                                                <div className="short_overview my-5">
                                                    {/* product detail */}
                                                    <p className='leading-loose'>{description}</p>
                                                </div>

                                                {/* Add to Cart Form */}
                                                <form className="flex flex-col gap-4" method="post">
                                                    <div className="flex items-center gap-4 mb-50">
                                                        <p>Qty</p>
                                                        <div className="relative">
                                                            <span onClick={() => { downCount() }} className=" cursor-pointer absolute top-3 right-0" ><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            <input readOnly type="number" className="w-24 h-8 bg-gray-200 outline-none border-none" id="qty" name="quantity" value={count} />
                                                            <span onClick={() => { upCount() }} className=" cursor-pointer absolute bottom-3 right-0" ><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                    <button onClick={(e) => { 
                                                        e.preventDefault()
                                                        addProductToCart() 
                                                        }} className={`${stock < 0 ? 'hover:bg-slate-100 hover:text-amber-300 hover:shadow-xl' : 'bg-red-600'} bg-amber-300 w-1/2 px-12 py-4 text-slate-100 `} disabled={stock > 0 ? false : true}>{stock > 0 ? "Add To Cart" : "Out Of Stock"}</button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* } */}
                        </div>
                        {review.length === 0 ? '' : <ReviewPage review={review} />}
                    </div>
                    {/* Product Details Area End */}
                    <Footer />
                </div>
            </div>
        )
    }
    else {
        return <h1>Somethig wents wrong!</h1>
    }
}

export default ProductDetail