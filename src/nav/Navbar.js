
import { Link } from "react-router-dom";
import "./nav.css"
import logoimg from "./img/1728221645__1_-removebg-preview.png"

function NavBar() {
  return (
        <div className="nav p-1 d-flex px-4 sticky-top">
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
        </div>
  );
}

export default NavBar;