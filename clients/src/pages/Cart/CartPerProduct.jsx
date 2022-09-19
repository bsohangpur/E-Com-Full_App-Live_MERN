import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, setTotalAmount } from '../../container/Redux/Reducers/cartSlice';

const CartPerProduct = (props) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const { title, _id, priceSell, image, imageAlt } = props.value

    const minisProduct=()=>{
        if(count>1){
            dispatch(setTotalAmount(-priceSell)); 
        setCount(count - 1);
        }
    }

    const plusProduct=()=>{
        if (count <=4){
            dispatch(setTotalAmount(priceSell));
        setCount(count + 1);
        }
    }

    return (
        <tbody>
            <tr key={_id} className=''>
                <td className='md:p-4 lg:p-8 p-2'>
                    <img className="w-32" src={`http://localhost:3000/${image[0]}`} alt={`${imageAlt[0]} Image`} />
                </td>
                <td className='md:p-4 lg:p-8 p-2'>
                    <h2 className="h5 text-black">{title}</h2>
                </td>
                <td className='md:p-4 lg:p-8 p-2'>{priceSell}</td>
                <td className='md:p-4 lg:p-8 p-2'>
                    <div className=" bg-gray-200 p-2 flex items-center w-36 justify-evenly text-lg" >
                        <p>Qty</p>
                        <div className="input-group-prepend">
                            <button onClick={() => { minisProduct()}} className="" type="button">-</button>
                        </div>
                        <input readOnly type="number" className="text-center bg-gray-200 w-6" value={count} />
                        <div className="input-group-append">
                            <button onClick={() => { plusProduct()}} className="" type="button">+</button>
                        </div>
                    </div>

                </td>
                <td className='md:p-4 lg:p-8 p-2'>{(priceSell * count)}</td>
                <td onClick={() => {
                    dispatch(removeFromCart(_id))
                    dispatch(setTotalAmount(-priceSell))
                }}
                    className='md:p-4 lg:p-8 p-2'><button className="">X</button></td>
            </tr>
        </tbody>
    )
}

export default CartPerProduct