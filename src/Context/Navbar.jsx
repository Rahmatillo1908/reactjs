import { Link } from "react-router-dom"
const Navbar = ({ setShow, show }) => {
  return (
    <nav style={{ width: show ? "25%" : "5%" }}>
      <div className="navTop"  >
        <i onClick={() => setShow(!show)} className="fa fa-bars"></i>
      </div>
      <div className="navLinks">
        <Link to="/"><i className="fa fa-home"></i><b>Home</b></Link>
        <Link to="/product"><i className="fa fa-cart-arrow-down"></i><b>Products</b></Link>
        <Link to="/about"><i className="fa fa-file"></i><b>About</b></Link>
        <Link to="/contact"><i className="fa fa-phone"></i><b>Contact</b></Link>
        <Link to="/add"><i className="fa fa-plus"></i><b>Add Product</b></Link>
      </div>
      <div style={{ opacity: show ? "1" : "0" }} className="navBottom">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-telegram"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-github"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-youtube-play"></i>
      </div>
    </nav>
  )
}

export default Navbar