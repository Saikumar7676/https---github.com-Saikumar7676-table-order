import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {List} from './List'
import { addItem } from '../utils/cartSlice';

const Body=()=>{
  const[search,setSearch]=useState('');

  const dispatch=useDispatch();

 const addFoodItem=(items)=>{
  
  dispatch(addItem(items));
 }
  return (
    <>
    <div className='flex flex-col justify-center items-center m-5'>
      < input className=" border border-slate-800 h-10 w-72 rounded-md "type=" text" placeholder='Search'
   onChange={(e)=>setSearch(e.target.value)}/><br></br>
   <address className='font-semibold'>Plot 30,Anukrapur,Hyd</address>
    </div>
      <div className='flex flex-wrap pl-5'>

       {List.filter((items)=>items.title.toLowerCase().includes(search)).map((items)=>(
        <>
        <div className=' rounded-md  m-2  h-72 w-72 shadow-lg bg-purple-100'>
        <img className="m-3 h-62 w-64"key={items.id} src={items.img}/>
              
        <h1 className='font-semibold text-xl pl-7'>{items.title}</h1>

        <h2 className='font-semibold text-md  pl-7'>price :{items.price}</h2>
        <div className='pl-24 m-5'>
       <button className='align-middle bg-purple-400 rounded-md text-lg font-semibold p-1  hover:bg-blue-300' onClick={()=>addFoodItem(items)}>Order</button> 
        </div>
        </div>
         </>
       ))}
                      
</div>
    </>
  )
  
}

export default Body