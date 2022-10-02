import React from 'react'
import { useSelector } from 'react-redux';

const CheckOutPerproduct = () => {
    const { data } = useSelector(state => state.cart);

    return (
        <div className='flex justify-center'>
            <div className=" text-xs">
                <table className="">
                    <thead>
                        <tr className=''>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value) => {
                                console.log(value)
                                const { title, _id, priceSell } = value;
                                return (
                                    <tr key={_id} className=''>
                                        <td className='px-4 py-2'>
                                            <h2 className="h5 text-black">{title}</h2>
                                        </td>
                                        <td className='px-4 py-2'>{(priceSell)}</td>
                                        <td className='px-4 py-2'>
                                            <h2 className="h5 text-black">1</h2>
                                        </td>
                                        <td className='px-4 py-2'>{(priceSell)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CheckOutPerproduct
