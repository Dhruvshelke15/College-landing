// Card.js
import React from 'react';
import './Card.css'; // Import your CSS for card styles

const Card = ({ image, title }) => {
  return (
    
    <div className="card">
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
