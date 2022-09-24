import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCart, setTotalAmount } from '../Redux/Reducers/cartSlice';
import { FetchProduct } from '../Redux/Reducers/productSlice';
import {AiFillHeart, AiFillEye} from 'react-icons/ai';
import {FaCartPlus} from 'react-icons/fa';



const Product = (props) => {
  const { data } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProduct())
  }, [dispatch])

  return (
    data.slice(0, props.page === 'home' ? 3 : data.length).map((value) => {
      const { title, priceCost, priceSell, image, imageAlt, stock } = value;
      return (
        <div key={value._id} className={`${props.page === 'home'?'md:w-1/3':'md:w-fit'} mb-5 md:mb-0`}>
          <div className="card product-wap rounded-0">
            <div className="card relative rounded-0  ">
              <img className="rounded-0 w-full" src={`http://localhost:3000/${image[0]}`} alt={imageAlt[0]} />
              <div className="absolute bottom-1/2 top-1/2 left-1/2 right-1/2 card-img-overlay rounded-0 opacity-0 hover:opacity-100 flex items-center justify-center">
                <ul className="grid gap-3">
                  <li className='hover:opacity-100 opacity-80'><button className="p-3 rounded-full bg-lime-600" >
                    <AiFillHeart className="hover:text-white"/>
                  </button></li>
                  <li className='hover:opacity-100 opacity-80'>
                    <NavLink to={`/product/${title}`} className="w-10 h-10 grid place-items-center rounded-full bg-lime-600" >
                      <AiFillEye className="hover:text-white"/>
                    </NavLink>
                  </li>
                  <li className='hover:opacity-100 opacity-80'>
                    <button
                      onClick={() => {
                        dispatch(addToCart(value))
                        dispatch(setTotalAmount(priceSell))
                      }}
                      className="p-3 rounded-full bg-lime-600" disabled={stock > 0 ? false : true} >
                      <FaCartPlus className={`${stock === 0 ? 'text-red-600' : 'hover:text-white'} fas fa-cart-plus `}/>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <p className="text-center mb-0">{title}</p>
              <p className="text-center mb-0 line-through ">{priceCost}</p>
              <p className="text-center mb-0">{priceSell}</p>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Product