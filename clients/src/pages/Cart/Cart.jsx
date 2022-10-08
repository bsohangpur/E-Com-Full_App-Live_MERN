import React, { useEffect } from 'react';
import NavBar from '../../constant/Navbar/NavBar';
import Footer from '../../constant/Footer/Footer';
import PageNotFound from '../../constant/PageNotFound/PageNotFound';
import CartPerProduct from './CartPerProduct';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchChart } from '../../container/Redux/Reducers/cartSlice';
import Loading from '../../constant/Loading/Loading';

const Cart = () => {
    const { data, totalAmount, status } = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const id = user.data.id
    const Data = user.data.id===undefined ? data :  data.data
    
    useEffect(()=>{
        dispatch(FetchChart(id))
    },[dispatch, id])


    if(status==='loading'){
        return <Loading/>
    }
    else if(status==='error'){
        return <h1>Somethig wents wrong!</h1>
    }
    else{
    return (
        <div>
            <NavBar />
            <div className="flex justify-center my-12">
                <div className="flex justify-center items-center flex-wrap w-5/6">
                    {
                        data.length === 0
                            ?
                            <PageNotFound page={'Shop'} img={'cart'} />
                            :
                            <div className="grid">
                                <div className=" text-3xl">
                                    <h2>Shopping Cart</h2>
                                </div>
                                <div className="flex">
                                    <div className="mt-6">
                                        <table className="">
                                            <thead>
                                                <tr className=''>
                                                    <th className="product-thumbnail">Image</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-total">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            {
                                                Data.length > 0
                                                    ?
                                                    Data.map((value, index) => {
                                                        return <CartPerProduct key={index} value={value} />
                                                    })
                                                    :
                                                    ''
                                            }
                                        </table>
                                    </div>
                                </div>
                                <div className="px-4 py-8 h-fit">
                                    <div className="grid gap-12">
                                        <h5 className='text-xl font-bold '>Cart Total</h5>
                                        <ul className="grid gap-4 capitalize">
                                            <li className='flex justify-between'><span>subtotal:</span> <span>{totalAmount} ₹</span></li>
                                            <li className='flex justify-between'><span>delivery:</span> <span>50 ₹</span></li>
                                            <li className='flex justify-between'><span>total:</span> <span>{totalAmount === 0 ? 0 : totalAmount + 50} ₹</span></li>
                                        </ul>
                                        <div className="flex justify-center">
                                            <div className={` ${totalAmount === 0 ? '-z-10' : ''} w-4/5 bg-amber-500 h-12 rounded-sm grid place-content-center`}>
                                                <Link to="/checkout" className="text-gray-50">Checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )}
}

export default Cart