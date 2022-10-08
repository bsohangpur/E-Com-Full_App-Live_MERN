import React, { useState } from 'react';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import ProductEdit from './ProductEdit';
import AdminAlert from '../AdminAlert/AdminAlert';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FetchProduct, productButton } from '../../container/Redux/Reducers/productSlice';
import { Status } from '../../container/Redux/Reducers/productSlice';
import Loading from '../../constant/Loading/Loading'
import AdminShortAlert from '../AdminAlert/AdminShortAlert';

const MainProductEdit = () => {
    const dispatch = useDispatch();
    const { data, button, status } = useSelector(state => state.product)
    const [id, setId] = useState();
    const [Data, setData] = useState();
    const [page, setPage] = useState('')

    useEffect(() => {
        dispatch(FetchProduct())
    }, [dispatch])

    const editProduct = (value) => {
        dispatch(productButton({ EditPage: true }))
        setData(value)
        setId(value._id)
        setPage("Edit")
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const removeProduct = (id) => {
        dispatch(productButton({ Delete: true }))
        setId(id)
        setPage("Delete")
    }

    if (status === Status.Loading) {
        return <Loading />
    }
    else if (status === Status.Errors) {
        return <h1>Something went wront...</h1>
    }
    else {
        return (
            <div className=' relative grid place-items-center'>
                {/* {Value.button.EditProduct === true ? <ProductEdit /> : ''} */}
                <div className="">
                    {
                        page === 'Delete'
                            ?
                            button.Delete ? <AdminAlert product={{ id, functions: "Delete" }} /> : ''
                            :
                            ''
                    }
                    {page === 'Edit'
                        ?
                        button.EditPage ? <ProductEdit product={{ id, data: Data }} /> : ''
                        :
                        ''
                    }
                </div>
                <div className={`${button.EditPage || button.Delete ? 'opacity-50' : ' opacity-100'} w-4/5`}>
                    {/* style={{ width: "50rem" }} className={Value.btn === true ? " absolute top-0 -z-10 opacity-20" : ""}  */}

                    <div className="text-xl my-4">
                        <h2 className="text-bold">Edit Your All Products</h2>
                    </div>
                    {data.map((value) => {
                        const { title, description, priceCost, priceSell, image, imageAlt, category, _id } = value
                        return (
                            <div key={_id} className="shadow-lg py-0">
                                <div className="md:flex mb-5">
                                    <div className="mr-3 w-1/4 flex justify-center items-center shadow-md opacity-100 hover:opacity-80 bg-slate-200 rounded-md">
                                        <img src={`http://localhost:3000/${image[0]}`} alt={imageAlt} className="p-2 w-60" />
                                    </div>
                                    <div className="w-2/3 px-4">
                                        <h6 className="mb-3 capitalize font-medium">{title}</h6>
                                        <p className="my-1 float-md-right"><span className="mr-2 capitalize">{category}</span></p>
                                        <p className="my-4 ">{description}</p>
                                        <p className="mb-0">
                                            <del>{`₹${priceCost}`}</del>
                                            <span className="ml-3">{`₹${priceSell}`}</span>
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center px-6">
                                        <button onClick={() => { editProduct(value) }}><MdEdit className='w-8 h-8 text-gray-600 hover:text-black shadow-md' /></button>
                                    </div>
                                    <div className="flex justify-center items-center px-6">
                                        <button onClick={() => { removeProduct(_id) }}>
                                            <MdDeleteOutline className='w-8 h-8 text-gray-600 hover:text-black shadow-md' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                    {
                button.Edit
                    ?
                    <AdminShortAlert data={{page:"Product", functions:"Edited"}}/>
                    :
                    ""

            }
                </div>
            </div>
        )
    }
}


export default MainProductEdit