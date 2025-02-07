import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div
          className="carousel-slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div className="carousel-slide" key={index}>
              {child}
            </div>
          ))}
        </div>
        <button className="carousel-button left" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="carousel-button right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export { Carousel };
