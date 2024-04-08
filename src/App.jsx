import About from "./assets/component/About";
import Cart from "./assets/component/Cart";
import Category from "./assets/component/Category";
import Container from "./assets/component/Container";
import Navbar from "./assets/component/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
export default function App() {
     const [cartdata,setCartData]=useState([]);
     const [data,setdata]=useState([]);


     useEffect(()=>{
      async function getdata(){
         let res = await fetch('https://fakestoreapi.com/products');
         let data1 =await res.json()
         console.log(data1);
         setdata(data1)
         console.log(data);
      }
      getdata();
  },[])
  return (
    <>

      <div className="min-h-screen bg-gradient-to-r from-black to-fuchsia-950 bg-cover w-full backdrop-blur-sm border text-white mx-0">
        <Navbar  length = {cartdata.length}/>
        <Routes>
          <Route path="/" element={<Container setCartData={setCartData} cartdata={cartdata} data={data} />}></Route>
          <Route path="Cart" element={<Cart setCartData={setCartData} cartdata={cartdata} />} />
          <Route path="Category" element={<Category setCartData={setCartData} cartdata={cartdata} data={data} />} />
          <Route path="About" element={<About/>} />
        </Routes>
      </div>
    </>
  )
}