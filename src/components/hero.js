import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
  const images = ['hero_1.jpeg', 'hero_2.jpeg', 'hero_3.png', 'hero_4.jpeg', 'hero_5.jpeg'];
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState('slide-left');
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      nextImage();
    }, 5000);
    setIntervalId(id);
  };

  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      startTimer();
    }
  };

  const nextImage = () => {
    setDirection('null');
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setDirection('slide-left');
    }, 800);
    resetTimer();
  };

  const prevImage = () => {
    setDirection('null');
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
      setDirection('slide-right');
    }, 800);
    resetTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="relative image-container">
      <img
        src={`/image/${images[currentImage]}`}
        alt={`Slide ${currentImage + 1}`}
        className={`h-96 w-full object-cover align-top float-up ${direction}`}
      />

      <button onClick={prevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded opacity-75 ml-8 hover:opacity-90 hover:scale-110">
        <FiChevronLeft size={20} />
      </button>

      <button onClick={nextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded opacity-75 mr-8 hover:opacity-90 hover: scale-110">
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroSection;
