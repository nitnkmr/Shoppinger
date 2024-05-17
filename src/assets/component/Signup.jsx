import { useContext, useState } from 'react'
import { CartDataContaxt } from '../contaxts/CartData'
import { Link, NavLink } from 'react-router-dom'


const Signup = () => {
  const [userData, setUserData] = useState({})
  console.log(userData)
  const { signUp, setSignUp } = useContext(CartDataContaxt)

  function handleSignup(e) {
    e.preventDefault();
    if (signUp) {
      setSignUp([...signUp, userData])
    } else {
      setSignUp(userData)

    }
    console.log(signUp);
    localStorage.setItem("userInfo", JSON.stringify(signUp))
    console.log(localStorage.getItem("userInfo"))
  }

  return (
    <>
      <div className=" text-black flex justify-center">
        <div className="container border shadow-lg rounded-md w-full md:w-1/2 sm:w-1/2 ">
          <h3 className="font-extrabold m-5 text-center text-4xl">
            Create Your Account
          </h3>
          <form action="" className="flex flex-col p-6" onSubmit={handleSignup}>
            <label htmlFor="text">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              required
            />
            <label htmlFor="text">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              required
            />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              required
            />
            <div className="button flex justify-around" >
              <input
                type="submit"
                value="Sign Up"
                className="mt-6 text-md px-6 py-2.5 w-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              />

            </div>
            <h3 className="font-bold mt-6 text-center text-2xl">
              Already Have An Account.?
              <p className='text-sm font-mono font-normal'>Try Login Instead !</p>
            </h3>
            <div className="button flex justify-around" >
             


              <NavLink
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
                to="../../login"
              > <input
              type="submit"
              value="Log In"
              className="mt-2 text-md px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded"
            />

              </NavLink>


            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup