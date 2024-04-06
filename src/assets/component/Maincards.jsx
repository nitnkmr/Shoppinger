import React from 'react'

const Maincards = () => {
    return (
        <>                            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded ">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://i.pravatar.cc" />
                </a>
                <div className="mt-0 rounded-lg bg-slate-300/10 p-3">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-200 title-font text-lg font-medium">The Catalyzer</h2>
                    <p className="mt-1">$16.00</p>
                    <button className='w-full p-1 text-center font-bold  bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500'>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Maincards