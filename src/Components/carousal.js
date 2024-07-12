// Carousel.js
import React, { useState } from 'react';
import Card from './Card';
import '../Components/carousal.css'; // Import your CSS for carousel styles

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= totalItems ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? totalItems - 3 : prevIndex - 3
    );
  };

  const translateXValue = currentIndex * (360 + 20);

  return (
    <div className="carousel-container">
        
      <button className="prev" onClick={prevSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

      </button>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${translateXValue}px)`,
            width: `${(totalItems / 3) * (360 + 20)}px`, // Adjusted width for all items
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="slide">
              <Card image={item.image}  />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

      </button>
      <div className="dots">
        {Array.from({ length: Math.ceil(totalItems / 3) }).map((_, index) => (
          <span
            key={index}
            className={
              index === Math.floor(currentIndex / 3) ? 'dot active' : 'dot'
            }
            onClick={() => setCurrentIndex(index * 3)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
