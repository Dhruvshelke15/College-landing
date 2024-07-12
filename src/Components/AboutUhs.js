import React from 'react';
import './AboutUhs.css';
import building from '../Components/Resources/building.jpeg'
import Button from '../Components/Button';

const AboutUhs = () => {
    return (
        <div className="box">
            <div className='conent-box'>
            <p className='about'>ABOUT</p>
            <h1  className='heading'>UNIVERSAL HIGH SCHOOL</h1>
            <p className='para'>Universal High School, Dahisar equips every student with the right attitude and skills to help them find their unique place in the world by providing a wholesome and ever-evolving learning environment. So that they can fearlessly pursue a better tomorrow. In line with this mission, Universal is launching the best IIT JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE IIT & Medical is India’s best IIT JEE/ NEET test prep program and has helped more than xxx+ students prepare for IIT JEE and xxx students in NEET for the last few years.
            </p>
            <div className='button'><Button/></div>
            
            </div>
            
            <div className="image-box">
                <img src={building} alt="Description of your image" />
            </div>
            
        </div>
    );
};

export default AboutUhs;
