import React, { useState, useContext } from 'react';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import ProductEdit from './ProductEdit';
import AdminAlert from '../AdminAlert/AdminAlert';
import { ContextWrap } from "../../container/contexApi/States";
import { useSelector } from 'react-redux';


const MainProductEdit = () => {
    const { data } = useSelector(state => state.product)
    const Value = useContext(ContextWrap);
    const [id, setId] = useState();
    const editProduct = () => {
        Value.Mode('editproduct')
    }
    const removeProduct = () => {
        Value.Mode('deleteproduct');
    }


    return (
        <div className=' relative grid place-items-center'>
            {Value.button.EditProduct === true ? <ProductEdit/> : ''}

            <div style={{ width: "50rem" }} className={Value.btn === true ? " absolute top-0 -z-10 opacity-20" : ""} >
                {Value.button.DeleteProduct === true ? <AdminAlert productId={id} /> : ''}
                <div className="text-xl my-4">
                    <h2 className="text-bold">Edit Your All Products</h2>
                </div>
                {data.map((value) => {
                    const { title, description, priceCost, priceSell, image, imageAlt, category } = value
                    return (
                        <div key={value._id} className="shadow-lg py-0">
                            <div className="md:flex mb-5">
                                <div className="mr-3 w-1/4 shadow-md opacity-80 hover:opacity-100 bg-slate-200 rounded-md">
                                    <a href="/"><img src={`http://localhost:3000/${image[0]}`} alt={imageAlt} className="p-2 w-full h-full" /></a>
                                </div>
                                <div className="w-2/3 px-4">
                                    <a href="/"><h6 className="mb-3 capitalize font-medium">{title}</h6></a>
                                    <p className="my-1 float-md-right"><span className="mr-2 capitalize">{category}</span></p>
                                    <p className="my-4 ">{description}</p>
                                    <p className="mb-0">
                                        <del>{`₹${priceCost}`}</del>
                                        <span className="ml-3">{`₹${priceSell}`}</span>
                                    </p>
                                </div>
                                <div className="flex justify-center items-center px-6">
                                    <button onClick={() => {
                                        editProduct()
                                        setId(value._id)
                                    }}><MdEdit className='w-8 h-8 text-gray-600 hover:text-black shadow-md' /></button>
                                </div>
                                <div className="flex justify-center items-center px-6">
                                    <button onClick={() => {
                                        removeProduct()
                                        setId(value._id)
                                    }}><MdDeleteOutline className='w-8 h-8 text-gray-600 hover:text-black shadow-md' /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


export default MainProductEdit