import React, { useState } from 'react';

const Visits = (props) => {
    const [length, setLength] = useState(6)
    return (
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                    <div
                        class="relative w-full px-4 max-w-full flex-grow flex-1"
                    >
                        <h3 class="font-semibold text-base text-blueGray-700">
                            Product Data
                        </h3>
                    </div>
                    <div
                        class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                    >
                        <button
                            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={()=>{
                                props.data.data.lenght===length ? setLength(6) : setLength(props.data.data.lenght)
                                
                            }}
                        >
                           {props.data.data.lenght===length?"see less":"see all"}
                        </button>
                    </div>
                </div>
            </div>
            <div class="block w-full overflow-x-auto">
                <table
                    class="items-center w-full bg-transparent border-collapse"
                >
                    <thead>
                        <tr>
                            <th
                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Product name
                            </th>
                            <th
                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Creater
                            </th>
                            <th
                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Stock
                            </th>
                            <th
                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Rate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.data.slice(0, length).map((value) => {
                                const { title, createdOn, priceSell, stock } = value;
                                 const date = new Date(createdOn);
                                return (
                                    <tr>
                                        <th
                                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                                        >
                                            {title}
                                        </th>
                                        <td
                                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                        >
                                            {date.toString().slice(0, 24)}
                                        </td>
                                        <td
                                            class="flex items-center gap-2 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                        >
                                            <div className={`${stock===0?'bg-red-600':stock<=10?'bg-yellow-400':'bg-green-600'} w-2 h-2 rounded-full`}></div>
                                            {stock}
                                        </td>
                                        <td
                                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                        >
                                            {priceSell}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Visits