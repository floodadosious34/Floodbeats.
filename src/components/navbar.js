import "./navBar.css"
import { NavLink } from "react-router-dom";

// NavLink allows for routing in react, it is used in place of the anchor tag 'a'.

function NavBar() {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <NavLink to="/" className="logo">FloodBeats.</NavLink>
                    <ul className="nav-items">
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar