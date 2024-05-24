import About from "./assets/component/About";
import Cart from "./assets/component/Cart";
import Container from "./assets/component/Container";
import Navbar from "./assets/component/Navbar";
import { Routes, Route,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Buynow from "./assets/component/Buynow";
import { CartDataContaxt } from "./assets/contaxts/CartData";
import ToastMassage from "./assets/component/ToastMassage";
import Login from "./assets/component/Login";
import Signup from "./assets/component/Signup";
import PrivateRoutes from "./assets/component/PrivateRoutes";
import UserCard from "./assets/component/UserCard";
export default function App() {
  const [cartdata, setCartData] = useState([]);
  const [data, setdata] = useState([]);
  const [signUp, setSignUp] = useState([]);
  const [login, setLogin] = useState([]);
  const [userData, setUserData] = useState({});
  const [category, setCategory] = useState("");
  const [user, setUser] = useState(false);
  const [toastMassage, setToastMassage] = useState(true);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const toastHider = () => {
    setToastMassage(false);
    setTimeout(() => {
      setToastMassage(true);
    }, 500);
  };

  useEffect(() => {
    async function getdata() {
      let res = await fetch(`https://dummyjson.com/products${category}`);
      let data1 = await res.json();
      console.log(data1.products);
      setdata(data1.products);
    }
    getdata();
  }, [category]);
  const handleCategory = (str) => {
    if (str === "all") {
      setCategory("");
    } else {
      setCategory("/category/" + str);
    }
    console.log(category);
  };
  
useEffect(()=>{
  let token = localStorage.getItem("token")
  console.log(token)
  console.log(signUp)
  setUser(token)
},[signUp])
  const varifyUser = () => {
    console.log("varify called");
    if (signUp.length > 0) {
      signUp.map((e) => {
        if (login.email === e.email && login.password === e.password) {
          localStorage.setItem("token","true")
          console.log("token is set as true");
          setUserData({ name: e.fname + " " + e.lname, email: e.email });
          alert("user varified, Moving to Cart.")
          navigate("/private/cart")
          return;
        } else {
          // console.log(false);
          // localStorage.setItem("token","false")
          // console.warn("token is set as false");
          
        }
      });
    } else {
      console.log("false2");
      localStorage.setItem("token","false")
      console.warn("token is set as false2");
    }
  };
  return (
    <>
      <CartDataContaxt.Provider
        value={{
          cartdata,
          setCartData,
          data,
          toastHider,
          handleCategory,
          setSignUp,
          signUp,
          login,
          setLogin,
          varifyUser,
          user,
          search,
          setdata
        }}
      >
        <div className="min-h-screen bg-gradient-to-l from-slate-200 bg-slate-200 bg-cover w-full relative backdrop-blur-sm border text-white mx-0">
          <Navbar length={cartdata.length} setSearch={setSearch} />
          {toastMassage ? (
            <div className="px-3 p-2 w-80 h-10 sticky z-30 left-1 top-[95vh]"></div>
          ) : (
            <ToastMassage />
          )}
          <Routes>
            <Route path="/" element={<Container />}></Route>
            <Route
              path="Category"
              element={
                <Buynow
                setCartData={setCartData}
                cartdata={cartdata}
                data={data}
                />
              }
            />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="About" element={<About />} />
              <Route path="About" element={<UserCard />} />

            <Route path="private" element={<PrivateRoutes />}>
              <Route path="Cart" element={ <Cart /> } />
              <Route path="account" element={user==="false" ?<Signup />:<UserCard setUser={setUser}/>} />
            </Route>
          </Routes>
        </div>
      </CartDataContaxt.Provider>
    </>
  );
}
