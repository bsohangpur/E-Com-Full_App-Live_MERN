import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChartUpdate, FetchChart, setToCart, setTotalAmount } from '../Redux/Reducers/cartSlice';
import { FetchProduct } from '../Redux/Reducers/productSlice';
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';



const Product = (props) => {
  const navigate = useNavigate()
  const { data } = useSelector(state => state.product);
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  //user id to add product to chart
  const id = user.data.id

  useEffect(() => {
    dispatch(FetchProduct())
    dispatch(FetchChart(id))
  }, [dispatch, id])


  return (
    data.slice(0, props.page === 'home' ? 3 : data.length).map((value) => {
      const { title, priceCost, priceSell, image, imageAlt, stock, _id } = value;
      //checking if product is already exist in cart.
      const Data = cart.data
      const CartProduct = id === undefined
        ?
        Data.filter((ele) => { return ele.cartProduct._id === _id })
        : cart.data.data !== undefined ? cart.data.data.filter((ele) => { return ele.productId === _id }) : ''

      //function decrale for add product to cart
      const addProductToCart = () => {
        if (CartProduct.length === 0) {
          //image to store in DB
          const Data = { cartProduct: { title, priceSell, image: imageAlt[0], productId: _id } }

          if (id === undefined) {
            const Data = { cartProduct: { title, priceSell, image: imageAlt[0], _id } }
            dispatch(setToCart(Data))
            // dispatch(setTotalAmount(priceSell))
          } else {
            dispatch(ChartUpdate(Data, "Add", id))
            navigate(0)
          }
        }
        else {
          navigate('/cart')
        }
      }
      return (
        <div key={value._id} className={`${props.page === 'home' ? 'md:w-1/3' : 'md:w-fit'} mb-5 md:mb-0`}>
          <div className="card product-wap rounded-0">
            <div className="card relative rounded-0  ">
              <img className="rounded-0 w-full" src={`http://192.168.0.107:3000/${image[0]}`} alt={imageAlt[0]} />
              <div className="absolute bottom-1/2 top-1/2 left-1/2 right-1/2 card-img-overlay rounded-0 opacity-0 hover:opacity-100 flex items-center justify-center">
                <ul className="grid gap-3">
                  <li className='hover:opacity-100 opacity-80'><button className="p-3 rounded-full bg-lime-600" >
                    <AiFillHeart className="hover:text-white" />
                  </button></li>
                  <li className='hover:opacity-100 opacity-80'>
                    <NavLink to={`/product/${title}`} className="w-10 h-10 grid place-items-center rounded-full bg-lime-600" >
                      <AiFillEye className="hover:text-white" />
                    </NavLink>
                  </li>
                  <li className='hover:opacity-100 opacity-80'>
                    <button
                      onClick={() => {
                        addProductToCart()
                      }}
                      className="p-3 rounded-full bg-lime-600" disabled={stock > 0 ? false : true} >
                      <FaCartPlus className={`${stock === 0 ? 'text-red-600' : 'hover:text-white'} fas fa-cart-plus `} />
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