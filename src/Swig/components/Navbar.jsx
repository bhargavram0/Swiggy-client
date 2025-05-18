import React, {useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
    navigate("/login"); 
    };





    return (
        <nav className="navbar">
            <div className='rowing'>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>
                <Link to={'/'}>
                    <img className="navbar-logo" src={"https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"} alt="Swiggy Logo" />
                </Link>

            </div>
            <div className={`searchBar ${menuOpen ? 'open' : ''}`}>
                <span className="search-icon">&#128269;</span>
                <input type="text" placeholder='search...' />
            </div>
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <div ><a href="/">Home</a></div>
                <div><Link to={'/about'}>About Us</Link></div>
                <div><Link to={'/contact'}>Contact Us </Link></div>
                <div><Link to={"/help"}>Help</Link></div>
                <div><a href="https://swiggy-dashboard-omega.vercel.app/">Corporate Action</a></div>
            </ul>
            <div className={`navbar-auth ${menuOpen ? 'open' : ''}`}>
                {/* <button className="login-btn"  onClick={handleLoginClick}>Login</button>  */}
                <button className="login-btn" onClick={handleLoginClick}>Sign Up</button>
                {/* <button className="login-btn" onClick={() => window.open("http://localhost:5173", "_blank")}>Corporate Acton</button> */}
            </div>
        </nav>
    );
};

export default Navbar;