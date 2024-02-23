import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import About from "./Context/About";
import Contact from "./Context/Contact";
import Home from "./Context/Home";
import "./Context/Product.css";
import Navbar from "./Context/Navbar";
function App() {
  const [show, setShow] = useState(true)
  console.log(show);
  return (
    <BrowserRouter>
      <div className='App'>
        <div className={show ? "left":"leftMenu"}>
          <Navbar setShow={setShow} show={show} />
        </div>
        <div className={show ? "right":"rightMenu"} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App