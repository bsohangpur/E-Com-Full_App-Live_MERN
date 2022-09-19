import React from 'react';
import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import { ContextWrap } from '../../container/contexApi/States';

const AdminLogin = () => {
    const LoginData = useContext(ContextWrap);

    useEffect(() => {
        fetchApp();
    }, []);

    const [dbLogin, setdbLogin] = useState();

    const [Login, setLogin] = useState();

    const [loginData, setLoginData] = useState({
        email: '', password: ''
    })


    const fetchApp = async () => {
        const url = 'http://localhost:3000/login';
        const resiveData = await axios.get(url);
        setdbLogin(resiveData.data)
    }

    const GetData = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const sendData = () => {
        if (dbLogin[0].email.toLowerCase() === loginData.email.toLowerCase() && dbLogin[0].password === loginData.password) {
            LoginData.setadminAuth(!LoginData.adminAuth)
        }
        else {
            setLogin('Email or Password is Not match')
        }
    }

    return (
        <div>
            <div className="">
                <div className="container h-screen grid place-items-center">
                    <div className="row">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <h3 className="font-bold text-green-800 text-4xl mb-2">Welcome back</h3>
                                    <p className="mb-12 text-lg">Enter your email and password to  Login</p>
                                </div>
                                <div className="px-4 py-8 bg-slate-100 shadow-lg rounded-md">
                                    <form role="form">
                                        <label>Email</label>
                                        <div className="my-2">
                                            <input onChange={GetData} name="email" value={loginData.email} type="email" className="w-full h-12 rounded-md pl-2 border-none outline-none" placeholder="Email" required />
                                        </div>
                                        <label>Password</label>
                                        <div className="my-2">
                                            <input onChange={GetData} name="password" value={loginData.password} type="password" className="w-full h-12 rounded-md pl-2 border-none outline-none" placeholder="Password" required />
                                        </div>
                                        {/* <div className="my-2">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                                            <label className="form-check-label" for="rememberMe">Remember me</label>
                                        </div> */}
                                        <div className="text-center mb-2 mt-4">
                                            <button onClick={(e) => { sendData(e.preventDefault()) }} type="button" className="bg-slate-300 hover:text-slate-300 hover:bg-gray-700 text-lg px-12 py-3 rounded-md">Login</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className=" text-red-500">{Login}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin