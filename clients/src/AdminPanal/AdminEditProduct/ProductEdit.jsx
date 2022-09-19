import React, {useState} from 'react';
import axios from "axios"
import { useContext } from 'react';
import { ContextWrap } from '../../container/contexApi/States';

const ProductEdit = (props) => {
    //context Api 
    const value = useContext(ContextWrap);

    //define all input states
    const [productName, SetProductName] = useState(props.pdata[0].productName);
    const [productDetail, SetProductDetail] = useState(props.pdata[0].productDetail);
    const [productPriceCost, SetProductPriceCost] = useState(props.pdata[0].productPriceCost);
    const [productPriceSell, SetProductPriceSell] = useState(props.pdata[0].productPriceSell);
    const [productCategory, SetProductCategory] = useState(props.pdata[0].productCategory);
    const [productSubCategory, SetProductSubCategory] = useState(props.pdata[0].productSubCategory);
    const [productImage, SetProductImage] = useState("");
    const [category, setCategory] = useState([]);

    // submit edited data
    
    const url = 'http://localhost:3000/product'
    const submitEditData = async () => {
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productDetail', productDetail);
        formData.append('productPriceCost', productPriceCost);
        formData.append('productPriceSell', productPriceSell);
        formData.append('productCategory', productCategory);
        formData.append('productSubCategory', productSubCategory);
        formData.append('productImage', productImage);
        const responseImg = await axios.post(`${url}/${props.pdata[0]._id}`, formData);
        const response = await axios.put(`${url}/${props.pdata[0]._id}`, formData);
        
        value.fetchApi();
        value.Mode('editproduct');
  }

  const comeBack = () => {
    value.Mode('editproduct', 'product');
}
    return (
     <div className={`${value.button.EditProduct===false?'hidden':''} mt-2 z-10 relative bg-white shadow-md`}>
            <div className="py-4 z-20 w-full shadow-lg">
                <div className="text-xl text-semibold text-center">
                    <h2>Add Product Here</h2>
                </div>
                <div className="card-body">
                    <form method='post' encType='multipart/form-data'>
                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Product Name</label>
                            <input value={productName} onChange={(e) => SetProductName(e.target.value)} type="text" className="bg-slate-100 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Name" />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Product Detail</label>
                            <div className="relative flex flex-col mb-6">
                                <textarea value={productDetail} onChange={(e) => SetProductDetail(e.target.value)} className="resize-none  h-36 bg-slate-100 outline-none border-none rounded-sm py-2" id="" rows="3" placeholder='Product Detail'></textarea>
                                <div className="absolute right-0 -bottom-6">{productDetail.length} out of 100</div>
                            </div>

                        </div>
                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Select Product Category</label>
                            {/* <select value={productName} onChange={(e) => SetProductCategory(e.target.value)} className="bg-slate-100 outline-none border-none rounded-sm py-2" id="">
                                {
                                    category.map((item) => {
                                        return (
                                            <option key={item._id}>{item.categoryName}</option>
                                        )
                                    })
                                }
                            </select>
                            <label htmlFor="">Select Product Subcategory</label>
                            <select value={productName} onChange={(e) => SetProductSubCategory(e.target.value)} className="bg-slate-100 outline-none border-none rounded-sm py-2" id="">
                                {
                                    category.map((item) => {
                                        return (
                                            <option key={item._id}>{item.subcategory
                                            }</option>
                                        )
                                    })
                                }
                            </select> */}
                        </div>
                        <div className="md:flex">
                            <div className="grid gap-2 mx-4">
                                <label htmlFor="">Product Cost Price</label>
                                <div className="flex items-center">
                                    <div className="input-group-prepend">
                                        <span className="py-2 px-3 text-lg bg-slate-200">₹</span>
                                    </div>
                                    <input value={productPriceCost} onChange={(e) => SetProductPriceCost(e.target.value)} type="number" className="md:w-24 bg-slate-100 outline-none border-none rounded-sm py-2" aria-label="Amount (to the nearest Rupee)" />
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
                                    <input value={productPriceSell} onChange={(e) => SetProductPriceSell(e.target.value)} type="number" className="md:w-24 bg-slate-100 outline-none border-none rounded-sm py-2" aria-label="Amount (to the nearest Rupee)" />
                                    <div className="input-group-append">
                                        <span className="py-2 text-lg px-2 bg-slate-200">.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-2 mx-4">
                            <label htmlFor="">Product Image</label>
                            <img className='w-32' src={`http://localhost:3000/${props.pdata[0].productImage}`} alt="product image" />
                            <div className="relative my-4">
                                <input onChange={(e) => SetProductImage(e.target.files[0])} type="file" accept="image/png, image/jpeg" className="outline-none border-none rounded-sm py-2" id="" />
                                <div className="absolute right-0">{productImage.size <= 500000 ? "" : "Image must be under 500kb"}</div>
                            </div>

                        </div>
                        <div className="mx-4 my-4 flex justify-between">
                            <button className='w-32 h-10 bg-blue-500 rounded-sm cursor-pointer' type="submit" onClick={(e) => submitEditData(e.preventDefault())}>Submit</button>
                            <button type="submit" onClick={(e)=>comeBack(e.preventDefault())} className="w-32 h-10 bg-gray-300 rounded-sm">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit