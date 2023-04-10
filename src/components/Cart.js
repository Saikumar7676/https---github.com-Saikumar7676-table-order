import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
const Cart=()=>{
 const cartItems = useSelector((store)=>store.cart.items);

const dispatch=useDispatch();

const clearFoodCart=()=>
{
  dispatch(clearCart());
}
  return (
    <>
   {cartItems == 0 ?<h1 className='text-center text-3xl font-semibold pt-20 '>Cart is empty</h1>: 
    <Link to="/Cart" ><h1 className='text-3xl text-center  pt-20'> Cart items-
    {cartItems.length}</h1></Link>}
    <div className='clearcart'>
    <button className=' bg-green-300 p-4 rounded-md ' onClick={()=>clearFoodCart()}>ClearCart</button>

    </div>

  <div className='flex flex-wrap pl-5'>
    {cartItems.map((item)=>
    (
      <div className='rounded-md  m-2  h-72 w-72 shadow-lg bg-purple-100'>
      <img className="m-3 h-62 w-64"key={item.id} src={item.img}/>
              
        <h1 className='font-semibold text-xl pl-7'>{item.title}</h1>

        <h2 className='font-semibold text-md  pl-7'>price :{item.price}</h2>
        </div>

    ))}
    </div>

    <div className='continue'>
    <Link to="/Cart/Payment">{cartItems.length > 0 ? <button className='m-9 bg-purple-500 text-center p-4 font-bold'> Continue</button> : null }</Link>
</div>
    </>
  )
}


export default Cart