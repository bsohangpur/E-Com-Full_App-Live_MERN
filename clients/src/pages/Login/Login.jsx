import React, { useState } from 'react';
import RegisterImg from '../../assets/register.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import { SendData, setAuth, setStatus } from '../../container/Redux/Reducers/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../container/Redux/Reducers/loginSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector(state => state.login);
    const Status = status.status.status;
    const [data, setData] = useState({ email: '', username: '', password: '', conformpass: '' })
    const [option, setOption] = useState('')

    const getOption = (e) => {
        setOption(e.target.value)
    }

    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        dispatch(SendData(data))
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }

    if (Status === STATUS.Success) {
        setTimeout(() => {
            navigate('/admin');
            dispatch(setStatus(''))
        }, 1000);
    }

    return (
        <div className="">
            <Navbar />
            <div className=" relative">
                <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-2/5 p-6 sm:p-12">
                        <div>
                            <h1 className="text-2xl xl:text-3xl font-extrabold text-center">LuluArt</h1>
                        </div>
                        <div className="mt-6 flex flex-col items-center">
                            <h1 className="text-xl xl:text-2xl font-extrabold">
                                Sign In
                            </h1>
                            <form action="">
                                <div className="w-full flex-1 mt-8">
                                    <div className="mx-auto">
                                        <div className="flex gap-4">
                                            <h6 className="">Login with</h6>
                                            <input onChange={getOption} type="radio" id="html" name="option" value="Email" />
                                            <label>Email</label><br />
                                            <input onChange={getOption} type="radio" id="css" name="option" value="Username" />
                                            <label>Username</label><br />
                                        </div>
                                        {
                                            option === 'Username'
                                                ?
                                                <div className="my-2">
                                                    <label>Username</label>
                                                    <input
                                                        onChange={getData}
                                                        name='username'
                                                        value={data.username}
                                                        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                        type="username"
                                                        placeholder="Username" />
                                                </div>
                                                :
                                                option === 'Email'
                                                    ?
                                                    <div className="my-2">
                                                        <label>Email</label>
                                                        <input
                                                            onChange={getData}
                                                            name='email'
                                                            value={data.email}
                                                            className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                            type="email"
                                                            placeholder="Email" />
                                                    </div>
                                                    :
                                                    <div className="my-2">
                                                        <p className="text-red-500 capitalize">Please Select Option for Login</p>
                                                    </div>
                                        }
                                        <div className="my-2">
                                            <label>Password</label>
                                            <input
                                                onChange={getData}
                                                name='password'
                                                value={data.password}
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="Password"
                                                placeholder="Password" required />
                                        </div>
                                        <div className="my-2">
                                            <label>Conform Password</label>
                                            <input
                                                onChange={getData}
                                                name='conformpass'
                                                value={data.conformpass}
                                                className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                type="password"
                                                placeholder="Conform Password" required />
                                        </div>
                                        <div className="text-sm text-red-500">
                                            <p>if you have no account please sign up</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={(e) => sendData(e.preventDefault())}
                                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                                <span className="ml-3">
                                                    Sign In
                                                </span>
                                            </button>
                                            <Link to='/register'
                                                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                            >
                                                <span className="ml-3">
                                                    Sign Up
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden lg:flex items-center">
                        <img src={RegisterImg} alt="" className="h-fit" />
                    </div>
                </div>
                <div className={`absolute top-3 w-full flex justify-center ${Status === STATUS.Success ? 'text-green-600' : 'text-red-600'}`}><p>{status.status.message}</p></div>
            </div>
            <Footer />
        </div>
    )
}

export default Login