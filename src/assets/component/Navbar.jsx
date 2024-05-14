import React from "react";
import { Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = ({ length }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between bg-slate-900 m-5 rounded-md p-3">
      <NavLink to="/">
        <div className="logo flex font-bold justify-center m-auto md:m-1 flex-ro border p-2 rounded-lg">
          Shopp
          <span className="text-red-500 my-2 flex items-center">
            inger
            <FaBagShopping />
          </span>
        </div>
      </NavLink>
      {/* <div className="logo flex justify-center m-auto md:m-1 p-2 rounded-lg"><input type="search" name="" id="" placeholder='Search' className='rounded-lg p-1 border width-200' /></div> */}
      <ul className="flex justify-around md:justify-normal items-center">
        <li className="m-1 md:m-2 hover:text-red-500">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        {/* <li className="m-1 md:m-2 hover:text-red-500 hover:font-bold"><NavLink to="/Category">Category</NavLink></li> */}
        <li className="m-1 md:m-2 hover:text-red-500">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="About"
          >
            About
          </NavLink>
        </li>
        <li className="m-1 md:m-2 hover:text-red-500">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="account"
          >
            Account
          </NavLink>
        </li>
        <li className="m-1 md:m-2 hover:text-red-500">
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="Cart"
          >
            <button className="px-2 py-2 bg-red-500 text-white font-bold rounded">
              <BsCartCheck />
            </button>{" "}
            <span className="border text-xs  min-h-5 min-w-5 text-center fixed top-[150px] right-[82px] bg-blue-800 rounded-full md:top-16 md:right-7">
              {length}
            </span>{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
