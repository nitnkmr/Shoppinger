/* eslint-disable react/prop-types */
import { useEffect} from "react"
import Maincards from "./Maincards"


const Container = ({cartdata,setCartData, data}) => {
  
    useEffect(()=>{
        console.log(cartdata);
        
    },[cartdata])
    return (
        <div className='container border m-auto rounded-lg'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold">All Products</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {data.map((e)=><Maincards key={e.id} id={e.id} image={e.image} price={e.price} title={e.title} category={e.category} setCartData={setCartData} data={data} cartdata={cartdata} />)}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Container