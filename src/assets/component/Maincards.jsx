/* eslint-disable react/prop-types */

const Maincards = ({id,title,category,price,image, setCartData, data}) => {
    const handleCart = ()=>{
            // setCartData([...cartdata,data[id-1]])
            setCartData(prevCartData => [...prevCartData, data[id-1]])
             console.log("butun clicked", id);
    }
    return (
        <>                            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded ">
                <a className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
                </a>
                <div className="mt-0 rounded-lg bg-slate-300/10 p-3">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-200 title-font max-h-8 flex overflow-y-hidden text-lg font-medium">{title}</h2>
                    <p className="mt-1">${price}</p>
                    <button className='w-full p-1 text-center font-bold  bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500' onClick={handleCart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Maincards