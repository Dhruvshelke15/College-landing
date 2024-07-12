import React from 'react';
import './AboutPace.css';
import Pace from '../Components/Resources/pace.jpeg'
import Button from '../Components/Button';

const AboutPace = () => {
    return (
        <div className="box2">
            <div className='conent-box2'>
            <p className='about2'>ABOUT</p>
            <h1  className='heading2'>IIT PACE</h1>
            <p className='para2'>Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT & Medical has embarked on a remarkable journey, transforming the lives of students and shaping the landscape of competitive exam coaching. It all began in 1999, with a humble vision to bridge the gap between aspirations and achievements. PACE IIT & Medical has become synonymous with success in competitive exams and helped xxx students to crack IIT and xxx students to crack NEET/ Medical exams.
            </p>
            <div className='button2'><Button/></div>
            
            </div>
            
            <div className="image-box2">
                <img src={Pace} alt="pace" />
            </div>
            
        </div>
    );
};

export default AboutPace;
