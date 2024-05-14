import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartDataContaxt } from "../contaxts/CartData";


function Login() {
  const [userData,setUserData] = useState({})
  const {login,setLogin,varifyUser,user} =useContext(CartDataContaxt)

  const handleLogin =()=>{
    setLogin(userData)
    console.log(login);
    console.log(user);

    varifyUser();
  }
  return (
    <>
      <div className=" text-black flex justify-center">
        <div className="container border shadow-lg rounded-md w-full md:w-1/2 sm:w-1/2 ">
          <h3 className="font-extrabold m-5 text-center text-4xl">
            Login here
          </h3>
          <form action="" className="flex flex-col p-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
            />
            <span className="text-red-500">{user  ? "" : "**Invalid Credentials**"}</span>
            <div className="button flex justify-around">
              <input
                type="button"
                value="Log in"
                className="mt-6 text-md px-6 py-2.5 w-1/3 bg-blue-600 hover:bg-blue-700 text-white rounded"
                onClick={handleLogin}
              />

             <Link to="../account" className="mt-6 text-md px-6 py-2.5 w-1/3 bg-blue-600 hover:bg-blue-700 shadow-2xl text-white rounded">
             <input
                type="button"
                value="Sign Up"
                className="w-full h-full"
              />
             </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
