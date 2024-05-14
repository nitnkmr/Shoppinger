/* eslint-disable react/prop-types */
import { useEffect,useContext } from "react"
import Maincards from "./Maincards"
import { CartDataContaxt } from "../contaxts/CartData"


const Container = () => {
    const { cartdata, setCartData, data ,handleCategory} = useContext(CartDataContaxt)

    return (
               <> <div className="flex justify-center max-w-120 align-middle flex-row text-sm sm:text-lg mb-3 sm:w-full sticky top-3 z-10">
                    <button className="border w-48 bg-blue-500 p-1" onClick={()=>handleCategory("all")}>All </button>
                    <button className="border w-48 bg-blue-500 p-1" onClick={()=>handleCategory("men's clothing")}>Men </button>
                    <button className="border w-48 bg-blue-500" onClick={()=>handleCategory("women's clothing")}>Women </button>
                    <button className="border w-48 bg-blue-500" onClick={()=>handleCategory("electronics")}>Electronics </button>
                    <button className="border w-48 bg-blue-500" onClick={()=>handleCategory("jewelery")}>Jwellery </button>
                </div>
        <div className='container shadow-lg m-auto rounded-lg text-black'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold">All Products</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {data.map((e) => <Maincards key={e.id} id={e.id} image={e.image} price={e.price} title={e.title} category={e.category} setCartData={setCartData} data={data} cartdata={cartdata} />)}
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Container