import { useState, useEffect } from 'react';

// Import images
import img1 from '../../../assets/images/hotel/pexels-clarence-middleton-124350-381541.jpg';
import img2 from '../../../assets/images/hotel/pexels-kaip-591383.jpg';
import img3 from '../../../assets/images/hotel/pexels-pierre-blache-651604-2901215.jpg';
import img4 from '../../../assets/images/hotel/pexels-pixabay-260922.jpg';
import img5 from '../../../assets/images/hotel/pexels-raybilcliff-1600151.jpg'
import img6 from '../../../assets/images/hotel/pexels-sabel-blanco-662810-1638341.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide % totalSlides) + 1);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="carousel overflow-hidden h-screen w-full">
      {/* Slide 1 */}
      <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
        <img src={img1} className="w-full opacity-30 h-screen" alt="Slide 1" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className=" space-y-2 mt-20 text-center text-white">
            <h2 className="font-bold text-3xl md:text-4xl">LUXURY REDEFINED, UNWIND INDULGE</h2>
            <p className="text-2xl">International standard with local flavours</p>
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 bottom-0">
          <button onClick={() => goToSlide(6)} className="btn btn-circle">❮</button>
          <button onClick={() => goToSlide(2)} className="btn btn-circle">❯</button>
        </div>
      </div>
      <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
        <img src={img2} className="w-full opacity-30 h-screen" alt="Slide 2" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className=" space-y-2 mt-20 text-center text-white">
            <h2 className="font-bold text-3xl md:text-4xl">LUXURY REDEFINED, UNWIND INDULGE</h2>
            <p className="text-2xl">International standard with local flavours</p>
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 bottom-0">
          <button onClick={() => goToSlide(1)} className="btn btn-circle">❮</button>
          <button onClick={() => goToSlide(3)} className="btn btn-circle">❯</button>
        </div>
      </div>
      <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
        <img src={img3} className="w-full opacity-30 h-screen" alt="Slide 3" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className=" space-y-2 mt-20 text-center text-white">
            <h2 className="font-bold text-3xl md:text-4xl">LUXURY REDEFINED, UNWIND INDULGE</h2>
            <p className="text-2xl">International standard with local flavours</p>
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 bottom-0">
          <button onClick={() => goToSlide(2)} className="btn btn-circle">❮</button>
          <button onClick={() => goToSlide(4)} className="btn btn-circle">❯</button>
        </div>
      </div>
      <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
        <img src={img4} className="w-full opacity-30 h-screen" alt="Slide 4" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className=" space-y-2 mt-20 text-center text-white">
            <h2 className="font-bold text-3xl md:text-4xl">LUXURY REDEFINED, UNWIND INDULGE</h2>
            <p className="text-2xl">International standard with local flavours</p>
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 bottom-0">
          <button onClick={() => goToSlide(3)} className="btn btn-circle">❮</button>
          <button onClick={() => goToSlide(5)} className="btn btn-circle">❯</button>
        </div>
      </div>
      <div id="slide5" className={`carousel-item relative w-full ${currentSlide === 5 ? 'block' : 'hidden'}`}>
        <img src={img5} className="w-full opacity-30 h-screen" alt="Slide 5" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className=" space-y-2 mt-20 text-center text-white">
            <h2 className="font-bold text-3xl md:text-4xl">LUXURY REDEFINED, UNWIND INDULGE</h2>
            <p className="text-2xl">International standard with local flavours</p>
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 bottom-0">
          <button onClick={() => goToSlide(4)} className="btn btn-circle">❮</button>
          <button onClick={() => goToSlide(6)} className="btn btn-circle">❯</button>
        </div>
      </div>
      <div id="slide6" className={`carousel-item relative w-full ${currentSlide === 6 ? 'block' : 'hidden'}`}>
        <img src={img6} className="w-full opacity-30 h-screen" alt="Slide 6" />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className=" space-y-2 mt-20 text-center text-white">
            <h2 className="font-bold text-3xl md:text-4xl">LUXURY REDEFINED, UNWIND INDULGE</h2>
            <p className="text-2xl">International standard with local flavours</p>
          </div>
        </div>
        <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 bottom-0">
          <button onClick={() => goToSlide(5)} className="btn btn-circle">❮</button>
          <button onClick={() => goToSlide(1)} className="btn btn-circle">❯</button>
        </div>
      </div>
     
      {/* ... Repeat for other slides */}
    </div>
  );
};

export default Slider;

