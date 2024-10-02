import { useState } from "react";
import { Link } from "react-router-dom";

import hamburgerMenuIcon from '../src/assets/Logo/menu.svg';

export default function Navbar(){
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleMenuClick = () => {
        setIsDropdownVisible((prevState) => !prevState);
    };

    return (
        <div className="navbar" id="Navbar">
            <p><Link to="/homePage" className="navbar-logo" id="Logo">Salar Khan</Link></p>
            <ul className="page-links">
                <li><Link to="/posterPage" className="page-link">Poster Exploration</Link></li>
                {/* <li><Link to="/drawingPage" className="page-link">Drawing & Illustration</Link></li> */}
                <li><Link to="/brandingPage" className="page-link">Branding & Identity</Link></li>
            </ul>
            <img
                src={hamburgerMenuIcon}
                className="menu-icon"
                alt="menu icon"
                onClick={handleMenuClick}
            />

            {isDropdownVisible && (
                <div className="dropdown-menu">
                    <ul>
                        <li><Link to="/posterPage">Poster Exploration</Link></li>
                        <li><Link to="/brandingPage">Branding & Identity</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}