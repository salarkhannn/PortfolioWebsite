import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="navbar" id="Navbar">
            <p><Link to="/homePage" className="navbar-logo" id="Logo">Salar Khan</Link></p>
            <ul className="page-links">
                <li><Link to="/posterPage" className="page-link">Poster Exploration</Link></li>
                {/* <li><Link to="/drawingPage" className="page-link">Drawing & Illustration</Link></li> */}
                <li><Link to="/brandingPage" className="page-link">Branding & Identity</Link></li>
            </ul>
        </div>
    )
}