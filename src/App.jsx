import About from "./Context/About"
import Contact from "./Context/Contact"
import Home from "./Context/Home"
import Navbar from "./Context/Navbar"
import "./Context/Product.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./Context/Products"
import ProductAdd from "./Context/ProductAdd"
import { useState } from "react"
const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <BrowserRouter>
        <div className="app" >
          <div className="appLeft" style={{width: show ? "25%": "5%"}}>
            <Navbar show={show} setShow={setShow} />
          </div>
          <div className="appRight" style={{width: show ? "75%": "95%"}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Products />} />
              <Route path="/add" element={<ProductAdd />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App