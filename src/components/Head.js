import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Head() {
   const cartItems=useSelector(store=>store.cart.items);

  return (
   <div className=' shadow-lg m-2 bg-pink-400 rounded-r-2xl rounded-l-2xl flex flex-wrap'>
        <img  className=" m-1 rounded-full h-32 w-32s"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOknLWygwp1R6G05O4KKu8d8YpBExS-0HuVA&usqp=CAU'/>
        <Link to="/"><h1 className='m-9 bg-purple-400 rounded-sm p-2'>Home</h1></Link> 

    <h1 className='m-9 pl-96 font-bold text-lg'>Our Service Time : 10 AM TO 11PM</h1>
    <div className='pl-96'>
    <Link to="/Cart"><button className='bg-purple-500 h-8  font-semibold w-20 rounded-lg m-7  text-lg'>Cart : {cartItems.length}</button></Link>
   </div>
    </div>
    
  )
}

export default Head