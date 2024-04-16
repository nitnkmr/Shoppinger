/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from 'react'
import { CartDataContaxt } from '../contaxts/CartData'

import Card from './Card'
const Cart = () => {
const {cartdata,setCartData} = useContext(CartDataContaxt)
const [sumOfItem,setSumOfItem]= useState(0)
useEffect(()=>{
  let sum=0;
  cartdata.forEach((ele) => {
    sum+=parseFloat(ele.data.price)*parseFloat(ele.count)
  });
  setSumOfItem(sum)
},[cartdata])
  return (
    <>
    <div className='flex  text-black'>
           <div className="bg-white w-full rounded p-6 m-5 px-16 mb-3 right-2">
            <h3 className="text-xl font-extrabold  border-b pb-4">Order Summary (Items : )</h3>
            <ul className=" divide-y mt-6">
                <li className="flex flex-wrap gap-4 text-md py-4">Subtotal <span className="ml-auto font-bold">${sumOfItem.toFixed(2)}</span></li>
            </ul>
            <button type="button" className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check
                out</button>
        </div>
    </div>
     {cartdata.length > 0 ? cartdata.map((ele,i)=><Card key={i} index={i} ele={ele} setCartData={setCartData} cartdata={cartdata} setSumOfItem={setSumOfItem}/>): <h1>Cart is empty</h1> } 
    </>
  )
}

export default Cart