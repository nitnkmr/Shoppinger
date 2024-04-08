import Maincards from "./Maincards"
import {HashLink as HashLink} from "react-router-hash-link"
const Category = ({cartdata,setCartData, data}) => {
  return (<>
<div className="flex justify-center max-w-120 align-middle flex-col sm:flex-row sm:w-full sticky top-3 z-10">
<HashLink to="#men" smooth><button className="border w-48 bg-red-500">Men </button></HashLink>
<HashLink to="#women" smooth><button className="border w-48 bg-red-500">Women </button></HashLink>
<HashLink to="#electronics" smooth><button className="border w-48 bg-red-500">Electronics </button></HashLink>
<HashLink to="#jwellery" smooth><button className="border w-48 bg-red-500">Jwellery </button></HashLink>
</div>
    <div className='container border m-auto rounded-lg mt-3'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold " id="men">Man</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                        {data.map((e)=><Maincards key={e.id} id={e.id} image={e.image} price={e.price} title={e.title} category={e.category} setCartData={setCartData} data={data} cartdata={cartdata} />)}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    <div className='container border m-auto rounded-lg mt-3'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold" id="women">Woman</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <Maincards/>
                            <Maincards/>
                            <Maincards/>
                            <Maincards/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    <div className='container border m-auto rounded-lg mt-3'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold" id="electronics">Electronics</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <Maincards/>
                            <Maincards/>
                            <Maincards/>
                            <Maincards/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    <div className='container border m-auto rounded-lg mt-4'>
            <div className="allProduct">
                <h1 className="text-center py-2 font-bold " id="jwellery">Jwellery</h1>
                <section className="text-gray-300 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <Maincards/>
                            <Maincards/>
                            <Maincards/>
                            <Maincards/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
  )
}

export default Category