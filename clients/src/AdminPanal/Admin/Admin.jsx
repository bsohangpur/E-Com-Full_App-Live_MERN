import React, { useState, useContext } from 'react';
import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { ContextWrap } from '../../container/contexApi/States';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { PageD } from '../PageData/PageD';
import '../Admin.css'
import Cookies from 'js-cookie'

const Admin = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false)
    const DataSearch = useContext(ContextWrap);
    const [searchInput, setSearchInput] = useState();



    const searchType = () => {
        DataSearch.setAdminActive('Search Product')
        DataSearch.SearchData(searchInput)
    }

    const logOut = () => {
        Cookies.remove('jwt')
        navigate('/login');
    }

    return (
        <div className=' relative'>
            <aside className="admin-aside border-0 hidden md:block fixed bg-slate-100 shadow-lg rounded-xl px-10"
                id="sidenav-main">
                <div className="sidenav-header w-full h-20 grid place-items-center">
                    <Link className={`${menu ? 'opacity-0 w-0' : ''} m-0`} to='/'>
                        <span className='mx-1 font-bold'>Lulu Collection</span>
                    </Link>
                    <div className="hover:shadow-sm hover:border-2 cursor-pointer absolute right-4 text-2xl">
                        {
                            menu
                                ?
                                <AiOutlineMenu className='w-full h-full' onClick={() => setMenu(!menu)} />
                                :
                                <AiOutlineClose className='w-full h-full' onClick={() => setMenu(!menu)} />
                        }
                    </div>
                </div>

                <hr className="dark mb-10" />
                <div className={`${menu ? 'w-0' : ''} h-5/6 transition-opacity  flex flex-col items-center`} id="sidenav-collapse-main">
                    <ul className="navbar-nav grid gap-4">
                        {
                            PageD.map((element, index) => {
                                return (
                                    <li key={index} className="">
                                        <NavLink to={`/admin/${element.link}`} className=''>
                                            <div className={`${menu ? 'w-12' : 'w-52'} relative shadow-lg h-12 nav-link flex items-center border-2`}>
                                                <span className='absolute left-0 w-12 h-12 bg-blue-100 grid place-content-center shadow-lg rounded-sm'>{element.pageIcon}</span>
                                                <p className={`${menu ? 'opacity-0 w-0' : ''} w-full flex pl-2 justify-center`}>{element.pageName}</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/admin/profile' className="shadow-lg opacity-100 nav-link flex items-center hover:shadow-md">
                                <div className={`${menu ? 'w-12' : 'w-52'} relative shadow-lg h-12 nav-link flex items-center border-2`}>
                                    <span className='absolute left-0 w-12 h-12 bg-blue-100 grid place-content-center shadow-lg rounded-sm'><AiOutlineUser className="text-xl text-gray-700" /></span>
                                    <p className={`${menu ? 'opacity-0 w-0' : ''} w-full flex pl-2 justify-center`}>Profile</p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
            <main style={{ width: menu ? "95%" : '80%' }} className="rounded-lg absolute right-0 admin-main">
                {/* Navbar */}
                <nav className="px-0 mx-4 shadow-none rounded-xl" id="navbarBlur"
                    navbar-scroll="true">
                    <div className="container-fluid flex py-1 px-3">
                        <div className="collapse w-full flex justify-end navbar-collapse mt-2" id="navbar">
                            <div className="flex items-center ">
                                <div className="w-fit h-12 shadow-md rounded-md flex items-center  justify-center px-4 gap-2">
                                    <input type="text" onChange={(e) => { setSearchInput(e.target.value) }} className="border-none outline-none" placeholder="Type here..." />
                                    <button onClick={searchType} className="border-none outline-none cursor-pointer"><AiOutlineSearch /></button>
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item flex items-center">
                                    <button onClick={logOut} className="flex items-center justify-center gap-2 w-fit h-12 mx-4">
                                        <FaUserAlt className="text-gray-500" />
                                        <span className="text-gray-500">Log Out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
                <div className="flex justify-center transition-all mt-6">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Admin