import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChartUpdate, removeFromCart, setTotalAmount } from '../../container/Redux/Reducers/cartSlice';

const CartPerProduct = (props) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const id = user.data.id
    const { title, _id, priceSell, image } = id === undefined ? props.value.cartProduct : props.value
    // console.log(_id)
    const minisProduct = () => {
        if (count > 1) {
            dispatch(setTotalAmount(-priceSell));
            setCount(count - 1);
        }
    }

    const plusProduct = () => {
        if (count <= 4) {
            dispatch(setTotalAmount(priceSell));
            setCount(count + 1);
        }
    }

    const removeCartProduct = () => {
        if (id === undefined) {
            dispatch(removeFromCart(_id))
        }else{
            const Data = {id:_id}
            dispatch(ChartUpdate(Data,'Delete',id))
            window.location.reload();
        }
        // dispatch(setTotalAmount(-priceSell))
    }

    return (
        <tbody>
            <tr key={_id} className=''>
                <td className='md:p-4 lg:p-8 p-2'>
                    <img className="w-32" src={`http://localhost:3000/uploads\\${image}`} alt={image} />
                </td>
                <td className='md:p-4 lg:p-8 p-2'>
                    <h2 className="h5 text-black">{title}</h2>
                </td>
                <td className='md:p-4 lg:p-8 p-2'>{priceSell}</td>
                <td className='md:p-4 lg:p-8 p-2'>
                    <div className=" bg-gray-200 p-2 flex items-center w-36 justify-evenly text-lg" >
                        <p>Qty</p>
                        <div className="input-group-prepend">
                            <button onClick={() => { minisProduct() }} className="" type="button">-</button>
                        </div>
                        <input readOnly type="number" className="text-center bg-gray-200 w-6" value={count} />
                        <div className="input-group-append">
                            <button onClick={() => { plusProduct() }} className="" type="button">+</button>
                        </div>
                    </div>

                </td>
                <td className='md:p-4 lg:p-8 p-2'>{(priceSell * count)}</td>
                <td onClick={() => {
                    removeCartProduct()
                }}
                    className='md:p-4 lg:p-8 p-2'><button className="">X</button></td>
            </tr>
        </tbody>
    )
}

export default CartPerProduct