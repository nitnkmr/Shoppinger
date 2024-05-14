import { useContext, useState } from 'react'
import { CartDataContaxt } from '../contaxts/CartData'
// import { useHistory } from 'react-router-dom';

const Signup = () => {
    // const history = useHistory();
    const [userData, setUserData] = useState({})
    console.log(userData)
   const {signUp, setSignUp} = useContext(CartDataContaxt)

   function handleSignup(e){
    e.preventDefault();
    if(signUp){
        setSignUp([...signUp,userData])
    }else{
        setSignUp(userData)

    }
    console.log(signUp);
    history.push('/login')
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
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
              required
            />
            <label htmlFor="text">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
              required
            />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              className="p-2  my-2 rounded border border-blue-600"
              onChange={(e) => setUserData({...userData,[e.target.name]:e.target.value})}
              required
            />
            <div className="button flex justify-around" >
              <input
                type="submit"
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