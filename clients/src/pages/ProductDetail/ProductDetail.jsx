import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import PageNotFound from '../../constant/PageNotFound/PageNotFound';
import { ContextWrap } from '../../container/contexApi/States';


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


const ProductDetail = () => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.cart)
    const { title, description, priceCost, priceSell, image, stock } = product;

    const upCount = () => {
        if(count <= 4){
            setCount(count + 1)
        }
    }
    const downCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <NavBar />
            {/* Product Details Area Start */}
            <div className="flex items-center h-screen">
                {/* {
                    PData.productId === undefined
                        ?
                        <PageNotFound page={'Shop'} />
                        // <div className="h-screen grid place-content-center">
                        //     <h1>Page Not Found</h1>
                        // </div>
                        : */}
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
                                                                <img className='rounded-lg' src={`http://localhost:3000/${image}`} />
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
                                            <div className="ratings">
                                                <i className="fa fa-star text-amber-500 text-sm" aria-hidden="true"></i>
                                                <i className="fa fa-star text-amber-500 text-sm" aria-hidden="true"></i>
                                                <i className="fa fa-star text-amber-500 text-sm" aria-hidden="true"></i>
                                                <i className="fa fa-star text-amber-500 text-sm" aria-hidden="true"></i>
                                                <i className="fa fa-star text-amber-200 text-sm" aria-hidden="true"></i>
                                            </div>
                                            <div className="review">
                                                <a href="#">Write A Review</a>
                                            </div>
                                        </div>
                                        {/* Avaiable */}
                                        <p className="text-sm flex items-center"><div className={`${stock > 0 ? ' bg-green-600 ' : ' bg-red-600 '} w-3 h-3 rounded-full mr-2`}></div>{stock > 0 ? "In Stock" : "Out Of Stock"}</p>
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
                                            dispatch(addToCart(product))
                                            dispatch(setTotalAmount(priceSell))
                                        }} className={`${stock < 0 ? 'hover:bg-slate-100 hover:text-amber-300 hover:shadow-xl' : 'bg-red-600'} bg-amber-300 w-1/2 px-12 py-4 text-slate-100 `} disabled={stock > 0 ? false : true}>{stock > 0 ? "Add To Cart" : "Out Of Stock"}</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* } */}
            </div>
            {/* Product Details Area End */}
            <Footer />
        </div>
    )
}

export default ProductDetail