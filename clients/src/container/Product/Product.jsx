import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCart, sendProduct, setTotalAmount } from '../Redux/Reducers/cartSlice';
import { FetchProduct } from '../Redux/Reducers/productSlice';



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
        <div key={value._id} className="md:w-fit mb-5 md:mb-0">
          <div className="card product-wap rounded-0">
            <div className="card relative rounded-0  ">
              <img className="card-img rounded-0 img-fluid" src={`http://localhost:3000/${image[0]}`} alt={imageAlt[0]} />
              <div className="absolute bottom-1/2 top-1/2 left-1/2 right-1/2 card-img-overlay rounded-0 opacity-0 hover:opacity-100 flex items-center justify-center">
                <ul className="grid gap-3">
                  <li className='hover:opacity-100 opacity-80'><button className="p-3 rounded-full bg-lime-600" ><i className="far fa-heart hover:text-white"></i></button></li>
                  <li className='hover:opacity-100 opacity-80'>
                    <NavLink to={`/product/${title}`} onClick={() => { dispatch(sendProduct(value)) }} className="p-3 rounded-full bg-lime-600" >
                      <i className="far fa-eye hover:text-white"></i>
                    </NavLink>
                  </li>
                  <li className='hover:opacity-100 opacity-80'>
                    <button
                      onClick={() => { 
                        dispatch(addToCart(value)) 
                        dispatch(setTotalAmount(priceSell))
                      }}
                      className="p-3 rounded-full bg-lime-600" disabled={stock>0?false:true} >
                      <i className={`${stock===0 ?'text-red-600':'hover:text-white'} fas fa-cart-plus `}></i>
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