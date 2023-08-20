import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 24.125rem;
  height: 37.5rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 15.625rem;
    height: 20.813rem;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 100%;
  }
`;

const Slide = styled.div`
  flex: 0 0 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 24.125rem;
  height: 37.5rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 15.625rem;
    height: 20.813rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
`;

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  return (
    <SliderContainer>
      <Button className="prev" onClick={prevSlide}>
        &lt;
      </Button>
      <SliderWrapper currentIndex={currentIndex} imageCount={images.length}>
        {images.map((image) => (
          <Slide key={image} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </SliderWrapper>
      <Button className="next" onClick={nextSlide}>
        &gt;
      </Button>
    </SliderContainer>
  );
}

export default ImageSlider;
