import React from 'react'
import {Routes} from "react-router-dom"
import { Link } from 'react-router-dom';
import { BsCartCheck } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = ({length}) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between bg-slate-400/25 m-5 rounded-md p-3">
    <div className="logo flex font-bold justify-center m-auto md:m-1 border p-2 rounded-lg">Shop<span className="text-red-500 flex items-center">inger<FaBagShopping /></span></div>
    <div className="logo flex justify-center m-auto md:m-1 p-2 rounded-lg"><input type="search" name="" id="" placeholder='Search' className='rounded-lg p-1 border width-200' /></div>
    <ul className="flex justify-around md:justify-normal items-center">
        <li className="m-1 md:m-2 hover:text-red-500 hover:font-bold"><Link to="/">Home</Link></li>
        <li className="m-1 md:m-2 hover:text-red-500 hover:font-bold"><Link to="/Category">Category</Link></li>
        <li className="m-1 md:m-2 hover:text-red-500 hover:font-bold"><Link to="About">About</Link></li>
        <li className="m-1 md:m-2 hover:text-red-500 hover:font-bold"><Link to="Cart"><button className="px-2 py-2 bg-red-500 text-white font-bold rounded"><BsCartCheck /></button> <span className='border text-xs  min-h-5 min-w-5 text-center fixed top-[150px] right-[82px] bg-blue-800 rounded-full md:top-16 md:right-7'>{length}</span> </Link></li>
    </ul>
</nav>
  )
}

export default Navbar