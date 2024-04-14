/* eslint-disable react/prop-types */
import { useContext,useState } from "react"
import { CartDataContaxt } from "../contaxts/CartData"
const Maincards = ({id,title,category,price,image, setCartData, data}) => {
    const {toastHider, cartdata} = useContext(CartDataContaxt);
    const [count,setCount] = useState(0);
    const handleCart = ()=>{
            setCartData([...cartdata,data[id-1]])
            // cartdata.map((e)=>{
            //     console.log(e.data.id,data[id-1].id)
                
            //     if(e.data.id == data[id-1].id){
            //         console.log("already added")
            //         setCount(count+1);
            //         setCartData(prevCartData => [...prevCartData, {count:count,data:data[id-1]}])
            // }
            // else{
            //     console.log("not found")

            // }
        // })
            toastHider();
             console.log("butun clicked", id,cartdata);
    }
    return (
        <>                            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded ">
                <a className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
                </a>
                <div className="mt-0  bg-white p-3 text-white">
                    <h3 className="text-gray-900 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font max-h-8 flex overflow-y-hidden text-lg font-medium">{title}</h2>
                    <p className="mt-1 text-gray-900 font-bold">${price}</p>
                    <button className='w-full p-1 text-center font-bold  bg-blue-600 rounded hover:bg-blue-800 active:bg-red-500' onClick={handleCart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Maincards