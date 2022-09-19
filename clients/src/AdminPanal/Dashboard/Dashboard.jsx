import React from 'react'
import Traffics from './Components/Traffics'
import Value from './Components/Value'
import Visits from './Components/Visits'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlog } from '../../container/Redux/Reducers/blogSlice';
import { FetchProduct } from '../../container/Redux/Reducers/productSlice';
import { Doughnut, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const Dashboard = () => {
    const dispatch = useDispatch();
    const pdata = useSelector(state => state.product);
    const bdata = useSelector(state => state.blog);

    useEffect(() => {
        dispatch(FetchProduct())
        dispatch(FetchBlog())
    }, [])

    const outOfStock = pdata.data.filter((ele) => { return ele.stock > 0 }).length
    // const createdOn = pdata.data[pdata.data.length-1].createdOn; 

    const total = {
        products: pdata.data.length,
        blogs: bdata.data.length,
        stocks: (outOfStock / pdata.data.length) * 100,
        // lastUpdate: createdOn
    }

    return (
        <div>
            <div class="relative bg-blue-300 md:pt-32 pb-32 pt-12">
                <div class="px-4 md:px-10 mx-auto w-full">
                    <Value data={total} />
                </div>
            </div>
            <div class="px-4 md:px-10 mx-auto w-full -m-24">
                <div class="flex flex-wrap">
                    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
                            <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                                <div class="flex flex-wrap items-center">
                                    <div class="relative w-full max-w-full flex-grow flex-1">
                                        <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                            Overview
                                        </h6>
                                        <h2 class="text-white text-xl font-semibold">
                                            Sales value
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 flex-auto">
                                <div class="relative mx-auto w-2/3">
                                    <div className="">
                                        <Doughnut
                                            data={{
                                                labels: ['product', 'blog', 'stock'],
                                                datasets: [
                                                    {
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)'
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)'
                                                        ],
                                                        borderWidth: 2,
                                                        id: 1,
                                                        label: '',
                                                        data: [pdata.data.length, bdata.data.length, outOfStock],
                                                    }
                                                ],
                                            }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full xl:w-4/12 px-4">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                                <div class="flex flex-wrap items-center">
                                    <div class="relative w-full max-w-full flex-grow flex-1">
                                        <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                                            Performance
                                        </h6>
                                        <h2 class="text-blueGray-700 text-xl font-semibold">
                                            Total orders
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 flex-auto">
                                <div class="relative h-350-px">
                                    <Bar data={{
                                        labels:['Stock', 'Out Of Stock'],
                                        datasets: [
                                            {
                                                label: 'Dataset 1',
                                                data: [outOfStock, outOfStock-pdata.data.length],
                                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                            },
                                        ],
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap mt-4">
                    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <Visits data={pdata} />
                    </div>
                    <div class="w-full xl:w-4/12 px-4">
                        <Traffics />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard