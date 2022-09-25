import React from 'react';
import ProfileImg from "../../assets/person-1.jpg";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { VerifyUser } from '../../container/Redux/Reducers/userSlice';
import Loading from '../../constant/Loading/Loading';
import { GrLocation } from 'react-icons/gr'
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector(state => state.user);
    const { name, phone, email, username, detail, address } = data

    useEffect(() => {
        dispatch(VerifyUser())
    }, [dispatch])

    if (status === 'loading') {
        return (
            <div style={{ height: "80vh" }} className="grid place-items-center">
                <Loading />
            </div>
        )
    }
    else if (status === 'idle') {

        return (
            <section className="flex justify-center w-full py-16 bg-blueGray-200">
                <div className="container mx-auto px-4 w-5/6">
                    <div
                        className=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg"
                    >
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div
                                    className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                                >
                                    <div className="w-32 h-32 text-xs rounded-full bg-slate-50 grid place-content-center">
                                        Coming Soon...
                                    </div>
                                </div>
                                <div className="w-full mt-6 flex justify-between items-center">
                                    <div className="">
                                        Username - {username}
                                    </div>
                                    <div className="">
                                        <Link
                                            to='/admin/profile/edit'
                                            className="bg-sky-400 active:bg-sky-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            >
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3
                                    className="text-4xl capitalize font-semibold leading-normal text-blueGray-700 mb-2"
                                >
                                    {name.firstName} {name.lastName}
                                </h3>
                                <div
                                    className="text-lg flex justify-center items-center gap-4 leading-normal mt-0 mb-2 text-blueGray-400 font-bold capitalize"
                                >
                                    <GrLocation/>
                                    {address === undefined ? '...' : address.country}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    Email - {email}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    Phone No - {phone}
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            {detail.length === 0 ? 'Your Detail' : detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else {
        return (
            <h1>Something went wrong</h1>
        )
    }
}

export default Profile