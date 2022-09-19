import React, { useState } from 'react';
import RegisterImg from '../../assets/register.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { SendData, setStatus } from '../../container/Redux/Reducers/registerSlice';


const Register = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector(state => state.register)
    const [name, setName] = useState({ firstName: '', lastName: '' });
    const [address, setAddress] = useState({ streetAddress: '', apartment: '', country: '', state: '', zipCode: '' })
    const [data, setData] = useState({
        email: '', phone: '', username: '', detail: '', password: '', conformpass: ''
    });
    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const getName = (e) => {
        setName({ ...name, [e.target.name]: e.target.value });
    }
    const getAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }
    const sendData = async () => {
        const send = { name, email: data.email, phone: data.phone, username: data.username, detail: data.detail, password: data.password, conformpass: data.conformpass, address }
        dispatch(SendData(send))
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    if (status.status.status === 'success') {
        setTimeout(() => {
            history("/login");
            dispatch(setStatus(''))
        }, 1000);
    }
    return (
        <div className="">
            <Navbar />
            <div className=" relative">
                <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-2/5 md:w-full p-6 sm:p-12">
                        <div>
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-center">LuluArt</h1>
                        </div>
                        <div className="mt-6 flex flex-col items-center">
                            <h1 className="text-xl xl:text-2xl font-extrabold">
                                Sign Up
                            </h1>
                            <form action="">
                                <div className="w-full flex-1 mt-8">
                                    <div className="mx-auto">
                                        <div className="my-2">
                                            <label>Full Name</label>
                                            <div className="flex gap-2">
                                                <input
                                                    value={name.firstName}
                                                    onChange={getName}
                                                    name='firstName'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="First Name" required />
                                                <input
                                                    value={name.lastName}
                                                    onChange={getName}
                                                    name='lastName'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="my-2">
                                            <label>Email</label>
                                            <input
                                                value={data.email}
                                                onChange={getData}
                                                name='email'
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="email"
                                                placeholder="Email" required />
                                        </div>
                                        <div className="my-2">
                                            <label>Phone</label>
                                            <input
                                                value={data.phone}
                                                onChange={getData}
                                                name='phone'
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="phone"
                                                placeholder="Phone" />
                                        </div>
                                        <div className="my-2">
                                            <label>Username</label>
                                            <input
                                                value={data.username}
                                                onChange={getData}
                                                name='username'
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="text"
                                                placeholder="Username" required />
                                        </div>
                                        <div className="my-2">
                                            <label>Detail</label>
                                            <input
                                                value={data.detail}
                                                onChange={getData}
                                                name='detail'
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="text"
                                                placeholder="Detail" />
                                        </div>
                                        <div className="my-2">
                                            <label>Address</label>
                                            <div className="grid gap-2">
                                                <input
                                                    value={address.streetAddress}
                                                    onChange={getAddress}
                                                    name='streetAddress'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Street address" />
                                                <input
                                                    value={address.apartment}
                                                    onChange={getAddress}
                                                    name='apartment'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Apartment" />
                                                <input
                                                    value={address.country}
                                                    onChange={getAddress}
                                                    name='country'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="Country" />
                                                <input
                                                    value={address.state}
                                                    onChange={getAddress}
                                                    name='state'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="text"
                                                    placeholder="State" />
                                                <input
                                                    value={address.zipCode}
                                                    onChange={getAddress}
                                                    name='zipCode'
                                                    className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                    type="number"
                                                    placeholder="Postal / Zip" />
                                            </div>
                                        </div>
                                        <div className="my-2">
                                            <label>Password</label>
                                            <input
                                                value={data.password}
                                                onChange={getData}
                                                name='password'
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="password"
                                                placeholder="Password" required />
                                        </div>
                                        <div className="my-2">
                                            <label>Conform Password</label>
                                            <input
                                                value={data.conformpass}
                                                onChange={getData}
                                                name='conformpass'
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="password"
                                                placeholder="Conform Password" required />
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={(e) => sendData(e.preventDefault())}
                                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                            >
                                                <span className="ml-3">
                                                    Sign Up
                                                </span>
                                            </button>
                                            <Link to='/login' className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                                <span className="ml-3">
                                                    Sign In
                                                </span>
                                            </Link>
                                        </div>

                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            I agree to abide by templatana's
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Terms of Service
                                            </a>
                                            and its
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Privacy Policy
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden lg:flex items-center">
                        <img src={RegisterImg} alt="" className="h-fit" />
                    </div>
                </div>
                <div className={`absolute top-3 w-full flex justify-center ${status.status.status === 'success' ? 'text-green-600' : 'text-red-600'}`}><p>{status.status.message}</p></div>
            </div>
            <Footer />
        </div>
    )
}

export default Register