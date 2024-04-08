/* eslint-disable react/prop-types */

import Card from './Card'
const Cart = ({cartdata,setCartData}) => {

  return (
    <div>
     {cartdata.length > 0 ? cartdata.map((ele,i)=><Card key={i} ele={ele}/>): <h1>Cart is empty</h1> } 
    </div>
  )
}

export default Cart