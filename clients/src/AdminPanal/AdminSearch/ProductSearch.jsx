import React, { useContext } from 'react';
import { ContextWrap } from '../../container/contexApi/States';
import PNFImg from '../../assets/product_not_found_img.png';


const ProductSearch = () => {
    const searchData = useContext(ContextWrap);
    const search = searchData.searchData
    const Data = searchData.searchData[0]

    return (
        <div className='w-4/5 relative'>
            <div className={Data === undefined ? 'block' : 'hidden'}>
                <div className="text-xl my-4">
                    <h2 className="text-bold capitalize">Product Not Found Try search other Keyword</h2>
                </div>
                <div className="w-1/2 absolute top-40 left-60 rounded-md">
                    <img src={PNFImg} alt="5000" className="p-2 w-full h-full" />
                </div>
            </div>
            {Data === undefined ? '' : <SearchProduct search={search} />}
        </div>
    )
}

const SearchProduct = (props) => {

    return (
        <div  className="">
            <div className="text-xl my-4">
                <h2 className="text-bold">Product We Found</h2>
            </div>
            {props.search.map((items, index) => {
                return (
                    <div key={index} className="shadow-lg py-0">
                        <div className="md:flex mb-5">
                            <div className="mr-3 w-1/4 shadow-md opacity-80 hover:opacity-100 bg-slate-200 rounded-md">
                                <a href="/"><img src={`http://localhost:3000/${items.productImage}`} alt="5000" className="p-2 w-full h-full" /></a>
                            </div>
                            <div className="w-2/3 px-4">
                                <a href="/"><h6 className="mb-3 capitalize font-medium">{items.productName}</h6></a>
                                <p className="my-1 float-md-right"><span className="mr-2 capitalize">category</span></p>
                                <p className="my-4 ">{items.productDetail}</p>
                                <p className="mb-0">
                                    <del>{`₹${items.productPriceSell}`}</del>
                                    <span className="ml-3">{`₹${items.productPriceSell}`}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductSearch