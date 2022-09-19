import React, {useState} from 'react';
import "../../App.css";
import axios from 'axios';

const AddProductCategory = () => {
  const [data, setData] = useState({
    categoryName:'',subcategory:'',productNumber:''
  });

  const getData=(e)=>{
    setData({...data, [e.target.name] : e.target.value});
  }
  
  const sendData = async ()=>{
    const url="http://localhost:3000/productcategory";
    const responce = await axios.post(url, data);
  }
  
  return (
    <div className="mt-12">
      <div className="py-4 px-2 w-full shadow-lg">
        <form method="post" autoComplete='on'>
          <div className="grid gap-2 my-4 px-4 w-80">
            <label htmlFor="">Category Name</label>
            <input type="text" onChange={getData} name="categoryName" value={data.categoryName} className="bg-slate-100 outline-none border-none rounded-sm py-2" id="" placeholder="Category Name" />
          </div>
          <div className="grid gap-2 my-4 px-4 w-80">
            <label htmlFor="">Subcategory</label>
            <input type="text" onChange={getData} name="subcategory" value={data.subcategory} className="bg-slate-100 outline-none border-none rounded-sm py-2" id="" placeholder="Subcategory" />
          </div>
          <div className="grid gap-2 my-4 px-4 w-80">
            <label htmlFor="">Product Number</label>
            <input type="number" onChange={getData} name="productNumber" value={data.productNumber} className="bg-slate-100 outline-none border-none rounded-sm py-2" id="" placeholder="Product Number" />
          </div>
          <div className="mx-4 my-4 flex justify-center">
            <button type="submit" onClick={(e)=>sendData(e.preventDefault())} className='w-32 h-10 bg-blue-500 rounded-sm cursor-pointer'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
// onClick={submitData}
export default AddProductCategory