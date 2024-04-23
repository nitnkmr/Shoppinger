import React, { useContext, useState } from 'react'
import { CartDataContaxt } from '../contaxts/CartData'

const Signup = () => {
    const [userData, setUserData] = useState({})
    console.log(userData)
   const {signUp, setSignUp} = useContext(CartDataContaxt)

   function handleSignup(){
    if(signUp){
        setSignUp([...signUp,userData])
    }else{
        setSignUp(userData)

    }
    console.log(signUp);
    setUserData({})
   }

    return (
    <>
      <div className=" text-black flex justify-center">
        <div className="container border shadow-lg rounded-md w-full md:w-1/2 sm:w-1/2 ">
          <h3 className="font-extrabold m-5 text-center text-4xl">
            Create Your Account
          </h3>
          <form action="" className="flex flex-col p-6">
            <label htmlFor="text">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
            />
            <label htmlFor="text">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
            />
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
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
            />
            <div className="button flex justify-around" onClick={handleSignup}>
              <input
                type="button"
                value="Sign Up"
                className="mt-6 text-md px-6 py-2.5 w-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              />

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup