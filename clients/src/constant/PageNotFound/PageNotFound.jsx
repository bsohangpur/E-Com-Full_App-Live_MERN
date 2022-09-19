import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404 Error Page not Found.png';
import AddCartImg from '../../assets/Add-cart-Image.png';

const PageNotFound = (props) => {
  return (
    <div>
      {props.img === 'cart' ? <h1 className='capitalize'>Add product to buy</h1> : ''}
      <div className="h-full grid my-8 place-items-center">
        <img src={props.img === 'cart' ? AddCartImg : ErrorImg} alt="404 error Image" className='w-1/3' />
        <Link to='/shop' className='py-4 px-8 rounded-sm bg-slate-300 hover:text-slate-300 hover:bg-gray-900'>Back To {props.page}</Link>
      </div>
    </div>
  )
}

export default PageNotFound