
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/images/b-logo.jpg';
import img2 from '../../../assets/images/b-logo.jpg';
import img3 from '../../../assets/images/b-logo.jpg';
import img4 from '../../../assets/images/b-logo.jpg';
import img5 from '../../../assets/images/b-logo.jpg';
import img6 from '../../../assets/images/b-logo.jpg';

const Slider = () => {
  return (
   
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={true}
        stopOnHover={false} 
      >
        <div>
          <img className="max-h-[400px]" src={img1} alt="Slide 1" />
        </div>
        <div>
          <img className="max-h-[400px]" src={img2} alt="Slide 2" />
        </div>
        <div>
          <img className="max-h-[400px]" src={img3} alt="Slide 3" />
        </div>
        <div>
          <img className="max-h-[400px]" src={img4} alt="Slide 4" />
        </div>
        <div>
          <img className="max-h-[400px]" src={img5} alt="Slide 5" />
        </div>
        <div>
          <img className="max-h-[400px]" src={img6} alt="Slide 6" />
        </div>
      </Carousel>
   
  );
};

export default Slider;
