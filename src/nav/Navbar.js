
import { Link } from "react-router-dom";
import "./nav.css"
import logoimg from "./img/1728221645__1_-removebg-preview.png"
import { useState } from "react";
function NavBar() {
  const [showNavbar, setShowNavbar]=useState(false)
  const handleShowNavbar=()=>{
   setShowNavbar(!showNavbar)
  }
  
  return (
       <>
       <img  className={`logomob ${showNavbar && "active"}`} src={logoimg} alt="Error"/>
        <div className={`nav p-1 d-flex px-4 sticky-top ${showNavbar && "active"}`}>
          <div className="logo text-white">
        <img src={logoimg} alt="Error"/>
          </div>
            <ul className="list-unstyled d-flex ms-auto my-auto">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li >
              <Link >About</Link>
              </li>
              <li>
                <Link className="gallerylink px-3 py-1 " to="/books">Gallery</Link>
              </li>
            </ul>
            <div className="nav-bar-icon">
          <div className={`open-bar ${showNavbar && "active"}`} onClick={handleShowNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
        </div>
       </>
  );
}

export default NavBar;