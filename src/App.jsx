import About from "./assets/component/About";
import Cart from "./assets/component/Cart";
import Category from "./assets/component/Category";
import Container from "./assets/component/Container";
import Navbar from "./assets/component/Navbar";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-r from-black to-fuchsia-950 bg-cover w-full backdrop-blur-sm border text-white mx-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Container/>}></Route>
          <Route path="Cart" element={<Cart />} />
          <Route path="Category" element={<Category />} />
          <Route path="About" element={<About/>} />
        </Routes>
      </div>
    </>
  )
}