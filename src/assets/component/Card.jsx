import img from "../Images/burger.jpg"
const Card = () => {
  return (
    <section className="text-gray-300 body-font border max-w-3xl m-auto mt-4 rounded-lg" >
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border">
      <img className="object-cover object-center rounded" alt="hero" src={img}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Before they sold out
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-between align-middle  w-48 h-18 text-white font-bold">
        <div className="w-12 text-center bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500">-</div>
        <div className="w-12 text-center ">1</div>
        <div className="w-12 text-center bg-red-500 rounded hover:bg-white hover:text-black active:bg-red-500">+</div>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Card