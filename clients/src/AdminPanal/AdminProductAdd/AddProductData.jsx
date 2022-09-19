import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../App.css";
import { productButton, ProductUpdate } from '../../container/Redux/Reducers/productSlice';


const AddProduct = () => {
    const dispatch = useDispatch();

    //product Input state
    const [title, SetTitle] = useState("");
    const [creater, SetCreater] = useState("");
    const [description, SetDescription] = useState("");
    const [priceCost, SetPriceCost] = useState("");
    const [priceSell, SetPriceSell] = useState("");
    const [stock, SetStock] = useState("");
    const [category, SetCategory] = useState("");
    const [color, SetColor] = useState("");
    const [size, SetSize] = useState("");
    const [image, SetImage] = useState("");

    // submit data to api
    const submitData = async () => {
        const categoriesValue = category.split(",");

        const formData = new FormData();
        formData.append('title',title);
        formData.append('creater',creater);
        formData.append('description',description);
        formData.append('priceCost',priceCost);
        formData.append('priceSell',priceSell);
        formData.append('stock',stock);
        formData.append('color',color);
        formData.append('size',size);

        for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
        }

        for (let i = 0; i < categoriesValue.length; i++) {
            formData.append('category', categoriesValue[i]);
        }

        dispatch(ProductUpdate(formData, "Add"));
        dispatch(productButton({Add:true}))
    }

    //count the word of textarea content.
    function countWords(str) {
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
    }

    return (
        <div className="mt-2 relative w-full flex justify-center">
            <div className="py-4 shadow-lg w-2/3">
                <div className="text-xl text-semibold text-center">
                    <h2>Add Product Here</h2>
                </div>
                <div className="card-body">
                    <form method='post' encType='multipart/form-data'>
                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Product Name</label>
                            <input onChange={(e) => SetTitle(e.target.value)} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Name" />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Product Creater</label>
                            <input onChange={(e) => SetCreater(e.target.value)} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Creater Name" />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Product Detail</label>
                            <div className="relative flex flex-col mb-6">
                                <textarea onChange={(e) => SetDescription(e.target.value)} className="resize-none  h-36 bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" rows="5" placeholder='Enter Product Description in Detail'></textarea>
                                <div className="absolute right-0 -bottom-6">{countWords(description)} out of 50</div>
                            </div>

                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Product Categorys</label>
                            <input onChange={(e) => SetCategory(e.target.value)} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Category with suprated by ," />
                        </div>
                        <div className="md:flex my-2">
                            <div className="grid gap-2 mx-4 w-1/2">
                                <label htmlFor="">Product Cost Price</label>
                                <div className="flex items-center">
                                    <div className="input-group-prepend">
                                        <span className="py-2 px-3 text-lg bg-slate-200">₹</span>
                                    </div>
                                    <input onChange={(e) => SetPriceCost(e.target.value)} type="number" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2 w-full" />
                                    <div className="input-group-append">
                                        <span className="py-2 text-lg px-2 bg-slate-200">.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-2 mx-4 w-1/2">
                                <label htmlFor="">Product Selling Price</label>
                                <div className="flex items-center">
                                    <div className="input-group-prepend">
                                        <span className="py-2 px-3 text-lg bg-slate-200">₹</span>
                                    </div>
                                    <input onChange={(e) => SetPriceSell(e.target.value)} type="number" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2 w-full" />
                                    <div className="input-group-append">
                                        <span className="py-2 text-lg px-2 bg-slate-200">.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Product Stock</label>
                            <input onChange={(e) => SetStock(e.target.value)} type="number" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Stock in between 0 to 100" />
                        </div>
                        <div className="flex gap-2 mx-4 my-2">
                            <div className="grid gap-1 w-1/2">
                                <label>Product Color</label>
                                <input onChange={(e) => SetColor(e.target.value)} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Color with suprated by ," />
                            </div>
                            <div className="grid gap-1 w-1/2">
                                <label>Product Size</label>
                                <input onChange={(e) => SetSize(e.target.value)} type="text" className="bg-slate-50 pl-2 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Size with suprated by ," />
                            </div>
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Product Images</label>
                            <div className="relative my-4">
                                <input onChange={(e) => SetImage(e.target.files)} type="file" accept="image/png, image/jpeg" className="outline-none border-none rounded-sm py-2" id="" multiple />
                                <div className="absolute right-0">{image.size <= 500000 ? "" : "Image must be under 500kb Max 6 Are Allowed"} </div>
                            </div>

                        </div>
                        <div className="mx-4 my-4 flex justify-between">
                            <button className='opacity-100 z-0 w-32 h-10 bg-blue-500 rounded-sm cursor-pointer text-slate-50' type="submit" onClick={(e) => submitData(e.preventDefault())}>Submit</button>
                            <button type="reset" className="w-32 h-10 bg-gray-300 rounded-sm">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddProduct;