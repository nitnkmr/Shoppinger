/* eslint-disable react/prop-types */
import { useContext,useState } from "react"
import { CartDataContaxt } from "../contaxts/CartData"
const Maincards = ({id,title,category,price,image, setCartData, data}) => {
    const {toastHider, cartdata, accesCart} = useContext(CartDataContaxt);
    // const [count,setCount] = useState(0);
    const handleCart = ()=>{
        console.log(id)
        setCartData((previousCartData)=>{
            if(previousCartData.length==0){
              return [{count:1,data:data[id-1]}]
            }else{
                let element=previousCartData.find((e)=>e.data.id==id)
                if(element){
                    let index = cartdata.indexOf(element);
                    let newArr = [];
                    newArr.push(...previousCartData)
                    newArr[index]={count:element.count+1,data:data[id-1]}
                    console.log(cartdata,"cartdata")
                    return newArr
                   
                }else{
                    return  [...previousCartData,{count:1,data:data[id-1]}]
                }
                
                }
            }
 
        )}
            toastHider();
    
    return (
        <>                            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded ">
                <a className="block relative h-80 rounded overflow-hidden bg-white">
                    <img alt="ecommerce" className="object-cover object-center w-[250px] m-auto h-[400px] block" src={image} />
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