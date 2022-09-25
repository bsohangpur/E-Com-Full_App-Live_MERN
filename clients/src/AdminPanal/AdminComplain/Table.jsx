import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {Link} from 'react-router-dom'

const Table = (props) => {
    const [dropdown, setDropdown] = useState(false)
    
    return (
        <table class="items-center w-full bg-transparent border-collapse" >
            <thead>
                <tr>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    >
                        Complain
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    >
                        Time
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    >
                        Status
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    >
                        Users
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    >
                        Completion
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    ></th>
                </tr>
            </thead>
            <tbody>

                {
                    props.data.map((value, index) => {
                        const { createdOn, name, subject } = value
                        return (
                            <tr key={index}>
                                <th
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                                >
                                    <span class="ml-3 font-bold text-blueGray-600">
                                        {subject}
                                    </span>
                                </th>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    {createdOn.slice(0, 10)}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    pending
                                </td>
                                <td
                                    class="capitalize border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    {name.firstName} {name.lastName}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    <div class="flex items-center">
                                        <span class="mr-2">60%</span>
                                        <div class="relative w-full">
                                            <div
                                                class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                                            >
                                                <div
                                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                                >
                                    <button onClick={() => { setDropdown(!dropdown) }} class="text-blueGray-500 block py-1 px-3">
                                        <BsThreeDotsVertical />
                                    </button>
                                    <div
                                        class={`${dropdown ? '' : 'hidden'} bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`}
                                        id="table-light-1-dropdown"
                                    >
                                        <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                                            Read Complain
                                        </Link>
                                        <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                                            Complain Answer
                                        </Link>
                                        <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                                            Update Status
                                        </Link>
                                        <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
                                        <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                                            Flags
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table
