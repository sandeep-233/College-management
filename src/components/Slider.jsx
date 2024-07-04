// ImageSlider.js

import React, { useState , useEffect} from 'react';

const images = [
  '/s1.jpg', // Replace with actual image paths
  '/s3.jpg',
  '/s4.jpg',
  '/s5.jpg',
  // Add more image paths here...
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-fit overflow-hidden flex mt-3">

     <img
        src={images[currentSlide === 0 ? images.length - 1 : currentSlide - 1]}
        alt={`Slide ${currentSlide + 1}`}
        className="absolute left-0 top-14  w-1/3 opacity-50"
      />

      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className=" h-[60vh] mx-auto z-10 rounded-md"
      />

<img
        src={images[currentSlide === images.length - 1 ? 0 : currentSlide + 1]}
        alt={`Slide ${currentSlide + 1}`}
        className="absolute right-0 top-14  w-1/3 opacity-50 "
      />

      {/* Previous and Next Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-0 top-2/4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
      >
        Previous
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-2/4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
