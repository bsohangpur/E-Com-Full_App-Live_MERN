import React, { useState } from 'react';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import PageNotFound from '../../constant/PageNotFound/PageNotFound';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckOutPerproduct from './CheckOutPerproduct';
import { useForm } from 'react-hook-form'
import './style.css'

const CheckOut = () => {
    const navigate =  useNavigate()
    const { data, totalAmount } = useSelector(state => state.cart);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        navigate('/conformation')
        console.log(data)
    };

    return (
        <div className=''>
            <NavBar />
            {
                // data.length === 0
                //     ?
                //     <PageNotFound page={'Home'} />
                //     :
                <div className="container-fluid mt-4 w-full">
                    <form className='ckeckout_form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <div className=" ">
                                <div className="mx-auto w-4/5 my-4 text-3xl">
                                    <h2>Checkout</h2>
                                </div>
                                <div className="flex gap-4 w-4/5 mx-auto">
                                    <div className="w-2/3">

                                        <div className="py-2">
                                            <div className="w-full px-4 mb-3">
                                                <label htmlFor="name" className="text-black">Full Name <span className=" text-red-500">*</span></label>
                                                <div className="flex gap-2 ">
                                                    <div className="grid w-1/2">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            placeholder="Enter Name"
                                                            className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                            {...register('name.firstName', { required: true, maxLength: 20 })}
                                                            name='name.firstName'
                                                        />
                                                        {errors.name && errors.name.firstName && errors.name.firstName.type === "required" && (
                                                            <span role="alert">This is required</span>
                                                        )}
                                                        {errors.name && errors.name.firstName && errors.name.firstName.type === "maxLength" && (
                                                            <span role="alert">Max length exceeded</span>
                                                        )}
                                                    </div>
                                                    <div className="grid w-1/2">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            placeholder="Enter Name"
                                                            className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                            {...register('name.lastName', { required: true, maxLength: 20 })}
                                                            name='name.lastName'
                                                        />
                                                        {errors.name && errors.name.lastName && errors.name.lastName.type === "required" && (
                                                            <span role="alert">This is required</span>
                                                        )}
                                                        {errors.name && errors.name.lastName && errors.name.lastName.type === "maxLength" && (
                                                            <span role="alert">Max length exceeded</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-3">
                                                <label htmlFor="email" className="text-black">Email <span className=" text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    placeholder="Enter email"
                                                    className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                    {...register('email', {
                                                        required: true, maxLength: 30, pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
                                                        }
                                                    })}
                                                    name='email'
                                                />
                                                {errors.email && errors.email.type === "required" && (
                                                    <span role="alert">This is required</span>
                                                )}
                                                {errors.email && errors.email.type === "maxLength" && (
                                                    <span role="alert">Max length exceeded</span>
                                                )}
                                                {errors.email && errors.email.type === "pattern" && (
                                                    <span role="alert">Email must have proper format</span>
                                                )}
                                            </div>
                                            <div className="w-full px-4 mb-3">
                                                <label htmlFor="c_address" className="text-black">Phone No <span className=" text-red-500">*</span></label>
                                                <input
                                                    type="number"
                                                    id="phone"
                                                    placeholder="Enter Phone"
                                                    className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                    {...register('phone', { required: true, maxLength: 12, minLength: 10 })}
                                                    name='phone'
                                                />
                                                {errors.phone && errors.phone.type === "required" && (
                                                    <span role="alert">This is required</span>
                                                )}
                                                {errors.phone && errors.phone.type === "minLength" && (
                                                    <span role="alert">Phone Number must be 10 Number</span>
                                                )}
                                                {errors.phone && errors.phone.type === "maxLength" && (
                                                    <span role="alert">Max length exceeded</span>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <div className="grid w-full px-4 mb-3">
                                                    <label htmlFor="c_address" className="text-black">Address <span className=" text-red-500">*</span></label>
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        placeholder="Street address"
                                                        className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                        {...register('address.streetAddress', { required: true, maxLength: 20 })}
                                                        name='address.streetAddress'
                                                    />
                                                    {errors.address && errors.address.streetAddress && errors.address.streetAddress.type === "required" && (
                                                        <span role="alert">This is required</span>
                                                    )}
                                                    {errors.address && errors.address.streetAddress && errors.address.streetAddress.type === "maxLength" && (
                                                        <span role="alert">Max length exceeded</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-group w-full px-4 mb-3">
                                                <input
                                                    type="text"
                                                    id="address"
                                                    placeholder="Apartment, suite, unit etc. (optional)"
                                                    className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                    {...register('address.apartment', { maxLength: 20 })}
                                                    name='address.apartment'
                                                />
                                                {errors.address && errors.address && errors.address.type === "maxLength" && (
                                                    <span role="alert">Max length exceeded</span>
                                                )} 
                                            </div>

                                            <div className="w-full px-4 mb-3">
                                                <label htmlFor="c_state_country" className="text-black">Country</label>
                                                <input
                                                    type="text"
                                                    id="country"
                                                    placeholder="Country"
                                                    className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                    {...register('address.country', { maxLength: 20 })}
                                                    name='address.country'
                                                />
                                                {errors.address && errors.address.country && errors.address.country.type === "maxLength" && (
                                                    <span role="alert">Max length exceeded</span>
                                                )}
                                            </div>
                                            <div className="form-group ">
                                                <div className="grid w-full px-4 mb-3">
                                                    <label htmlFor="c_address" className="text-black">State<span className=" text-red-500">*</span></label>
                                                    <input
                                                        type="text"
                                                        id="state"
                                                        placeholder="State"
                                                        className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                        {...register('address.state', { required: true, maxLength: 20 })}
                                                        name='address.state'
                                                    />
                                                    {errors.address && errors.address.state && errors.address.state.type === "required" && (
                                                        <span role="alert">This is required</span>
                                                    )}
                                                    {errors.address && errors.address.state && errors.address.state.type === "maxLength" && (
                                                        <span role="alert">Max length exceeded</span>
                                                    )}
                                                </div>
                                                <div className="grid w-full px-4 mb-3">
                                                    <label htmlFor="c_postal_zip" className="text-black">Postal / Zip <span className=" text-red-500">*</span></label>
                                                    <input
                                                        type="text"
                                                        id="zipcode"
                                                        placeholder="Postal / Zip"
                                                        className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                        {...register('address.zipCode', { required: true, maxLength: 6, minLength:6 })}
                                                        name='address.zipCode'
                                                    />
                                                    {errors.address && errors.address.zipCode && errors.address.zipCode.type === "required" && (
                                                        <span role="alert">This is required</span>
                                                    )}
                                                    {errors.address && errors.address.zipCode.type === "maxLength" && (
                                                        <span role="alert">this is not valid zipcode</span>
                                                    )}
                                                    {errors.address && errors.address.zipCode.type === "minLength" && (
                                                        <span role="alert">this is not valid zipcode</span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="w-full px-4 mb-3">
                                                <label htmlFor="c_address" className="text-black">Comment</label>
                                                <textarea
                                                    type="text"
                                                    id="comment"
                                                    cols="30"
                                                    rows="7"
                                                    placeholder="Leave a comment about your order"
                                                    className="w-full h-12 pl-2 rounded-sm outline-none border-none bg-gray-200"
                                                    {...register('comment', { maxLength: 20 })}
                                                    name='comment'
                                                ></textarea>
                                                {errors.comment && errors.comment.type === "maxLength" && (
                                                    <span role="alert">Max length exceeded</span>
                                                )}

                                            </div>

                                            <div className="w-full px-4 mb-3">
                                                <div className="custom-control custom-checkbox d-block mb-2">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" htmlFor="customCheck2">Create an accout</label>
                                                </div>
                                                <div className="custom-control custom-checkbox d-block">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" htmlFor="customCheck3">Ship to a different address</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="bg-gray-200 h-fit w-1/4">
                                        <div className="px-4 py-8 ">
                                            <div className="grid gap-8">
                                                <h5 className='text-xl font-bold '>Cart Total</h5>
                                                <div className="">
                                                    <CheckOutPerproduct />
                                                </div>
                                                <ul className="grid gap-4 capitalize">
                                                    <li className='flex justify-between'><span className='checkout_span'>subtotal:</span> <span className='checkout_span'>{totalAmount} ₹</span></li>
                                                    <li className='flex justify-between'><span className='checkout_span'>delivery:</span> <span className='checkout_span'>50 ₹</span></li>
                                                    <li className='flex justify-between'><span className='checkout_span'>total:</span> <span className='checkout_span'>{totalAmount === 0 ? 0 : totalAmount + 50} ₹</span></li>
                                                </ul>
                                                <div className="flex justify-center mt-8">
                                                    <div className='w-4/5 bg-amber-500 h-12 rounded-sm grid place-content-center'>
                                                        <button type='submit' className="text-gray-50">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>}
            <Footer />
        </div>
    )
}

export default CheckOut