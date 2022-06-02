import { useState } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

//

const NavBar = () => {
    // const [openModal, setOpenModal] = useState(false);

    return (
        <nav className="navbar">
            <div className="brand">
                <img src="logo.png" className="logo" alt="img"></img>
                <h1 className="brand-name">Meta</h1>
                <a
                    href="/"
                    className="toggle-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        const navbarLink = document.getElementById("nav-link");
                        navbarLink.classList.toggle("nav-link-active");
                    }}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </div>
            <div id="nav-link" className="nav-link">
                <ul>
                    <li>
                        <NavLink className="NavLink" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink" to="/support">
                            Support
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink" to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        /* //     <img src="logo.png" alt="img.png"></img>
                //     <a href="/" className="toggle">
                //         <span className="bar"></span>
                //         <span className="bar"></span>
                //         <span className="bar"></span>
                //     </a>
                //     <h1>Meta</h1>
                //     <ul>
                //         <li>
                //             <NavLink className="NavLink" to="/">
                //                 Home
                //             </NavLink>
                //         </li>
                //         <li>
                //             <NavLink className="NavLink" to="/about">
                //                 About
                //             </NavLink>
                //         </li>
                //         <li>
                //             <NavLink className="NavLink" to="/support">
                //                 Support
                //             </NavLink>
                //         </li>
                //         <li>
                //             <NavLink className="NavLink" to="/login">
                //                 Login
                //             </NavLink>
                //         </li>
                //     </ul> */
        // {openModal && <Login closeModal={setOpenModal} />}
        // </nav>
    );
};

export default NavBar;
