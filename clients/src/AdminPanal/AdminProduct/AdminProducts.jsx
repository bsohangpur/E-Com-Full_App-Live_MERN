import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProduct } from '../../container/Redux/Reducers/productSlice';

const ProductRemove = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(FetchProduct())
    }, [dispatch])

    return (
        <div className='relative w-full mx-6 grid place-items-center'>
            <div className='opacity-100 md:w-4/5 xl:w-2/3' >
                <div className="text-xl my-4">
                    <h2 className="text-bold">All Products</h2>
                </div>
                {data.map((value) => {
                    const { title, description, priceCost, priceSell, image, imageAlt, category } = value
                    return (
                        <div className="shadow-lg py-0">
                            <div className="md:flex mb-5">
                                <div className="mr-3 w-1/4 shadow-md opacity-80 hover:opacity-100 bg-slate-200 rounded-md">
                                    <a href="/"><img src={`http://localhost:3000/${image[0]}`} alt={imageAlt} className="p-2 w-full h-full" /></a>
                                </div>
                                <div className="w-2/3 px-4">
                                    <a href="/"><h6 className="mb-3 capitalize font-medium">{title}</h6></a>
                                    <p className="my-1 float-md-right grid">
                                        {category.map((data)=>{
                                            return <span className="mr-2 capitalize">{data}</span>
                                        })}
                                    </p>
                                    <p className="my-4 ">{description}</p>
                                    <p className="mb-0">
                                        <del>₹{priceCost}</del>
                                        <span className="ml-3">₹{priceSell}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ProductRemove;