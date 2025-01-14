import React, { useState, useEffect } from "react";
import "../../css/user/Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "인기 상품 구매",
      description: "Explore the latest sneakers and streetwear.",
      buttonText: "Shop Now",
    },
    {
      title: "스타일 피드",
      description: "Get ready for summer with our new arrivals.",
      buttonText: "View Collection",
    },
    {
      title: "인기 착장",
      description: "Don't miss out on exclusive releases.",
      buttonText: "Check Now",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-container">
      <div className="hero-slider">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
            <button>{banner.buttonText}</button>
          </div>
        ))}
      </div>
      
      <button onClick={prevSlide} className="slider-button prev">
        &lt;
      </button>
      <button onClick={nextSlide} className="slider-button next">
        &gt;
      </button>
      
      <div className="slider-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;