import { useState } from "react";

const Banner = () => {
  const images = [
    "https://i.ibb.co/RydWr8p/toy-slider-1.jpg",
    "https://i.ibb.co/BKkgVcY/toy-slider-2.jpg",
    "https://i.ibb.co/XzNXsk9/toy-slider-3.jpg",
    "https://i.ibb.co/3fzgFTN/toy-slider-4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="w-full mb-2">
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className={`carousel-item relative w-full ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              src={image}
              className="w-full md:h-[700px]"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? images.length - 1 : index - 1}`}
                className="btn btn-circle"
                onClick={goToPreviousSlide}
              >
                ❮
              </a>
              <a
                href={`#slide${index === images.length - 1 ? 0 : index + 1}`}
                className="btn btn-circle"
                onClick={goToNextSlide}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
