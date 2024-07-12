import React from 'react';
import './UniversalHighSchool.css';

const UniversalHighSchool = () => {
    return (
        <div className="school-container">
            <div className="school-header">
                <h1>DAHISAR</h1>
                <h2>UNIVERSAL HIGH SCHOOL</h2>
            </div>
            <div className="school-details">
                <div className="address">
                    <h3>ADDRESS</h3>
                    <p>Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai — 400 068</p>
                </div>
                <div className="admissions">
                    <h3>ADMISSIONS ENQUIRY</h3>
                    <p>+91 224 194 7733 | <a href="mailto:admissions.dahisar@universal.edu.in">admissions.dahisar@universal.edu.in</a></p>
                </div>
                <button className="get-in-touch">Get In Touch</button>
                <div className="map">
                    <img src="https://via.placeholder.com/150" alt="map" />
                </div>
            </div>
            <footer>
                <p>Copyright © 2024 Universal Academy. All rights reserved</p>
            </footer>
        </div>
    );
};

export default UniversalHighSchool;