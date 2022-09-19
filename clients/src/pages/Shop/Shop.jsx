import React, { useState } from 'react';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import Product from '../../container/Product/Product';

const Shop = () => {
    const [catBtn, setCatBtn] = useState({
        genders : false,
        sale : false,
        products : false
    })

    return (
        <div className="">
            <NavBar />
            {/* Start Content */}
            <div className="container py-5">
                <div className="flex flex-wrap">

                    <div className="w-1/4 flex justify-center">
                        <div className="mr-12 text-lg">
                            <h1 className="mb-6 pb-4">Categories</h1>
                            <ul className="list-unstyled templatemo-accordion">
                                <li className="pb-3">
                                    <button onClick={()=>{setCatBtn({ genders: !catBtn.genders})}} className="collapsed flex justify-content-between h3 text-decoration-none">
                                        Gender
                                        <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                    </button>
                                    <ul className={`${catBtn.genders === true ? "" : "hidden"}  pl-3`}>
                                        <li><a className=" text-base text-decoration-none" href="/">Men</a></li>
                                        <li><a className=" text-base text-decoration-none" href="/">Women</a></li>
                                    </ul>
                                </li>
                                <li className="pb-3">
                                    <button onClick={()=>{setCatBtn({ sale: !catBtn.sale})}} className="collapsed flex justify-content-between h3 text-decoration-none" >
                                        Sale
                                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                    </button>
                                    <ul id="collapseTwo" className={`${catBtn.sale === true ? "" : "hidden"}  pl-3`}>
                                        <li><a className=" text-base text-decoration-none" href="/">Sport</a></li>
                                        <li><a className=" text-base text-decoration-none" href="/">Luxury</a></li>
                                    </ul>
                                </li>
                                <li className="pb-3">
                                    <button onClick={()=>{setCatBtn({ products: !catBtn.products})}} className="collapsed flex justify-content-between h3 text-decoration-none" >
                                        Product
                                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                    </button>
                                    <ul id="collapseThree" className={`${catBtn.products === true ? "" : "hidden"}  pl-3`}>
                                        <li><a className=" text-base text-decoration-none" href="/">Bag</a></li>
                                        <li><a className=" text-base text-decoration-none" href="/">Sweather</a></li>
                                        <li><a className=" text-base text-decoration-none" href="/">Sunglass</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="w-3/4">
                        <div className="flex items-center gap-2">
                            <div className="">
                                <ul className="flex gap-2 list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="/">All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="/">Men's</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none" href="/">Women's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <div className="">
                                    <select className=" outline-none border-none">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 md:px-12">
                            <Product/>
                        </div>
                        <div div="row">
                            <ul className="mx-12 flex justify-end gap-4">
                                <li className="px-2 rounded-md bg-gray-300 hover:bg-green-400 hover:text-white grid place-content-center disabled">
                                    <button  className="shadow-sm hover:text-white">1</button>
                                </li>
                                <li className="px-2 rounded-md bg-gray-300 hover:bg-green-400 hover:text-white grid place-content-center">
                                    <button  className="shadow-sm hover:text-white">2</button>
                                </li>
                                <li className="px-2 rounded-md bg-gray-300 hover:bg-green-400 hover:text-white grid place-content-center">
                                    <button  className="shadow-sm hover:text-white">3</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            {/* End Content */}
            <Footer />
        </div>
    )
}

export default Shop