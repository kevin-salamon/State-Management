import React from 'react'
import './headerstyle.css';
import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="nav header-custom">
            <div className="header-brand">
                <span style={{fontFamily: "'Lexend Zetta', sans-serif"}}>data</span><span style={{fontFamily: "'Bebas Neue', cursive"}}> Garden</span>
            </div>
            <Link to="/" className="link-box">
            <button className="header-button">Home</button>
            </Link>
            <Link to="/table" className="link-box">
            <button className="header-button">Table</button>
            </Link>
            <Link to="/chart" className="link-box">
            <button className="header-button">Chart</button>
            </Link>
        </nav>
    );
}

export default Header;