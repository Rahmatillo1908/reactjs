import { Link } from "react-router-dom";
const Navbar = ({setShow ,show}) => {
  return (
    <nav>
      <i className={show ?"fa fa-bars barsIcon" : "fa fa-close barsIcon"} onClick={()=>setShow(!show)} ></i>
      <div className="links">
        <Link to="/"><i className="fa fa-home"></i> <span>Home</span></Link>
        <Link to="/about"><i className="fa fa-globe"></i> <span>About</span></Link>
        <Link to="/contact"><i className="fa fa-home"></i> <span>Contact</span></Link>
        <Link to="/settings"><i className="fa fa-gears"></i> <span>Settings</span></Link>
        <Link to="/card"><i class="fa fa-cart-plus"></i> <span>Card <sup>(0)</sup></span></Link>
      </div>
      <div className="navFooter">
        <i className="fa fa-telegram"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>
      </div>
    </nav>
  )
}

export default Navbar;