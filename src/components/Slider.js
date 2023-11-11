import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Slider = ({ images }) => {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let [currentSlide, setCurrentSlide] = useState(0);
  let numberOfSlides = slides.length;

  useEffect(() => {
    gotoSlide(currentSlide);
  }, [currentSlide, images]);

  function gotoSlide(currentSlideNumber) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(
      (s, i) =>
        (s.style.transform = `translateX(${100 * (i - currentSlideNumber)}%)`)
    );
  }

  function nextSlide() {
    if (currentSlide === numberOfSlides - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(numberOfSlides - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div className="slide" key={index}>
          <img src={image} />
        </div>
      ))}
      <button onClick={prevSlide} class="slider__btn slider__btn--left">
        &larr;
      </button>
      <button onClick={nextSlide} class="slider__btn slider__btn--right">
        &rarr;
      </button>
      {/* <div class="dots"></div> */}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
