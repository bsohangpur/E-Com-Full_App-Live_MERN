import React from 'react'
import Traffics from './Components/Traffics'
import Value from './Components/Value'
import Visits from './Components/Visits'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlog } from '../../container/Redux/Reducers/blogSlice';
import { FetchProduct } from '../../container/Redux/Reducers/productSlice';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { FetchComplain } from '../../container/Redux/Reducers/complainSlice';


const Dashboard = () => {
    const dispatch = useDispatch();
    const pdata = useSelector(state => state.product);
    const bdata = useSelector(state => state.blog);
    const cdata = useSelector(state => state.complain)

    useEffect(() => {
        dispatch(FetchProduct())
        dispatch(FetchBlog())
        dispatch(FetchComplain())
    }, [dispatch])

    const outOfStock = pdata.data.filter((ele) => { return ele.stock > 0 }).length
    // const createdOn = pdata.data[pdata.data.length-1].createdOn; 

    const total = {
        products: pdata.data.length,
        blogs: bdata.data.length,
        stocks: (outOfStock / pdata.data.length) * 100,
        complain : cdata.data.length
        // lastUpdate: createdOn
    }

    return (
        <div className='w-full mx-6'>
            <div className="relative bg-cyan-400 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Value data={total} />
                </div>
            </div>
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <div className="flex flex-wrap">
                    <div className="w-2/3 mb-12 xl:mb-0 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-neutral-100">
                            <div className="rounded-t mb-0 px-4 py-3">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full max-w-full flex-grow flex-1">
                                        <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                            Overview
                                        </h6>
                                        <h2 className="text-black text-xl font-semibold">
                                            Sales value
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 flex-auto">
                                <div className="relative mx-auto w-2/3">
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
                    <div className="w-1/3 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full max-w-full flex-grow flex-1">
                                        <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                                            Performance
                                        </h6>
                                        <h2 className="text-blueGray-700 text-xl font-semibold">
                                            Total orders
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 flex-auto">
                                <div className="relative h-350-px">
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
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <Visits data={pdata}/>
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <Traffics />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard