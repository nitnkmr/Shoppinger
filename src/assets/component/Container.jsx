/* eslint-disable react/prop-types */
import { useEffect,useContext } from "react"
import Maincards from "./Maincards"
import { CartDataContaxt } from "../contaxts/CartData"
import Banner from "./Banner"


const Container = () => {
    const { cartdata, setCartData, data ,handleCategory,search,setdata} = useContext(CartDataContaxt)
           
    return (
               <>
                <div className="h-full border px-20 ">
               <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2cf73a92012b46ef.jpg?q=20" className="h-full sm:h[400px]" alt=""/>
               <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c7d5963c1f077d41.jpg?q=20" alt=""/>
               </div>
        <div className='container shadow-lg m-auto rounded-lg text-black'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold">All Products</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {data.map((e) => <Maincards key={e.id} id={e.id} image={e.thumbnail} price={e.price} title={e.title} category={e.category} setCartData={setCartData} data={data} cartdata={cartdata} />)}
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Container