import React from 'react';
import {BiSupport} from 'react-icons/bi'
import { FaShoppingBag, FaBloggerB } from 'react-icons/fa';

const Value = (props) => {

    return (
        <div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                                        Products
                                    </h5>
                                    <span class="font-semibold text-xl text-blueGray-700">
                                        {props.data.products}
                                    </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                                    >
                                        <FaShoppingBag />
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2">
                                    <i class="fas fa-arrow-up"></i> 3.48%
                                </span>
                                <span class="whitespace-nowrap">
                                    Since last month
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                                        Blogs
                                    </h5>
                                    <span class="font-semibold text-xl text-blueGray-700">
                                        {props.data.blogs}
                                    </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                                    >
                                        <FaBloggerB />
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-red-500 mr-2">
                                    <i class="fas fa-arrow-down"></i> 3.48%
                                </span>
                                <span class="whitespace-nowrap"> Since last week </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                                        Stocks
                                    </h5>
                                    <span class="font-semibold text-xl text-blueGray-700">
                                        {Math.round(props.data.stocks)}%
                                    </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class={`${props.data.stocks === 100 ? 'text-green-500' : props.data.stocks >= 75 ? 'text-orange-400' : 'text-red-600'}  mr-2`}>
                                  {Math.round(100 - props.data.stocks)}%
                                </span>
                                {/* <span class="whitespace-nowrap"> Since {props.data.lastUpdate.slice(0 , 10)} </span> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                                        Complains
                                    </h5>
                                    <span class="font-semibold text-xl text-blueGray-700">
                                        {props.data.complain}
                                    </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div class=" p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                                        <BiSupport/>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2">
                                    <i class="fas fa-arrow-up"></i> 12%
                                </span>
                                <span class="whitespace-nowrap">
                                    Since last month
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value