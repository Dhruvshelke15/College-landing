import React from 'react';
import './IconLine.css';
import { FaHome, FaUser, FaBook, FaEnvelope, FaPhone } from 'react-icons/fa';
import Button from '../Components/Button';
import exampleImage from '../Components/Resources/demo.jpeg'; 

const IconLine = () => {
    return (
        <div className="icon-line-container">
            <div className="top-image-container">
                <img src={exampleImage} alt="Example" className="top-image" />
            </div>
            <div className="icon-line-box">
                <h2 className="heading">Our Learning Approach</h2>
                <div className="icon-container-row">
                    <div className="icon-container">
                        <FaHome className="icon" />
                        <p className="icon-text">Home</p>
                        <div className="dotted-line"></div>
                    </div>
                    <div className="icon-container">
                        <FaUser className="icon" />
                        <p className="icon-text">User</p>
                        <div className="dotted-line"></div>
                    </div>
                    <div className="icon-container">
                        <FaBook className="icon" />
                        <p className="icon-text">Book</p>
                        <div className="dotted-line"></div>
                    </div>
                    <div className="icon-container">
                        <FaEnvelope className="icon" />
                        <p className="icon-text">Envelope</p>
                        <div className="dotted-line"></div>
                    </div>
                    <div className="icon-container">
                        <FaPhone className="icon" />
                        <p className="icon-text">Phone</p>
                    </div>
                </div>
                <Button className="centered-button">Click Me</Button>
            </div>
        </div>
    );
};

export default IconLine;
