import About from "./assets/component/About";
import Cart from "./assets/component/Cart";
import Container from "./assets/component/Container";
import Navbar from "./assets/component/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Buynow from "./assets/component/Buynow";
import { CartDataContaxt } from "./assets/contaxts/CartData";
import ToastMassage from "./assets/component/ToastMassage";
export default function App() {

     const [cartdata,setCartData]=useState([]);
     const [data,setdata]=useState([]);
     const [toastMassage,setToastMassage]=useState(false);

     const toastHider = ()=>{
       setToastMassage(true)
      setTimeout(()=>{
        setToastMassage(false)
      },600)
     }


     useEffect(()=>{
      async function getdata(){
         let res = await fetch('https://fakestoreapi.com/products');
         let data1 =await res.json()
         console.log(data1);
         setdata(data1)
      }
      getdata();
  },[])
  return (
    <>
      <CartDataContaxt.Provider value={{cartdata,setCartData,data,toastHider}}>
      <div className="min-h-screen bg-gradient-to-l from-slate-200 bg-slate-200 bg-cover w-full backdrop-blur-sm border text-white mx-0">
        <Navbar  length = {cartdata.length}/>
         {toastMassage && <ToastMassage/>}
        <Routes>
          <Route path="/" element={<Container/>}></Route>
          <Route path="Cart" element={<Cart/>} />
          <Route path="Category" element={<Buynow setCartData={setCartData} cartdata={cartdata} data={data} />} />
          <Route path="About" element={<About/>} />
        </Routes>
      </div>
      </CartDataContaxt.Provider>
    </>
  )
}