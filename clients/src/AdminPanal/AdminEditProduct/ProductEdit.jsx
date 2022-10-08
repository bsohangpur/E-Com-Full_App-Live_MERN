import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productButton, ProductUpdate } from '../../container/Redux/Reducers/productSlice';


const ProductEdit = (props) => {
    const dispatch = useDispatch();
    const { id, data } = props.product

    //define all input states
    const [title, SetTitle] = useState(data.title);
    const [description, SetDescription] = useState(data.description);
    const [priceCost, SetPriceCost] = useState(data.priceCost);
    const [priceSell, SetPriceSell] = useState(data.priceSell);
    const [stock, SetStock] = useState(data.stock);
    const [category, SetCategory] = useState(data.category);
    const [color, SetColor] = useState(data.color);
    const [size, SetSize] = useState(data.size);
    const [image, SetImage] = useState("");

    // submit edited data
    const submitEditData = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('priceCost', priceCost);
        formData.append('priceSell', priceSell);
        formData.append('stock', stock);
        formData.append('color', color);
        formData.append('size', size);
        if (category !== data.category) {
            const categoryValue = category.split(",");
            for (let i = 0; i < categoryValue.length; i++) {
                formData.append('category', categoryValue[i].toString());
            }
        }
        for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
        }
        dispatch(ProductUpdate(formData, 'Edit', id));
        dispatch(productButton({ Edit: true }));
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const comeBack = () => {
        dispatch(productButton({ Edit: false }));
    }
        return (
            <div className="">
                <div className='absolute w-full left-0 z-10 mt-2 flex justify-center'>
                    <div className="py-4 z-20 w-3/5 shadow-md bg-slate-200 ">
                        <div className="text-xl text-semibold text-center">
                            <h2>Add Product Here</h2>
                        </div>
                        <div className="card-body">
                            <form method='post' encType='multipart/form-data'>
                                <div className="grid gap-2 mx-4">
                                    <label htmlFor="">Product Name</label>
                                    <input value={title} onChange={(e) => SetTitle(e.target.value)} type="text" className="pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Name" />
                                </div>
                                <div className="grid gap-2 mx-4">
                                    <label htmlFor="">Product Detail</label>
                                    <div className="relative flex flex-col mb-6">
                                        <textarea value={description} onChange={(e) => SetDescription(e.target.value)} className="resize-none  h-36 pl-2 outline-none border-none rounded-sm py-2" id="" rows="3" placeholder='Product Detail'></textarea>
                                        <div className="absolute right-0 -bottom-6">{description.length} out of 100</div>
                                    </div>

                                </div>
                                <div className="grid gap-2 mx-4">
                                    <label>Product Categorys</label>
                                    <input onChange={(e) => SetCategory(e.target.value)} value={category} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Category with suprated by ," />
                                </div>
                                <div className="md:flex">
                                    <div className="grid gap-2 mx-4">
                                        <label htmlFor="">Product Cost Price</label>
                                        <div className="flex items-center">
                                            <div className="input-group-prepend">
                                                <span className="py-2 px-3 text-lg bg-slate-200">₹</span>
                                            </div>
                                            <input value={priceCost} onChange={(e) => SetPriceCost(e.target.value)} type="number" className="md:w-24 pl-2 outline-none border-none rounded-sm py-2" aria-label="Amount (to the nearest Rupee)" />
                                            <div className="input-group-append">
                                                <span className="py-2 text-lg px-2 bg-slate-200">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-2 mx-4">
                                        <label htmlFor="">Product Selling Price</label>
                                        <div className="flex items-center">
                                            <div className="input-group-prepend">
                                                <span className="py-2 px-3 text-lg bg-slate-200">₹</span>
                                            </div>
                                            <input value={priceSell} onChange={(e) => SetPriceSell(e.target.value)} type="number" className="md:w-24 pl-2 outline-none border-none rounded-sm py-2" aria-label="Amount (to the nearest Rupee)" />
                                            <div className="input-group-append">
                                                <span className="py-2 text-lg px-2 bg-slate-200">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-2 mx-4">
                                    <label>Product Stock</label>
                                    <input onChange={(e) => SetStock(e.target.value)} value={stock} type="number" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Stock in between 0 to 100" />
                                </div>
                                <div className="flex gap-2 mx-4 my-2">
                                    <div className="grid gap-1 w-1/2">
                                        <label>Product Color</label>
                                        <input onChange={(e) => SetColor(e.target.value)} value={color} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Color with suprated by ," />
                                    </div>
                                    <div className="grid gap-1 w-1/2">
                                        <label>Product Size</label>
                                        <input onChange={(e) => SetSize(e.target.value)} value={size} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Size with suprated by ," />
                                    </div>
                                </div>
                                <div className="grid gap-2 mx-4">
                                    <label htmlFor="">Product Image</label>
                                    <img className='w-32' src={`http://localhost:3000/${data.image[0]}`} alt="5000" />
                                    <div className="relative my-4">
                                        <input onChange={(e) => SetImage(e.target.files[0])} type="file" accept="image/png, image/jpeg" className="outline-none border-none rounded-sm py-2" id="" />
                                        <div className="absolute right-0">{image.size <= 500000 ? "" : "Image must be under 500kb"}</div>
                                    </div>

                                </div>
                                <div className="mx-4 my-4 flex justify-between">
                                    <button className='hover:bg-transparent hover:text-blue-900 hover:border-2 hover:border-blue-700 w-32 h-10 bg-blue-500 rounded-sm text-slate-50  cursor-pointer' type="submit" onClick={(e) => submitEditData(e.preventDefault())}>Submit</button>
                                    <button type="submit" onClick={(e) => comeBack(e.preventDefault())} className="hover:bg-transparent hover:text-gray-900 hover:border-2 hover:border-gray-700 w-32 h-10 bg-gray-500 text-slate-50 rounded-sm">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ProductEdit