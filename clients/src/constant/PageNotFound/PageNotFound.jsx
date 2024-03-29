import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404 Error Page not Found.png';
import AddCartImg from '../../assets/Add-cart-Image.png';

const PageNotFound = (props) => {
  return (
    <div>
      {props.img === 'cart' ? <h1 className='capitalize'>Add product to buy</h1> : ''}
      <div className="h-full grid my-8 place-items-center">
        <img alt='5000' src={props.img === 'cart' ? AddCartImg : ErrorImg} className='w-1/3' />
        <Link to={`/${props.page==="Home"?'':'shop'}`} className='py-4 px-8 rounded-sm bg-slate-300 hover:text-slate-300 hover:bg-gray-900'>Back To {props.page}</Link>
      </div>
    </div>
  )
}

export default PageNotFound