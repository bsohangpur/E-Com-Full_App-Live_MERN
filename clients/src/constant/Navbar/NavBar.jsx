import React from 'react';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const {data}=useSelector(state=>state.cart)


    const menuBtn = () => {
        setMenu(!menu)
    }

    return (
        <div>
            {/* Start Header/Navigation */}
            <nav className="bg-purple-900 text-slate-50" arial-label="navigation bar">

                <div className="relative md:static py-4 md:py-8 md:mx-16 flex flex-wrap justify-between items-center">
                    <NavLink className="xl:text-3xl text-gray-300 hover:text-gray-100 hover:underline lg:text-2xl md:text-xl px-4" to='/'>Lulucollection<span>.</span></NavLink>
                    <button className='md:hidden w-8 h-8 overflow-hidden transition-opacity relative mx-4 z-50 text-2xl' onClick={menuBtn} >
                        <AiOutlineMenu style={menu===true?{opacity:0}:{opacity:1}}  className='absolute top-1 left-1'/>
                        <AiOutlineClose style={menu===true?{opacity:1}:{opacity:0}} className='absolute top-1 left-1'/>
                    </button>
                    <div className={`${menu===true?"opacity-100 menu-active":"opacity-100 menu-inactive"} md:gap-4 lg:gap-8 z-20 flex w-1/2 md:w-auto md:static md:flex-row md:h-full md:bg-transparent h-screen md:opacity-100 top-0 flex-col justify-center items-center bg-gray-500 flex-wrap absolute right-0`} id="">
                        <ul className="custom-navbar-nav md:text-sm lg:text-lg navbar-nav md:flex gap-4 mb-2 md:mb-0">
                            <li>
                                <NavLink className="hover:underline hover:text-gray-100" to='/'>Home</NavLink>
                            </li>
                            <li><NavLink className="hover:underline hover:text-gray-100" to='/shop'>Shop</NavLink></li>
                            <li><NavLink className="hover:underline hover:text-gray-100" to="/about">About us</NavLink></li>
                            <li><NavLink className="hover:underline hover:text-gray-100" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="hover:underline hover:text-gray-100" to="/contact">Contact us</NavLink></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav flex md:flex-row flex-col gap-4 mb-2 md:mb-0">
                            <li><NavLink className="text-gray-100 relative" to='/cart'><AiOutlineShoppingCart className='text-3xl' /><p className={`${data.length>0 ? 'absolute text-sm -top-2 right-0.5 z-10 bg-green-500 grid place-items-center rounded-full text-white w-5 h-5 hover:bg-white hover:text-green-500':'hidden'}`}>{data.length}</p> </NavLink></li>
                            <li><NavLink className="text-gray-100" to="/login"><AiOutlineUser className='text-2xl' /></NavLink></li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* End Header/Navigation */}
        </div>
    )
}

export default NavBar