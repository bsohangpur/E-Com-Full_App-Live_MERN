import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { SendData } from '../../container/Redux/Reducers/complainSlice';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState({ firstName: '', lastName: '' });
    const [data, setData] = useState({ email: '', subject: '', message: '' });

    const getName = (e) => {
        setName({ ...name, [e.target.name]: e.target.value });
    }

    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        const send = { name, email: data.email, subject: data.subject, message: data.message}
        dispatch(SendData(send))
    }

    return (
        <div>
            <form>
                <div className="flex flex-wrap ">
                    <div className="w-1/2 px-2">
                        <div className="my-1 grid">
                            <label className="text-black">First name</label>
                            <input
                                type="text"
                                placeholder="First name"
                                onChange={getName}
                                name='firstName'
                                value={name.firstName}
                                className=" border-2 outline-none text-lg pl-2 border-gray-400"
                                id="fname" />
                        </div>
                    </div>
                    <div className="w-1/2 px-2">
                        <div className="my-1 grid">
                            <label className="text-black">Last name</label>
                            <input
                                type="text"
                                placeholder="Last name"
                                onChange={getName}
                                name='lastName'
                                value={name.lastName}
                                className=" border-2 outline-none text-lg pl-2 border-gray-400"
                                id="lname" />
                        </div>
                    </div>
                </div>
                <div className="my-1 grid mx-2">
                    <label className="text-black">Email address</label>
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        onChange={getData}
                        name='email'
                        value={data.email}
                        className=" border-2 outline-none text-lg pl-2 border-gray-400"
                        id="email" />
                </div>
                <div className="my-1 grid mx-2">
                    <label className="text-black">Subject</label>
                    <input
                        type="text"
                        placeholder="subject"
                        onChange={getData}
                        name='subject'
                        value={data.subject}
                        className=" border-2 outline-none text-lg pl-2 border-gray-400"
                        id="email" />
                </div>
                <div className="my-1 grid mx-2 mb-5">
                    <label className="text-black">Message</label>
                    <textarea
                        placeholder="Describe your complain"
                        onChange={getData}
                        name='message'
                        value={data.message}
                        className=" border-2 outline-none text-lg pl-2 border-gray-400"
                        id="message"
                        cols="30"
                        rows="5">
                    </textarea>
                </div>
                <button
                    onClick={(e) => sendData()}
                    type="submit"
                    className=" bg-stone-700 p-4 rounded-lg text-slate-50 hover:shadow-xl hover:text-slate-200">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm