import React from 'react'
import './headerstyle.css';
import { Link } from "react-router-dom";
import NewPlantModal from './NewPlantModal';

function Header() {
    return(
        <nav className="nav header-custom">
            <div className="header-brand">
                <h1>datagarden</h1>
            </div>
            <div className="links">
                <Link to="/" className="link-box">
                <button className="header-button">Home</button>
                </Link>
                <Link to="/table" className="link-box">
                <button className="header-button">Table</button>
                </Link>
                <Link to="/chart" className="link-box">
                <button className="header-button">Chart</button>
                </Link>
            </div>
            <div className="storage">
                <button className="header-button">Save Plants</button>
                <button className="header-button">Load Plants</button>
            </div>
            <NewPlantModal />
        </nav>
    );
}

export default Header;