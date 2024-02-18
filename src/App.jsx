import About from "./Context/About"
import Contact from "./Context/Contact"
import Home from "./Context/Home"
import Navbar from "./Context/Navbar"
import "./Context/Product.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./Context/Products"

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div className="app" >
          <div className="appLeft">
            <Navbar />
          </div>
          <div className="appRight">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Products />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App