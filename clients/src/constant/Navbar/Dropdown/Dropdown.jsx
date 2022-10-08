import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Admin } from '../../../container/Redux/Reducers/userSlice';
import {AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser} from 'react-icons/ai';
import {FiLogIn,FiLogOut, FiUserPlus } from 'react-icons/fi';
import {GrUserAdmin} from 'react-icons/gr'

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    const { admin } = useSelector(state => state.user);

    return (
        <div>
            <div className="inline-block relative">
                <button className="hover:text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-lg uppercase font-bold" onClick={() => { setDropdown(!dropdown) }}>
                    <FaUser />
                </button>
                <div className={`${dropdown ? 'block' : 'hidden'} bg-slate-50 absolute right-0 text-base z-50 float-left py-1 list-none text-left rounded shadow-lg min-w-48`}>
                    <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-black">
                        Product Detail
                    </span>
                    <Link to="/cart" className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700">
                         <span className='flex items-center gap-2'><AiOutlineShoppingCart/>Cart</span> 
                    </Link>
                    <a
                        href="./pages/admin/settings.html"
                        className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                    >
                        <span className='flex items-center gap-2'><AiOutlineHeart/>Wishlist</span> 
                    </a>
                    <Link
                        to="/profile"
                        className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                    >
                        <span className='flex items-center gap-2'><AiOutlineUser/>Profile</span> 
                    </Link>
                    {
                        admin.type === Admin.admin
                            ?
                            <Link
                                to="/admin"
                                className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                            >
                                <span className='flex items-center gap-2'><GrUserAdmin/>Admin</span> 
                            </Link>
                            :
                            ''
                    }
                    <div className="h-0 mx-4 my-1 border border-solid border-gray-300"></div>
                    <span
                        className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-black"
                    >
                        User Detail
                    </span>
                    {
                        admin.type === Admin.nouser
                            ?
                            <div className="">
                                <Link
                                    to="/login"
                                    className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                                >
                                    <span className='flex items-center gap-2'><FiLogIn/>Login</span> 
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
                                >
                                    <span className='flex items-center gap-2'><FiUserPlus/>Register</span> 
                                </Link>
                            </div>
                            :
                            <div className="">
                                <Link to="/logout" className="text-sm py-1 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700">
                                <span className='flex items-center gap-2'><FiLogOut/>Logout</span> 
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dropdown