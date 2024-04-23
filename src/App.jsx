import About from "./assets/component/About";
import Cart from "./assets/component/Cart";
import Container from "./assets/component/Container";
import Navbar from "./assets/component/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Buynow from "./assets/component/Buynow";
import { CartDataContaxt } from "./assets/contaxts/CartData";
import ToastMassage from "./assets/component/ToastMassage";
import Login from "./assets/component/Login";
import Signup from "./assets/component/Signup";
export default function App() {

     const [cartdata,setCartData]=useState([]);
     const [data,setdata]=useState([]);
     const [signUp,setSignUp]=useState([]);
     const [login,setLogin]=useState([]);
     const [category,setCategory]=useState("");
     const [user,setUser]=useState();
     const [toastMassage,setToastMassage]=useState(true);

     const toastHider = ()=>{
       setToastMassage(false)
      setTimeout(()=>{
        setToastMassage(true)
      },500)
     }


     useEffect(()=>{
      async function getdata(){
         let res = await fetch(`https://fakestoreapi.com/products${category}`);
         let data1 =await res.json()
         console.log(data1);
         setdata(data1)
      }
      getdata();
  },[category])
  const handleCategory =(str)=>{
    if(str==="all"){
      setCategory("")   
    }else{
      setCategory("//category/"+str)
    }
    console.log(category)
  }

  const varifyUser = ()=>{
    signUp.map((e)=>{
      if(login.email === e.email && login.password === e.password){
        console.log("user variied")
        setUser(true)
        return;
      }else{
        setUser(false);
      }
    
    })
  }
  return (
    <>
      <CartDataContaxt.Provider value={{cartdata,setCartData,data,toastHider,handleCategory,setSignUp,signUp,login,setLogin,varifyUser,user}}>
      <div className="min-h-screen bg-gradient-to-l from-slate-200 bg-slate-200 bg-cover w-full relative backdrop-blur-sm border text-white mx-0">
        <Navbar  length = {cartdata.length}/>
        {toastMassage ? <div className='px-3 p-2 w-80 h-10 sticky z-30 left-1 top-[95vh]'></div> : <ToastMassage/>  }
        <Routes>
          <Route path="/" element={<Container/>}></Route>
          <Route path="Cart" element={user ? <Cart/> : <Login/>} />
          <Route path="Category" element={<Buynow setCartData={setCartData} cartdata={cartdata} data={data} />} />
          <Route path="About" element={<Login/>} />
          <Route path="account" element={<Signup/>} />
        </Routes>
        
      </div>
      </CartDataContaxt.Provider>
    </>
  )
}