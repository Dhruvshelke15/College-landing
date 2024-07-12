import React from 'react';
import './Header.css';
import logo from '../Components/Resources/school-logo.jpeg'
import pacelogo from '../Components/Resources/Pace-logo.jpeg'

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
            <img src={logo} alt="Universal High School Logo" className="logo1" />
            <div className="vertical-line">|</div>
            <img src={pacelogo} alt="PACE Logo" className="logo2" />
            </div>
            <button className="get-info-button">Get Info</button>
        </header>
    );
};

export default Header;
