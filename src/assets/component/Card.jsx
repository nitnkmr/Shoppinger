/* eslint-disable react/prop-types */

const Card = ({ ele, setCartData,cartdata}) => {
  const handleRemoveFromCart=(num)=>{
        let filteredData = cartdata.filter((e)=>{
          if(e.id != num ){
            return true
          }else return false
        })
        setCartData(filteredData);
        console.log(cartdata);
        console.log(ele.id);
        console.log(num);

  }

  return (

    <section className="text-gray-300 body-font bg-slate-300/10 max-w-[1500px]  m-auto mx-5 mt-5 rounded-lg" >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border">
          <img className="object-cover object-center rounded" alt="hero" src={ele.image} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{ele.title}
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">${ele.price}
          </h1>
          <p className="mb-8 leading-relaxed">{ele.description}</p>
          <div className="flex justify-between align-middle  w-48 h-18 text-white font-bold">
            <div className="w-12 text-center bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500">-</div>
            <div className="w-12 text-center ">1</div>
            <div className="w-12 text-center bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500">+</div>
          </div>
          <div className="p-2  mt-5  font-bold text-center w-[200px] bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500" onClick={() => handleRemoveFromCart(ele.id)}>Remove</div>
          <div className="flex mt-4 text-black font-medium">
            <span className="mr-3 font-bold text-white">Size</span>
            <button className="border-2 border-gray-300 rounded-full bg-gray-200 w-8 h-8 focus:outline-none">S</button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-200 rounded-full w-8 h-8 focus:outline-none">M</button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-200 rounded-full w-8 h-8 focus:outline-none">L</button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-200 rounded-full w-8 h-8 focus:outline-none">XL</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card